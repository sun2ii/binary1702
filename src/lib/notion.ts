/**
 * Notion API helper for sending form submissions to a Notion database.
 *
 * Required env vars (see .env.local.example):
 *   NOTION_TOKEN          — secret from a Notion internal integration
 *   NOTION_PARTNER_DB_ID  — database id (from the database URL)
 *
 * The integration must be explicitly shared with the target database
 * via the database's "..." menu → Connections → Add the integration.
 * Without that share, the API returns "object_not_found".
 */

const NOTION_API_BASE = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28';

/**
 * Create a page (row) in a Notion database.
 */
export async function createNotionPage(databaseId: string, properties: Record<string, any>) {
  if (!process.env.NOTION_TOKEN) {
    throw new Error('NOTION_TOKEN env var is not set');
  }

  const response = await fetch(`${NOTION_API_BASE}/pages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Notion API ${response.status}: ${errorText.slice(0, 500)}`
    );
  }

  return response.json();
}

/**
 * Format a string as a Notion title property value.
 * Trims to 200 chars (Notion has a max length).
 */
export function title(value: string) {
  const content = (value || '').slice(0, 200);
  return [{ type: 'text', text: { content } }];
}

/**
 * Format a string as a Notion rich_text property value.
 * Trims to 2000 chars to stay under Notion's per-rich-text limits.
 */
export function richText(value: string) {
  if (!value) return [];
  return [{ type: 'text', text: { content: value.slice(0, 2000) } }];
}
