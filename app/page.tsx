export default function Home() {
  const services = [
    {
      icon: "⚖️",
      title: "법률 자문 및 컨설팅",
      description:
        "기업과 개인을 위한 맞춤형 법률 자문 서비스를 제공합니다. 계약서 검토부터 법적 리스크 분석까지 전문적으로 지원합니다.",
      tag: "Advisory",
    },
    {
      icon: "📋",
      title: "계약서 작성 및 검토",
      description:
        "각종 계약서의 작성과 검토를 통해 법적 분쟁을 사전에 예방합니다. 고객의 권익 보호를 최우선으로 생각합니다.",
      tag: "Contracts",
    },
    {
      icon: "🏛️",
      title: "소송 대리 및 분쟁 해결",
      description:
        "민사·형사·행정 소송에서 전문적인 법률 대리 서비스를 제공합니다. 의뢰인의 입장에서 최선의 결과를 이끌어냅니다.",
      tag: "Litigation",
    },
  ];

  return (
    <div style={{ background: "var(--reddit-canvas)", minHeight: "100vh" }}>
      {/* Top Nav */}
      <nav
        style={{
          background: "var(--reddit-card)",
          borderBottom: "1px solid var(--reddit-border)",
        }}
        className="sticky top-0 z-50 flex items-center px-4 py-2 gap-3"
      >
        <span style={{ color: "var(--reddit-orangered)", fontSize: 24 }}>●</span>
        <span
          style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 18, color: "var(--reddit-text-primary)" }}
        >
          버버법팀
        </span>
        <span
          style={{
            marginLeft: "auto",
            background: "var(--reddit-orangered)",
            color: "#fff",
            borderRadius: 9999,
            padding: "6px 20px",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          문의하기
        </span>
      </nav>

      {/* Hero Card */}
      <div className="max-w-2xl mx-auto px-4 pt-6">
        <div
          style={{
            background: "var(--reddit-card)",
            border: "1px solid var(--reddit-border)",
            borderRadius: 4,
          }}
        >
          {/* Orange banner */}
          <div
            style={{
              height: 80,
              background: "linear-gradient(135deg, #FF4500 0%, #FF6534 100%)",
              borderRadius: "4px 4px 0 0",
            }}
          />
          <div className="px-4 pb-4">
            {/* Avatar */}
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "var(--reddit-card)",
                border: "4px solid var(--reddit-card)",
                marginTop: -28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
              }}
            >
              ⚖️
            </div>

            <h1
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: "var(--reddit-text-primary)",
                marginTop: 8,
              }}
            >
              r/버버법팀
            </h1>
            <p style={{ color: "var(--reddit-text-secondary)", fontSize: 14, marginTop: 4 }}>
              신뢰할 수 있는 법률 전문가 그룹 · Law Company
            </p>
            <p style={{ color: "var(--reddit-text-primary)", fontSize: 14, marginTop: 12, lineHeight: 1.6 }}>
              복잡한 법률 문제, 저희가 명쾌하게 해결합니다. 기업과 개인을 위한 전문 법률 서비스를 제공합니다.
            </p>

            <div className="flex gap-4 mt-3" style={{ fontSize: 12, color: "var(--reddit-text-meta)" }}>
              <span><strong style={{ color: "var(--reddit-text-primary)" }}>3</strong> 주요 업무</span>
              <span><strong style={{ color: "var(--reddit-text-primary)" }}>1</strong> 팀</span>
            </div>

            <a
              href="mailto:sa.lee@lawcompany.co.kr"
              style={{
                display: "inline-block",
                marginTop: 16,
                background: "var(--reddit-orangered)",
                color: "#fff",
                borderRadius: 9999,
                padding: "8px 24px",
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              문의하기
            </a>
          </div>
        </div>

        {/* Service Posts */}
        <h2
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontWeight: 600,
            fontSize: 16,
            color: "var(--reddit-text-secondary)",
            margin: "20px 0 8px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          주요 업무
        </h2>

        <div className="flex flex-col gap-2 pb-10">
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "var(--reddit-card)",
                border: "1px solid var(--reddit-border)",
                borderRadius: 4,
                display: "flex",
              }}
            >
              {/* Vote column */}
              <div
                style={{
                  width: 40,
                  background: "#F8F9FA",
                  borderRadius: "4px 0 0 4px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "8px 0",
                  gap: 2,
                  borderRight: "1px solid var(--reddit-border)",
                }}
              >
                <span style={{ color: "var(--reddit-orangered)", fontSize: 18, lineHeight: 1 }}>▲</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: "var(--reddit-text-primary)" }}>•</span>
                <span style={{ color: "#EDEFF1", fontSize: 18, lineHeight: 1 }}>▼</span>
              </div>

              {/* Content */}
              <div className="flex-1 p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    style={{
                      background: "#FFF4F0",
                      color: "var(--reddit-orangered)",
                      borderRadius: 2,
                      padding: "1px 6px",
                      fontSize: 11,
                      fontWeight: 600,
                    }}
                  >
                    {service.tag}
                  </span>
                  <span style={{ fontSize: 24 }}>{service.icon}</span>
                </div>
                <h3
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: 18,
                    color: "var(--reddit-text-primary)",
                    marginBottom: 6,
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--reddit-text-secondary)", lineHeight: 1.6 }}>
                  {service.description}
                </p>
                <div style={{ marginTop: 8, fontSize: 12, color: "var(--reddit-text-meta)", display: "flex", gap: 12 }}>
                  <span>💬 문의하기</span>
                  <span>🔗 공유</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--reddit-border)",
          background: "var(--reddit-card)",
          padding: "16px",
          textAlign: "center",
          fontSize: 12,
          color: "var(--reddit-text-meta)",
        }}
      >
        © 2026 Law Company 버버법팀. All rights reserved.
      </footer>
    </div>
  );
}
