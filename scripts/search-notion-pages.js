/**
 * Search for available Notion pages to find a parent for the new database
 */

const NOTION_API_BASE = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28';

async function searchPages() {
  const token = process.env.NOTION_TOKEN;

  if (!token) {
    throw new Error('NOTION_TOKEN environment variable is required');
  }

  const response = await fetch(`${NOTION_API_BASE}/search`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      filter: {
        property: 'object',
        value: 'page'
      },
      page_size: 100
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Notion API ${response.status}: ${errorText}`);
  }

  return response.json();
}

searchPages()
  .then(data => {
    console.log('\nAvailable Notion pages:\n');
    data.results.forEach(page => {
      const title = page.properties?.title?.title?.[0]?.plain_text ||
                    page.properties?.Name?.title?.[0]?.plain_text ||
                    '(Untitled)';
      console.log(`Title: ${title}`);
      console.log(`ID: ${page.id}`);
      console.log(`URL: ${page.url}`);
      console.log('---');
    });
  })
  .catch(error => {
    console.error('Error searching pages:', error.message);
    process.exit(1);
  });
