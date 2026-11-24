import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { NewsImage } from "@/lib/newsImages";

export type NewsGridItem = {
  slug: string;
  title: string;
  date: string;
  image?: NewsImage;
};

/*
 * Layout (md and up): 3 columns, everything sized in container-width units (cqw)
 * so the proportions hold at any screen width.
 *   gap G = 2cqw, column c = (100 - 2G) / 3 = 32cqw, row unit u = c / 20 = 1.6cqw
 * A card spanning `cols` columns is `cols * c + (cols - 1) * G` wide; its row span
 * is chosen so its height matches the image's aspect ratio. Each grid item has a
 * bottom padding of G, which acts as the vertical gap.
 * `grid-auto-flow: dense` fills holes from the top down, in date order.
 */
const GAP = 2;
const COL = (100 - 2 * GAP) / 3;
const ROW = COL / 20;

/** Width / height at or above which an image takes two columns. */
const LANDSCAPE_THRESHOLD = 1.25;

function layoutFor(image?: NewsImage) {
  const aspect = image ? image.width / image.height : 4 / 3;
  const cols = aspect >= LANDSCAPE_THRESHOLD ? 2 : 1;
  const width = cols * COL + (cols - 1) * GAP;
  // Keep very tall or very wide images from producing extreme cards.
  const heightRatio = Math.min(Math.max(1 / aspect, cols === 2 ? 0.45 : 0.6), 1.6);
  const rows = Math.round((width * heightRatio + GAP) / ROW);
  return { aspect, cols, rows };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Widest the grid will grow, in px. Keeps cards a sensible size on large monitors. */
const DEFAULT_MAX_WIDTH = 1100;

export default function NewsGrid({
  items,
  maxWidth = DEFAULT_MAX_WIDTH,
}: {
  items: NewsGridItem[];
  maxWidth?: number;
}) {
  return (
    <div
      className="mx-auto my-8 w-full px-4 [container-type:inline-size] sm:px-8 lg:my-12 lg:px-12"
      style={{ maxWidth }}
    >
      <ul className="news-grid flex flex-col gap-6">
        {items.map((item) => {
          const { aspect, cols, rows } = layoutFor(item.image);
          return (
            <li
              key={item.slug}
              className="news-grid-item"
              style={{ "--ar": aspect, "--cs": cols, "--rs": rows } as CSSProperties}
            >
              <Link
                href={`/news/${item.slug}`}
                className="group relative block h-full overflow-hidden rounded-2xl bg-zinc-200"
              >
                {item.image && (
                  <Image
                    src={item.image.src}
                    alt=""
                    fill
                    sizes={cols === 2 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F1736]/85 via-[#0F1736]/40 to-transparent p-5 pt-16">
                  <time dateTime={item.date} className="text-xs font-medium text-white/70">
                    {formatDate(item.date)}
                  </time>
                  <h2 className="mt-1 text-lg font-semibold leading-snug text-white">
                    {item.title}
                  </h2>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { formatDate };
