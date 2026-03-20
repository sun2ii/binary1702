import { sql } from '@vercel/postgres';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function runMigration() {
  try {
    const migrationPath = join(__dirname, '../migrations/003_contact_leads.sql');
    const migration = readFileSync(migrationPath, 'utf-8');

    console.log('Running migration: 003_contact_leads.sql');
    await sql.query(migration);
    console.log('✅ Migration completed successfully!');

    // Verify table was created
    const result = await sql`
      SELECT table_name, column_name, data_type
      FROM information_schema.columns
      WHERE table_name = 'contact_leads'
      ORDER BY ordinal_position;
    `;

    console.log('\n📊 Contact_leads table structure:');
    result.rows.forEach(row => {
      console.log(`  - ${row.column_name}: ${row.data_type}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  }
}

runMigration();
