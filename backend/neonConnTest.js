import dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless'

dotenv.config();
const { VITE_NEONDB_CONN_STRING } = process.env;

console.log(VITE_NEONDB_CONN_STRING);

const sql = neon(VITE_NEONDB_CONN_STRING);

async function getPgVersion() {
  const result = await sql`SELECT version()`;
  console.log(result[0]);
}

getPgVersion();