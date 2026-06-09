import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS consultations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      contact VARCHAR(100) NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

export async function POST(req: NextRequest) {
  const { name, contact, content } = await req.json();

  if (!name || !contact || !content) {
    return NextResponse.json({ error: "필수 항목을 모두 입력해주세요." }, { status: 400 });
  }

  await ensureTable();
  await sql`
    INSERT INTO consultations (name, contact, content)
    VALUES (${name}, ${contact}, ${content})
  `;

  return NextResponse.json({ ok: true });
}
