/**
 * Get information about the existing partner database
 */

const NOTION_API_BASE = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28';

async function getDatabaseInfo(databaseId) {
  const token = process.env.NOTION_TOKEN;

  if (!token) {
    throw new Error('NOTION_TOKEN environment variable is required');
  }

  const response = await fetch(`${NOTION_API_BASE}/databases/${databaseId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Notion API ${response.status}: ${errorText}`);
  }

  return response.json();
}

const databaseId = process.env.NOTION_PARTNER_DB_ID || process.argv[2];

if (!databaseId) {
  console.error('Usage: node scripts/get-database-info.js [database-id]');
  console.error('Or set NOTION_PARTNER_DB_ID environment variable');
  process.exit(1);
}

getDatabaseInfo(databaseId)
  .then(database => {
    console.log('\nDatabase Information:\n');
    console.log('Title:', database.title?.[0]?.plain_text || '(Untitled)');
    console.log('ID:', database.id);
    console.log('URL:', database.url);
    console.log('\nParent Information:');
    console.log('Type:', database.parent.type);
    if (database.parent.type === 'page_id') {
      console.log('Parent Page ID:', database.parent.page_id);
    } else if (database.parent.type === 'workspace') {
      console.log('Parent: Workspace (top-level)');
    }
  })
  .catch(error => {
    console.error('Error getting database info:', error.message);
    process.exit(1);
  });
