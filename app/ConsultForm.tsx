"use client";

import { useState } from "react";

export default function ConsultForm() {
  const [form, setForm] = useState({ name: "", contact: "", content: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/consult", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", contact: "", content: "" });
    } else {
      setStatus("error");
    }
  }

  return (
    <div
      style={{
        background: "var(--reddit-card)",
        border: "1px solid var(--reddit-border)",
        borderRadius: 4,
        padding: "20px",
        marginTop: 8,
      }}
    >
      <h2
        style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontWeight: 700,
          fontSize: 16,
          color: "var(--reddit-text-primary)",
          marginBottom: 16,
        }}
      >
        📬 법률 상담 신청
      </h2>

      {status === "success" ? (
        <div
          style={{
            background: "#F0FFF4",
            border: "1px solid #68D391",
            borderRadius: 4,
            padding: "16px",
            color: "#276749",
            fontSize: 14,
            textAlign: "center",
          }}
        >
          상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", gap: 12 }}>
            <input
              type="text"
              placeholder="이름"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="연락처 (이메일 또는 전화번호)"
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
              required
              style={inputStyle}
            />
          </div>
          <textarea
            placeholder="상담 내용을 입력해주세요."
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            required
            rows={4}
            style={{ ...inputStyle, resize: "vertical" }}
          />
          {status === "error" && (
            <p style={{ color: "#E53E3E", fontSize: 13 }}>오류가 발생했습니다. 다시 시도해주세요.</p>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              alignSelf: "flex-end",
              background: status === "loading" ? "#ccc" : "var(--reddit-orangered)",
              color: "#fff",
              border: "none",
              borderRadius: 9999,
              padding: "8px 24px",
              fontWeight: 700,
              fontSize: 14,
              cursor: status === "loading" ? "not-allowed" : "pointer",
            }}
          >
            {status === "loading" ? "전송 중..." : "상담 신청"}
          </button>
        </form>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  flex: 1,
  border: "1px solid var(--reddit-border)",
  borderRadius: 4,
  padding: "8px 12px",
  fontSize: 14,
  color: "var(--reddit-text-primary)",
  background: "#F8F9FA",
  outline: "none",
  fontFamily: "'IBM Plex Sans', sans-serif",
};
