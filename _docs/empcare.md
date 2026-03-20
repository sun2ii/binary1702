# Care CNS: Elder Care Lead Management System

## Executive Summary

**Care CNS** (Care Central Nervous System) is a Next.js-based elder care lead management and patient care system. It bridges the operational gap between patient inquiries (leads) and active patient care management.

**Tech Stack:**
- Next.js 14, React 18, TypeScript
- PostgreSQL (Neon serverless)
- Zod validation, React Hook Form
- TailwindCSS
- jose (JWT authentication)

**Core Philosophy:**
1. **Separation of Concerns** - Distinct phases (leads vs. patients) with different write patterns
2. **Immutability as Default** - Leads never update (write-once); pipeline tracks state via append-only log
3. **Minimal Complexity** - Single source of truth, parameterized queries, strong typing everywhere

**Location:** `/Users/ben/Documents/CareCNS`

---

## System Architecture: Primitives → Composition → Emergence

### Primitives (Core Data Structures)

Three fundamental entities:

```
referral_sources → Identity (who refers patients)
leads            → Intake snapshot (what we know at first contact)
lead_pipeline    → State evolution (what happened over time)
```

### Composition Rules

```
Phase 1: LEAD MANAGEMENT (Inquiry Stage)
  referral_sources (permanent identity)
    ↓ FK
  leads (immutable intake snapshot)
    ↓ FK
  lead_pipeline (append-only state log)
    └─ Rule: Latest state = ORDER BY created_at DESC LIMIT 1

Phase 2: CONVERSION EVENT
  lead.status = 'closed_won'
    → INSERT INTO patients (lead_id)
    → UPDATE lead_pipeline (converted_to_patient_id)

Phase 3: PATIENT MANAGEMENT (Active Care)
  patients (converted leads)
    ├─ patient_assessments (append-only health evaluations)
    ├─ care_plans (service/treatment plans)
    └─ services (billable activity log)
```

### Emergence (System Capabilities)

From these primitives emerge:
- Lead qualification pipeline
- Patient care coordination
- Staff task assignment
- Service billing and tracking
- Facility management
- Shift scheduling
- Assessment and care planning

---

## Database Schema: Three-Table Foundation

### Lead Management (Phase 1)

**referral_sources** - Permanent identity
```sql
id                  UUID PRIMARY KEY
created_at          TIMESTAMPTZ
referral_source_name TEXT NOT NULL
organization_name   TEXT
referral_type       TEXT (hospital, snf, physician, family, etc.)
contact_name        TEXT
contact_title       TEXT
phone               TEXT
email               TEXT
address             TEXT
relationship_notes  TEXT
status              TEXT DEFAULT 'active'
```

**leads** - Immutable intake snapshot (write-once)
```sql
id                      UUID PRIMARY KEY
created_at              TIMESTAMPTZ
patient_full_name       TEXT NOT NULL
phone                   TEXT
email                   TEXT
patient_address         TEXT
patient_history         TEXT
responsible_party_name  TEXT
responsible_party_phone TEXT
responsible_party_email TEXT
responsible_party_relationship TEXT
care_type               TEXT
facility_id             UUID FK → facilities
medications             JSONB DEFAULT '[]'
allergies               JSONB DEFAULT '[]'
additional_notes        JSONB DEFAULT '[]'
age                     INTEGER
birthdate               DATE
height                  TEXT
weight                  TEXT
referral_source_id      UUID FK → referral_sources
created_by_user_id      UUID FK → users
display_id              TEXT (formatted: YYYYMMDDHHMMSS)
```

Rule: NEVER UPDATE. This is the intake snapshot.

**lead_pipeline** - State evolution log (append-only)
```sql
id                      UUID PRIMARY KEY
created_at              TIMESTAMPTZ
lead_id                 UUID FK → leads
status                  TEXT (new, contacted, assessment_booked, tour, convert, closed)
assigned_staff_member   TEXT
follow_up_date          DATE
internal_notes          TEXT
assessment_date         DATE
assessment_time         TIME
assessment_location     TEXT
tour_date               DATE
tour_time               TIME
tour_facility_id        UUID FK → facilities
converted_to_patient_id UUID FK → patients
closure_reason          TEXT
```

Rule: Only INSERT. Each row is a state transition event.

Query pattern for latest state:
```sql
SELECT l.*, lp.status, lp.assigned_staff_member
FROM leads l
LEFT JOIN LATERAL (
  SELECT status, assigned_staff_member, follow_up_date
  FROM lead_pipeline
  WHERE lead_id = l.id
  ORDER BY created_at DESC
  LIMIT 1
) lp ON true
```

### Patient Management (Phase 3)

**facilities** - Care locations
```sql
id                    UUID PRIMARY KEY
facility_name         TEXT NOT NULL
facility_type         TEXT (care_home, hospital, hospice, etc.)
address               TEXT
phone                 TEXT
capacity              INTEGER
license_number        TEXT
license_expiry_date   DATE
relationship_type     TEXT
contact_person        TEXT
status                TEXT DEFAULT 'active'
```

**staff** - Caregivers and coordinators
```sql
id                    UUID PRIMARY KEY
employee_id           TEXT UNIQUE
full_name             TEXT NOT NULL
phone                 TEXT
email                 TEXT
role                  TEXT (caregiver, nurse, coordinator, admin)
hire_date             DATE
employment_status     TEXT (active, on_leave, terminated)
certifications        JSONB DEFAULT '[]'
specializations       JSONB DEFAULT '[]'
languages_spoken      JSONB DEFAULT '[]'
max_hours_per_week    INTEGER
rating                DECIMAL
```

**patients** - Converted leads
```sql
id                        UUID PRIMARY KEY
lead_id                   UUID FK → leads UNIQUE (one-to-one)
patient_status            TEXT (active, on_hold, discharged, deceased)
primary_staff_id          UUID FK → staff
facility_id               UUID FK → facilities
contract_start_date       DATE
contract_end_date         DATE
contracted_hours_per_week INTEGER
hourly_rate               DECIMAL
payment_method            TEXT
billing_cycle             TEXT
override_phone            TEXT
override_email            TEXT
override_address          TEXT
care_notes                TEXT
converted_at              TIMESTAMPTZ
converted_by              UUID FK → users
```

Key: Demographics live in `leads` table. Contact info overrides live here.

**patient_assessments** - Health evaluations (append-only)
```sql
id                  UUID PRIMARY KEY
patient_id          UUID FK → patients
assessed_by         UUID FK → users
assessment_date     DATE
assessment_type     TEXT (initial, quarterly, annual, etc.)
mobility_score      INTEGER
cognitive_score     INTEGER
self_care_score     INTEGER
medications         JSONB
diagnoses           JSONB
fall_risk_level     TEXT
clinical_notes      TEXT
recommendations     TEXT
next_assessment_due DATE
flagged_for_review  BOOLEAN
```

**care_plans** - Service plans
```sql
id                      UUID PRIMARY KEY
patient_id              UUID FK → patients
plan_name               TEXT
plan_type               TEXT
effective_date          DATE
review_date             DATE
care_goals              JSONB
services_included       JSONB
frequency_per_week      INTEGER
duration_per_visit_min  INTEGER
special_instructions    TEXT
equipment_needed        JSONB
approved_by             UUID FK → users
plan_status             TEXT (active, archived, pending_approval)
```

**services** - Billable activity log (append-only)
```sql
id                UUID PRIMARY KEY
patient_id        UUID FK → patients
care_plan_id      UUID FK → care_plans
staff_id          UUID FK → staff
service_date      DATE
service_type      TEXT
start_time        TIME
end_time          TIME
duration_minutes  INTEGER
billable_hours    DECIMAL
hourly_rate       DECIMAL
total_amount      DECIMAL
service_status    TEXT (pending, approved, billed, paid)
service_notes     TEXT
verified_by       UUID FK → users
verified_at       TIMESTAMPTZ
```

---

## Data Flow Decision Tree

```
Incoming lead inquiry
  ├─ New lead?
  │   └─ INSERT INTO leads (immutable snapshot)
  │       └─ INSERT INTO lead_pipeline (status: 'new')
  │
  ├─ Status change?
  │   └─ INSERT INTO lead_pipeline (new status row)
  │       ├─ Status = 'contacted' → Record follow_up_date
  │       ├─ Status = 'assessment_booked' → Record assessment_date/time
  │       ├─ Status = 'tour' → Record tour_date/facility
  │       └─ Status = 'convert_to_patient' → Trigger conversion
  │
  ├─ Convert to patient?
  │   └─ INSERT INTO patients (lead_id = X)
  │       └─ INSERT INTO lead_pipeline (converted_to_patient_id)
  │
  └─ Patient contact info changed?
      └─ UPDATE patients SET override_phone/email
          (Never UPDATE leads table)

Active patient
  ├─ Assessment needed?
  │   └─ INSERT INTO patient_assessments
  │
  ├─ Care plan change?
  │   └─ INSERT INTO care_plans (or UPDATE if modifiable)
  │
  └─ Service delivered?
      └─ INSERT INTO services (billable log)
```

---

## Validation: Single Source of Truth

All schemas defined in `/lib/validations.ts` using Zod.

### Core Schemas

**leadSchema** - Lead intake form
```typescript
{
  patient_full_name: string (required),
  phone: phone_optional,
  email: email_optional,
  patient_address: string.optional(),
  responsible_party_name: string.optional(),
  care_type: string.optional(),
  medications: array of strings,
  allergies: array of strings,
  birthdate: string.optional(),
  referral_source_id: string.optional()
}
```

**pipelineSchema** - Status updates
```typescript
{
  lead_id: string,
  status: PipelineStatusEnum,
  assigned_staff_member: string.optional(),
  follow_up_date: string.optional(),
  internal_notes: string.optional(),
  assessment_date: string.optional(),
  tour_facility_id: string.optional(),
  closure_reason: string.optional()
}
```

**patientConversionSchema** - Lead → Patient
```typescript
{
  lead_id: string,
  contract_start_date: string,
  contracted_hours_per_week: number,
  hourly_rate: number,
  payment_method: string,
  primary_staff_id: string.optional(),
  facility_id: string.optional()
}
```

### Key Enums

**PipelineStatusEnum**
- `new` - Initial contact
- `new_urgent` - Urgent intake
- `contacted` - First outreach complete
- `assessment_booked` - Assessment scheduled
- `tour` - Facility tour scheduled
- `convert_to_patient` - Converting to active patient
- `closed` - Lead closed (won't convert)

**ServiceTypeEnum**
- `companionship` - Social interaction
- `personal_care` - ADL assistance
- `overnight` - Overnight care
- `24_hour` - Round-the-clock
- `live_in` - Live-in caregiver

**PaymentMethodEnum**
- `cal_aim` - Cal Aim program
- `private_pay` - Self-pay
- `ltc` - Long-term care insurance
- `other` - Other payment method

### Enforcement Pattern

```
User Input (Form)
  → React Hook Form (client validation)
    → Zod schema parse
      → API Route (server validation)
        → Zod schema parse again
          → PostgreSQL INSERT
```

Both client and server validate. Schema is single source of truth.

---

## API Routes & Patterns

### Lead Management

**POST /api/leads** - Create lead
- Input: `leadSchema`
- Output: `{ success, data: { id, created_at } }`
- Pattern: INSERT only

**POST /api/pipeline** - Update lead status
- Input: `pipelineSchema`
- Output: `{ success, data: { id } }`
- Pattern: INSERT (append) to pipeline

**GET /api/leads** - Fetch leads with latest status
- Query params: `status`, `assigned_to`, `incomplete_only`
- Pattern: LATERAL join for latest status

### Patient Management

**POST /api/patients/convert** - Convert lead to patient
- Input: `patientConversionSchema`
- Actions:
  1. INSERT INTO patients
  2. INSERT INTO lead_pipeline (with converted_to_patient_id)
- Output: `{ success, patient_id }`

**GET /api/patients** - All active patients
- Returns: patients + demographics from leads table
- Pattern: JOIN with leads, staff, facilities

**GET /api/patients/[id]** - Patient detail
- Returns: Full patient record with assessments, care plans, services

### Supporting Entities

**GET/POST /api/facilities** - Facility CRUD
**GET/POST /api/staff** - Staff CRUD
**POST /api/assignments** - Create task assignment
**POST /api/assessments** - Create patient assessment
**POST /api/care-plans** - Create/update care plan
**POST /api/services** - Log billable service

---

## Authentication & Authorization

**Strategy:** JWT tokens (24h duration) + bcryptjs password hashing

**User Roles:**
1. `master` - Full system access
2. `admin` - Administrative functions
3. `marketing` - Lead management only
4. `caregiver` - Patient care tasks
5. `care_manager` - Care coordination

**Auth Flow:**
```
Login → bcrypt compare password → JWT sign → HTTP-only cookie
  ↓
Protected Route → JWT verify → Role check → Allow/Deny
```

**Token stored in:** HTTP-only cookie (not accessible via JavaScript)

**Implementation:** `/lib/auth.ts`

---

## Frontend Architecture

### Forms (Data Entry)

**Lead Intake** - `app/intake/leads/page.tsx`
- React Hook Form + Zod resolver
- Dynamic arrays (medications, allergies)
- Conditional fields based on care_type
- Auto-calculates age from birthdate
- Phone formatting component

**Lead Conversion** - `app/leads/convert/[leadId]/page.tsx`
- Loads lead data (read-only)
- Collects patient-specific fields
- Contract dates, rates, staff assignment

**Contact/Referral** - `app/intake/contact/page.tsx`
- Create new referral source

### Dashboards (Data Display)

**Leads Dashboard** - `app/leads/page.tsx`
- LATERAL join pattern (server component)
- Filters: status, staff, incomplete fields
- Sortable columns
- Inline status updates
- Missing fields indicator
- Pagination

**Patients Dashboard** - `app/patients/page.tsx`
- Active patients list
- Demographics from leads table
- Current care assignments

**Patient Detail** - `app/patients/[id]/page.tsx`
- Full patient record
- Assessment history timeline
- Active care plans
- Service log with billing
- Task assignments

**Caregiver Dashboard** - `app/caregiver/page.tsx`
- Assigned patients
- Task checklists
- Shift-based views
- Observation notes

### Supporting Views

**Staff Management** - `app/staff/page.tsx`
**Facilities Management** - `app/facilities/page.tsx`
**Referral Sources** - `app/referrals/page.tsx`

---

## Critical Invariants & Failure Modes

### System Invariants

| Invariant | Violation | Consequence |
|-----------|-----------|-------------|
| Leads never UPDATE | `UPDATE leads SET phone = ...` | Loses immutable intake snapshot |
| Pipeline is append-only | `UPDATE lead_pipeline SET status = ...` | Destroys temporal log |
| One Zod schema = truth | Rename schema field, forget to update form | Silent NULL in database |
| LATERAL for latest state | Forget `ORDER BY created_at DESC LIMIT 1` | Shows first status, not current |
| Demographics in leads only | Copy fields to patients table | Data duplication, sync issues |
| Contact overrides in patients | Update `lead.phone` instead | Either violates immutability or ignored |

### Common Failure Patterns

**Issue:** "Lead showing old status"
```
Cause: Missing LATERAL join or wrong ORDER BY
Fix: Use LATERAL pattern from architecture docs
```

**Issue:** "Patient phone number not updating"
```
Cause: Updating lead.phone instead of patient.override_phone
Fix: Always use override_* fields on patients table
```

**Issue:** "Form submission creates NULL field"
```
Cause: Form input name doesn't match Zod schema key
Fix: Verify field names in validations.ts match form
```

**Issue:** "Can't query patient demographics"
```
Cause: Looking in patients table instead of leads table
Fix: JOIN patients with leads on lead_id
```

---

## Extension Decision Tree

```
Need to modify?
  ├─ Add field to lead form?
  │   └─ Update validations.ts → migration (ALTER TABLE) → API INSERT → form input
  │
  ├─ Add new pipeline status?
  │   └─ Add to PipelineStatusEnum → use in POST /api/pipeline (no schema change)
  │
  ├─ Change patient contact info?
  │   └─ UPDATE patients.override_phone (never UPDATE leads.phone)
  │
  ├─ Query lead status?
  │   └─ Use LATERAL join pattern (not direct JOIN)
  │
  ├─ Track new patient data?
  │   └─ Assess if belongs in:
  │       ├─ leads (intake snapshot) → requires lead_id UNIQUE constraint
  │       ├─ patients (post-conversion) → one row per patient
  │       ├─ assessments (repeated evaluations) → append-only
  │       └─ services (activity log) → append-only
  │
  └─ Add new form/feature?
      └─ Define Zod schema → migration → API route → form component
```

---

## Development Patterns (from CLAUDE.md)

### Code Quality Standards

1. **Minimize complexity** - Simplest solution wins
2. **Preserve relational integrity** - FK constraints enforced
3. **Separate concerns** - Identity (referral), intake (lead), evolution (pipeline)
4. **Never over-engineer** - No premature abstraction
5. **Server-side business logic** - Frontend is presentation only
6. **Zod validation everywhere** - Client and server
7. **No tight coupling** - Each table has clear responsibility
8. **Write for future operators** - Self-documenting code
9. **Fix root causes** - No bandaid fixes

### Query Patterns

**Latest pipeline status:**
```sql
LEFT JOIN LATERAL (
  SELECT status, assigned_staff_member
  FROM lead_pipeline
  WHERE lead_id = l.id
  ORDER BY created_at DESC
  LIMIT 1
) lp ON true
```

**Patient with demographics:**
```sql
SELECT
  p.id, p.patient_status,
  l.patient_full_name, l.birthdate,
  COALESCE(p.override_phone, l.phone) AS current_phone,
  s.full_name AS primary_caregiver
FROM patients p
JOIN leads l ON p.lead_id = l.id
LEFT JOIN staff s ON p.primary_staff_id = s.id
```

**Prevent duplicate conversion:**
```sql
-- Constraint on patients table
UNIQUE(lead_id)  -- One patient per lead
```

---

## File Structure

```
/app
  /api
    /auth/* - JWT authentication
    /leads - Lead CRUD, pipeline updates
    /patients/* - Patient conversion, management
    /facilities - Facility CRUD
    /staff - Staff CRUD
    /assignments - Task delegation
    /assessments - Patient assessments
    /care-plans - Care plan management
    /services - Service logging
  /intake
    /leads - Lead intake form
    /contact - Referral source form
  /leads - Lead dashboard
  /patients - Patient dashboards
  /caregiver - Caregiver dashboard
  /care-manager - Care manager views
  /staff - Staff management
  /facilities - Facility management
  /referrals - Referral source management

/lib
  validations.ts - All Zod schemas (single source of truth)
  db.ts - Neon PostgreSQL connection
  auth.ts - JWT + bcrypt utilities
  logger.ts - API request logging

/migrations
  001-061 - SQL schema evolution (61 files, 2,614 lines)

/scripts
  migrate.js - Execute migrations
  reset-db.js - Full database reset
  seed-admin.js - Create admin user

/_docs
  architecture.md - System design, query patterns
  database-setup.md - Migration system
  scripts.md - Script documentation
  tasks.md - Development priorities
```

---

## Current Implementation Status

**Completed:**
- Lead intake and pipeline management
- Lead-to-patient conversion
- Patient management with demographics overrides
- Staff and facility CRUD
- Authentication (5 role levels)
- Caregiver task system
- Assessment and care planning
- Service logging with billing
- Task assignments
- Shift scheduling
- Visitor logs

**Not Yet Implemented:**
- Full calendar/scheduling interface
- Document storage and attachments
- Comprehensive EHR capabilities
- Payroll tracking

**Recent Development Focus (from tasks.md):**
1. Populate facility "1099 Stewart" with staff and residents
2. Data population for staff, caregivers, facilities
3. Referral source testing with stakeholders

---

## ChatGPT Context: What to Share

### If Seeking Strategic Input on Care CNS

**System Overview:**
- Three-phase architecture (lead → conversion → patient)
- Immutable intake patterns with append-only state logs
- PostgreSQL with 61 migrations tracking evolution
- Full-stack Next.js with TypeScript, Zod validation

**Key Design Decisions:**
- Why immutability for leads (audit trail, intake snapshot preservation)
- Why append-only pipeline (temporal state history)
- Why demographics stored once in leads table (single source of truth)
- Why LATERAL joins for latest state queries

**Current Challenges/Questions for ChatGPT:**
- How to optimize LATERAL join performance at scale?
- Best practices for handling patient contact info changes without violating lead immutability?
- Strategies for calendar/scheduling integration given current architecture?
- Approaches to document storage that align with append-only philosophy?
- Ideas for improving caregiver task completion tracking?

**Areas for Strategic Discussion:**
- Scaling patterns (what breaks first at 10k leads? 100k?)
- Reporting and analytics architecture
- Backup and disaster recovery given append-only patterns
- Multi-facility coordination and data isolation
- Integration with external EHR systems
- Compliance considerations (HIPAA, state regulations)

### If Positioning Care CNS as Binary 1702 Portfolio Piece

**Use Case:**
- Demonstrates custom software development capabilities
- Shows understanding of complex healthcare workflows
- Exemplifies structured system design (not ad-hoc code)
- Proves ability to build production CRUD systems with real business logic

**Differentiators:**
- Not a generic CRUD app, specialized for elder care operations
- Built-in compliance considerations (audit trails, immutability)
- Role-based access (caregivers see different views than admins)
- Operational focus (designed for daily use by non-technical staff)

**Talking Points for Binary 1702 Website:**
- "Built complete elder care management system from lead intake to patient billing"
- "Designed immutable data architecture for healthcare compliance and audit trails"
- "Custom authentication with role-based access for 5 user types"
- "61 database migrations tracking 6 months of iterative feature development"

**Potential Case Study Structure:**
1. **Challenge:** Elder care business drowning in spreadsheets, no lead tracking, billing chaos
2. **Solution:** Custom-built Care CNS with three-phase pipeline and immutable audit trails
3. **Results:** (metrics if available - lead conversion rates, time saved, billing accuracy)
4. **Technical Highlights:** Next.js, PostgreSQL, Zod validation, JWT auth, 61 migrations
5. **Business Impact:** Transformed operations from reactive to systematic

---

## System Mental Model (TL;DR)

**Think of Care CNS as a state machine:**

1. **Leads are write-once records** (the intake snapshot never changes)
2. **Pipeline is an append-only log** (every status change is a new row)
3. **Latest state = most recent pipeline entry** (ORDER BY created_at DESC LIMIT 1)
4. **Patients are converted leads** (one-to-one via lead_id UNIQUE)
5. **Demographics live in leads** (patients just reference them)
6. **Contact changes use overrides** (patient.override_phone, not lead.phone)

**The architecture forces correctness:**
- Can't accidentally update intake data (leads are write-once)
- Can't lose state history (pipeline is append-only)
- Can't create duplicate patients (UNIQUE constraint on lead_id)
- Can't query wrong status (LATERAL join enforces latest)

**Complexity emerges from simple rules:**
- Three tables (referral, lead, pipeline) create full lead management
- One conversion event (INSERT patient) bridges to care management
- Append-only logs throughout enable time-travel queries
- Demographics JOIN pattern preserves single source of truth

---

## Related Documentation

- **Care CNS Architecture:** `/Users/ben/Documents/CareCNS/_docs/architecture.md`
- **Care CNS Development Guide:** `/Users/ben/Documents/CareCNS/CLAUDE.md`
- **Validation Schemas:** `/Users/ben/Documents/CareCNS/lib/validations.ts`
- **Database Setup:** `/Users/ben/Documents/CareCNS/_docs/database-setup.md`
- **Binary 1702 Blueprint:** `/Users/ben/Documents/binary1702/_docs/binary-1702-blueprint.md`

---

**Last Updated:** March 2026
**Project Location:** `/Users/ben/Documents/CareCNS`
**Documentation Location:** `/Users/ben/Documents/binary1702/_docs/empcare.md`
