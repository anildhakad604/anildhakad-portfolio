import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#14140f",
          color: "#f2f0ea",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#e0925a",
          }}
        >
          {profile.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 600, lineHeight: 1.1 }}>{profile.name}</div>
          <div style={{ display: "flex", fontSize: 28, color: "#c7c4b8", marginTop: 20, maxWidth: 900 }}>
            ASP.NET Core 9 · Entity Framework Core · SQL Server · Next.js · React
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
