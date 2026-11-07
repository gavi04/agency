import { ImageResponse } from "next/og";

export const alt = "Minus Labs: Workflow & compliance automation for CA firms & businesses.";
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
            Minus<span style={{ color: "rgba(255,255,255,0.65)", marginLeft: 12, fontWeight: 600 }}>Labs</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05 }}>
            Minus the manual work.
          </div>
          <div style={{ marginTop: 28, fontSize: 32, color: "rgba(255,255,255,0.8)", lineHeight: 1.35 }}>
            Done-for-you automation for CA firms & growing businesses: WhatsApp document collection, compliance alerts, and OCR extraction.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#FF6B5B", fontWeight: 700 }}>
          Book a free 20-min consultation →
        </div>
      </div>
    ),
    size,
  );
}
