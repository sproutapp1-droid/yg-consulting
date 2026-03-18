import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "YG Consulting — Retail & Brand Strategy for Asia Pacific";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1B4D3E 0%, #0F2E23 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            borderRadius: 20,
            backgroundColor: "rgba(255,255,255,0.15)",
            marginBottom: 40,
          }}
        >
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "white",
              fontFamily: "Georgia, serif",
            }}
          >
            YG
          </span>
        </div>
        <h1
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
            margin: 0,
            fontFamily: "Georgia, serif",
          }}
        >
          YG Consulting
        </h1>
        <p
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            marginTop: 20,
            lineHeight: 1.4,
          }}
        >
          Retail & Brand Strategy for Asia Pacific
        </p>
        <div
          style={{
            display: "flex",
            gap: 40,
            marginTop: 50,
          }}
        >
          {[
            { value: "20+", label: "Years Experience" },
            { value: "13", label: "Countries" },
            { value: "100+", label: "Stores" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: 16,
                padding: "20px 36px",
              }}
            >
              <span
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  color: "#3ECF8E",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.6)",
                  marginTop: 4,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
