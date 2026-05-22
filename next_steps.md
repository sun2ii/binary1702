# Operations Page Setup - Next Steps

## What's Complete
- ✅ Operations page copy updated (pre-Slack/Notion stage)
- ✅ Logo section showing "from this → to this" transition
- ✅ Intake form with Slack + Notion integration
- ✅ API route for form submissions
- ✅ Logos added: Slack, Notion, WhatsApp, Teams, iMessage

## Setup Required

### 1. Create Notion Database for Operations Leads

Create a new database in Notion with these properties:
- `Name` (Title)
- `Email` (Email)
- `Phone` (Phone)
- `Business` (Text)
- `Team Size` (Select) - Add options: "1-5", "6-10", "11-15", "16-25", "25+"
- `Revenue` (Select) - Add options: "<$500k", "$500k-$1M", "$1M-$3M", "$3M-$5M", "$5M+"
- `Biggest Problem` (Text)
- `Timeline` (Select) - Add options: "asap", "month", "quarter", "exploring"
- `Status` (Status) - Make sure "New Lead" exists as an option

**Then:**
1. Copy database ID from URL (long string after workspace name, before `?v=`)
2. Add to `.env.local`:
   ```
   NOTION_OPERATIONS_DB_ID=your_database_id_here
   ```
3. Share database with your Notion integration:
   - Click "..." on database → Connections → Add your integration

### 2. Create Slack Webhook

1. Go to https://api.slack.com/messaging/webhooks
2. Create new app or use existing one
3. Enable "Incoming Webhooks"
4. Click "Add New Webhook to Workspace"
5. Choose channel for operations lead notifications
6. Copy webhook URL
7. Add to `.env.local`:
   ```
   SLACK_WEBHOOK_URL=your_webhook_url_here
   ```

### 3. Test the Form

1. Run `npm run dev`
2. Go to http://localhost:3000/operations
3. Fill out and submit the form
4. Check:
   - Slack channel for notification
   - Notion database for new entry

## Notes

- Both integrations are optional (form works without them)
- Slack message format:
  ```
  🔧 New Operations Lead
  Name: [Name] | Business: [Business]
  Email: [Email] | Phone: [Phone]
  Team Size: [Size] | Revenue: [Range]
  Timeline: [Timeline]
  Biggest Problem: [Description]
  ```
- Same `NOTION_TOKEN` is used for all databases (LeTip, Operations, etc.)
