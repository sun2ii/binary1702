/**
 * Create a parent page in the workspace to hold databases
 */

const NOTION_API_BASE = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28';

async function createPage() {
  const token = process.env.NOTION_TOKEN;

  if (!token) {
    throw new Error('NOTION_TOKEN environment variable is required');
  }

  // Use the existing test page as parent
  const parentPageId = '35a8a61f-09bf-81cc-9a2e-c91826b56171';

  const pageSchema = {
    parent: {
      type: 'page_id',
      page_id: parentPageId
    },
    properties: {
      title: {
        title: [
          {
            type: 'text',
            text: {
              content: 'Binary 1702 - Client Databases'
            }
          }
        ]
      }
    }
  };

  const response = await fetch(`${NOTION_API_BASE}/pages`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pageSchema)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Notion API ${response.status}: ${errorText}`);
  }

  return response.json();
}

createPage()
  .then(page => {
    console.log('\n✓ Parent page created successfully!\n');
    console.log('Page ID:', page.id);
    console.log('Page URL:', page.url);
    console.log('\nUse this page ID to create the database:');
    console.log(`node scripts/create-letip-database.js ${page.id}`);
  })
  .catch(error => {
    console.error('Error creating page:', error.message);
    process.exit(1);
  });
