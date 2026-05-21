/**
 * Test submitting a sample lead to the LeTip database
 */

const NOTION_API_BASE = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28';

function title(value) {
  const content = (value || '').slice(0, 200);
  return [{ type: 'text', text: { content } }];
}

function richText(value) {
  if (!value) return [];
  return [{ type: 'text', text: { content: value.slice(0, 2000) } }];
}

async function createNotionPage(databaseId, properties) {
  const token = process.env.NOTION_TOKEN;

  if (!token) {
    throw new Error('NOTION_TOKEN environment variable is required');
  }

  const response = await fetch(`${NOTION_API_BASE}/pages`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Notion API ${response.status}: ${errorText}`);
  }

  return response.json();
}

async function testSubmission() {
  const databaseId = '3678a61f09bf8147a332df24446ce17f';

  const testLead = {
    'Name': {
      title: title('Test Client - ABC Company')
    },
    'Email': {
      email: 'test@example.com'
    },
    'Phone': {
      phone_number: '555-123-4567'
    },
    'Business': {
      rich_text: richText('ABC Company - Marketing Services')
    },
    'Website': {
      url: 'https://example.com'
    },
    'Biggest Problem': {
      rich_text: richText('Not getting enough qualified leads from our website')
    },
    'Timeline': {
      select: {
        name: 'Within a month'
      }
    },
    'Status': {
      status: {
        name: 'New Lead'
      }
    },
    'Notes': {
      rich_text: richText('This is a test submission to verify the database is working correctly.')
    }
  };

  console.log('Submitting test lead to LeTip database...\n');

  try {
    const result = await createNotionPage(databaseId, testLead);
    console.log('✓ Test submission successful!\n');
    console.log('Page ID:', result.id);
    console.log('Page URL:', result.url);
    console.log('\nYou can view this test entry at:', result.url);
    console.log('\nDelete the test entry if desired - the database is working correctly!');
  } catch (error) {
    console.error('❌ Test submission failed:', error.message);
    process.exit(1);
  }
}

testSubmission();
