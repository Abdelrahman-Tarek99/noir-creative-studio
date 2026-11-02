import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NOIR — Independent Creative Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#171716",
          color: "#f4f2ed",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "8px",
            marginBottom: "32px",
          }}
        >
          <span style={{ fontSize: 96, fontWeight: 700, letterSpacing: "-0.06em" }}>
            NOIR
          </span>
          <span
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#a65135",
            }}
          />
        </div>
        <span
          style={{
            fontSize: 28,
            color: "#66635e",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Independent Creative Studio
        </span>
      </div>
    ),
    { ...size }
  );
}
