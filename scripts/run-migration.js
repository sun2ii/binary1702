/**
 * Script to run database migrations
 * Usage: node scripts/run-migration.js migrations/002_name_based_slugs.sql
 */

import dotenv from 'dotenv';
import { sql } from '@vercel/postgres';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function runMigration(migrationFile) {
  try {
    console.log(`Reading migration file: ${migrationFile}`);
    const migrationPath = join(__dirname, '..', migrationFile);
    const migrationSQL = await readFile(migrationPath, 'utf-8');

    console.log('Executing migration...');
    await sql.query(migrationSQL);

    console.log('✅ Migration completed successfully!');
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    console.error(error);
    process.exit(1);
  }
}

const migrationFile = process.argv[2];
if (!migrationFile) {
  console.error('Usage: node scripts/run-migration.js <migration-file>');
  console.error('Example: node scripts/run-migration.js migrations/002_name_based_slugs.sql');
  process.exit(1);
}

runMigration(migrationFile);
