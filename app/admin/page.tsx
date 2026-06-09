"use client";

import { useEffect, useState } from "react";

interface Consultation {
  id: number;
  name: string;
  contact: string;
  content: string;
  created_at: string;
}

export default function AdminPage() {
  const [data, setData] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/consultations")
      .then((r) => r.json())
      .then((rows) => { setData(rows); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  return (
    <div style={{ background: "var(--reddit-canvas)", minHeight: "100vh", padding: "24px 16px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontWeight: 700,
            fontSize: 22,
            color: "var(--reddit-text-primary)",
            marginBottom: 20,
          }}
        >
          ⚖️ 상담 신청 관리
        </h1>

        {loading && (
          <p style={{ color: "var(--reddit-text-secondary)", fontSize: 14 }}>불러오는 중...</p>
        )}

        {error && (
          <p style={{ color: "#E53E3E", fontSize: 14 }}>데이터를 불러오지 못했습니다.</p>
        )}

        {!loading && !error && data.length === 0 && (
          <p style={{ color: "var(--reddit-text-secondary)", fontSize: 14 }}>아직 접수된 상담이 없습니다.</p>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {data.map((item) => (
            <div
              key={item.id}
              style={{
                background: "var(--reddit-card)",
                border: "1px solid var(--reddit-border)",
                borderRadius: 4,
                padding: "16px 20px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 15,
                      color: "var(--reddit-text-primary)",
                    }}
                  >
                    {item.name}
                  </span>
                  <span style={{ fontSize: 13, color: "var(--reddit-text-secondary)" }}>
                    {item.contact}
                  </span>
                </div>
                <span style={{ fontSize: 12, color: "var(--reddit-text-meta)" }}>
                  {new Date(item.created_at).toLocaleString("ko-KR")}
                </span>
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--reddit-text-primary)",
                  lineHeight: 1.7,
                  whiteSpace: "pre-wrap",
                  margin: 0,
                }}
              >
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
