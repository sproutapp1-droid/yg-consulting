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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 160,
            height: 160,
            borderRadius: 32,
            backgroundColor: "rgba(255,255,255,0.15)",
          }}
        >
          <span
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "white",
              fontFamily: "Georgia, serif",
            }}
          >
            YG
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
