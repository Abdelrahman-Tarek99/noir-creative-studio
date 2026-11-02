import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#171716",
          borderRadius: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <span
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: 900,
            fontSize: 120,
            color: "#f4f2ed",
            letterSpacing: "-0.08em",
            marginRight: 10,
          }}
        >
          N
        </span>
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 11,
            background: "#a65135",
            position: "absolute",
            bottom: 36,
            right: 30,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
