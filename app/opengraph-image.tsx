import { ImageResponse } from "next/og";

export const alt = "Minus Zero: Stop doing the same work every single day.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14213D",
          padding: "72px 80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 40, fontWeight: 800 }}>
          <div style={{ width: 44, height: 9, borderRadius: 9, background: "#FF6B5B" }} />
          <div style={{ display: "flex" }}>
            Minus<span style={{ color: "rgba(255,255,255,0.65)", marginLeft: 12, fontWeight: 600 }}>Zero</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 82, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05 }}>
            Stop doing the same work every single day.
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: "rgba(255,255,255,0.8)", lineHeight: 1.35 }}>
            We automate repetitive daily chores for CA firms, service businesses, shops and factories. Enter data once. Never twice.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#FF6B5B", fontWeight: 700 }}>
          Get my free 3-day trial →
        </div>
      </div>
    ),
    size,
  );
}
