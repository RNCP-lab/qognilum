import fs from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function readProductImages(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "products", slug);

  let entries: string[];
  try {
    entries = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return entries
    .map((name) => {
      const match = name.match(/^(\d+)(\.\w+)$/);
      if (!match) return null;
      const ext = match[2].toLowerCase();
      if (!IMAGE_EXTENSIONS.includes(ext)) return null;
      return { index: Number(match[1]), file: name };
    })
    .filter((entry): entry is { index: number; file: string } => entry !== null)
    .sort((a, b) => a.index - b.index)
    .map((entry) => `/products/${slug}/${entry.file}`);
}

/** Image "1" in a product's public/products/<slug> folder — used on the products listing page. */
export function getProductCardImage(slug: string): string | undefined {
  return readProductImages(slug)[0];
}

/** Every image after "1" — used in the product page's carousel. */
export function getProductGalleryImages(slug: string): string[] {
  return readProductImages(slug).slice(1);
}
