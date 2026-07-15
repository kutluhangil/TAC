import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { business } from "@/data/business";

export const alt = "Kılıçarslan Perde & Tasarım — Perde Modelleri";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded share card: linen ground, mark, business name and tagline.
export default async function OpengraphImage() {
  const logo = await readFile(
    path.join(process.cwd(), "public/images/brand/logo.png")
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF7F2",
          border: "16px solid #C8102E",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={200} alt="" />
        <div
          style={{
            marginTop: 40,
            fontSize: 64,
            fontWeight: 700,
            color: "#1F1B18",
            letterSpacing: "-0.02em",
          }}
        >
          {"Kılıçarslan Perde & Tasarım"}
        </div>
        <div style={{ marginTop: 16, fontSize: 30, color: "#55504B" }}>
          {business.tagline}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            color: "#C8102E",
            fontWeight: 600,
          }}
        >
          {`${business.phone} — ${business.location}`}
        </div>
      </div>
    ),
    size
  );
}
