/**
 * Create the LeTip Client Leads database at workspace level
 */

const NOTION_API_BASE = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28';

async function createDatabase() {
  const token = process.env.NOTION_TOKEN;

  if (!token) {
    throw new Error('NOTION_TOKEN environment variable is required');
  }

  const databaseSchema = {
    parent: {
      type: 'workspace',
      workspace: true
    },
    title: [
      {
        type: 'text',
        text: {
          content: 'LeTip Client Leads'
        }
      }
    ],
    properties: {
      'Name': {
        title: {}
      },
      'Email': {
        email: {}
      },
      'Phone': {
        phone_number: {}
      },
      'Business': {
        rich_text: {}
      },
      'Website': {
        url: {}
      },
      'Biggest Problem': {
        rich_text: {}
      },
      'Timeline': {
        select: {
          options: [
            { name: 'ASAP - This is urgent', color: 'red' },
            { name: 'Within a month', color: 'orange' },
            { name: 'Next 2-3 months', color: 'yellow' },
            { name: 'Just exploring for now', color: 'gray' }
          ]
        }
      },
      'Status': {
        status: {
          options: [
            { name: 'New Lead', color: 'blue' },
            { name: 'Contacted', color: 'purple' },
            { name: 'Audit Scheduled', color: 'yellow' },
            { name: 'Audit Complete', color: 'pink' },
            { name: 'Proposal Sent', color: 'orange' },
            { name: 'Won', color: 'green' },
            { name: 'Lost', color: 'red' }
          ]
        }
      },
      'Audit Date': {
        date: {}
      },
      'Notes': {
        rich_text: {}
      },
      'Submitted At': {
        created_time: {}
      }
    }
  };

  const response = await fetch(`${NOTION_API_BASE}/databases`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(databaseSchema)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Notion API ${response.status}: ${errorText}`);
  }

  return response.json();
}

createDatabase()
  .then(database => {
    console.log('\n✓ Database created successfully!\n');
    console.log('Database ID:', database.id);
    console.log('Database URL:', database.url);
    console.log('\nProperties created:');
    Object.keys(database.properties).forEach(prop => {
      const type = Object.keys(database.properties[prop]).find(k => k !== 'id' && k !== 'name');
      console.log(`  - ${prop} (${type})`);
    });
    console.log('\nNext steps:');
    console.log('1. Add this to your .env.local:');
    console.log(`   NOTION_LETIP_DB_ID=${database.id}`);
    console.log('2. The integration should already have access to workspace-level databases');
    console.log('3. Verify you can see the database at:', database.url);
  })
  .catch(error => {
    console.error('Error creating database:', error.message);
    process.exit(1);
  });
