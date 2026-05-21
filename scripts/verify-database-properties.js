/**
 * Verify all properties of the LeTip database
 */

const NOTION_API_BASE = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28';

async function verifyDatabase(databaseId) {
  const token = process.env.NOTION_TOKEN;

  if (!token) {
    throw new Error('NOTION_TOKEN environment variable is required');
  }

  const response = await fetch(`${NOTION_API_BASE}/databases/${databaseId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Notion-Version': NOTION_VERSION
    }
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Notion API ${response.status}: ${errorText}`);
  }

  return response.json();
}

const databaseId = process.argv[2] || '3678a61f09bf8147a332df24446ce17f';

verifyDatabase(databaseId)
  .then(db => {
    console.log('\n=== LeTip Client Leads Database ===\n');
    console.log('Database ID:', db.id);
    console.log('Title:', db.title?.[0]?.plain_text);
    console.log('URL:', db.url);
    console.log('\n=== Properties ===\n');

    const props = db.properties;
    const expectedProps = {
      'Name': 'title',
      'Email': 'email',
      'Phone': 'phone_number',
      'Business': 'rich_text',
      'Website': 'url',
      'Biggest Problem': 'rich_text',
      'Timeline': 'select',
      'Status': 'status',
      'Audit Date': 'date',
      'Notes': 'rich_text',
      'Submitted At': 'created_time'
    };

    let allCorrect = true;

    Object.entries(expectedProps).forEach(([name, expectedType]) => {
      const prop = props[name];
      if (!prop) {
        console.log(`❌ ${name}: MISSING`);
        allCorrect = false;
      } else {
        const actualType = prop.type;
        const match = actualType === expectedType ? '✓' : '❌';
        console.log(`${match} ${name}: ${actualType}${actualType !== expectedType ? ` (expected ${expectedType})` : ''}`);

        // Show options for select/status fields
        if (actualType === 'select' && prop.select?.options) {
          console.log(`   Options: ${prop.select.options.map(o => o.name).join(', ')}`);
        } else if (actualType === 'status' && prop.status?.options) {
          console.log(`   Options: ${prop.status.options.map(o => o.name).join(', ')}`);
        }

        if (actualType !== expectedType) {
          allCorrect = false;
        }
      }
    });

    console.log('\n=== Summary ===\n');
    if (allCorrect) {
      console.log('✓ All properties configured correctly!');
    } else {
      console.log('❌ Some properties need attention');
    }

    console.log('\n=== Next Steps ===\n');
    console.log('1. Add to .env.local:');
    console.log(`   NOTION_LETIP_DB_ID=${db.id}`);
    console.log('\n2. The integration already has access since it created the database');
    console.log('\n3. View the database at:');
    console.log(`   ${db.url}`);
  })
  .catch(error => {
    console.error('Error verifying database:', error.message);
    process.exit(1);
  });
