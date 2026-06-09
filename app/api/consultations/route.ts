import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  const { rows } = await sql`
    SELECT id, name, contact, content, created_at
    FROM consultations
    ORDER BY created_at DESC
  `;
  return NextResponse.json(rows);
}
