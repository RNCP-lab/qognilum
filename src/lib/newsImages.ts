import fs from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

export type NewsImage = {
  src: string;
  width: number;
  height: number;
};

/** Reads pixel dimensions from a PNG, JPEG or WebP header without decoding the image. */
function readDimensions(buf: Buffer): { width: number; height: number } | null {
  // PNG: IHDR chunk follows the 8-byte signature.
  if (buf.length >= 24 && buf.readUInt32BE(0) === 0x89504e47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  // JPEG: walk segments until a Start Of Frame marker.
  if (buf.length >= 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let offset = 2;
    while (offset + 9 < buf.length) {
      if (buf[offset] !== 0xff) {
        offset++;
        continue;
      }
      const marker = buf[offset + 1];
      const isSof =
        marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
      if (isSof) {
        return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
      }
      offset += 2 + buf.readUInt16BE(offset + 2);
    }
    return null;
  }

  // WebP: RIFF container with VP8 / VP8L / VP8X chunk.
  if (buf.length >= 30 && buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
    const chunk = buf.toString("ascii", 12, 16);
    if (chunk === "VP8 ") {
      return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
    }
    if (chunk === "VP8L") {
      const bits = buf.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (chunk === "VP8X") {
      return { width: buf.readUIntLE(24, 3) + 1, height: buf.readUIntLE(27, 3) + 1 };
    }
  }

  return null;
}

/** Image "1" in public/news/<slug>, with its dimensions (falls back to 4:3 if unreadable). */
export function getNewsCoverImage(slug: string): NewsImage | undefined {
  const dir = path.join(process.cwd(), "public", "news", slug);

  let entries: string[];
  try {
    entries = fs.readdirSync(dir);
  } catch {
    return undefined;
  }

  const file = entries.find((name) => {
    const match = name.match(/^1(\.\w+)$/);
    return match !== null && IMAGE_EXTENSIONS.includes(match[1].toLowerCase());
  });
  if (!file) return undefined;

  const dims = readDimensions(fs.readFileSync(path.join(dir, file))) ?? { width: 4, height: 3 };
  return { src: `/news/${slug}/${file}`, ...dims };
}
