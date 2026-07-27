import ProductIcon from "@/components/ProductIcon";

const VARIANTS = [
  { gradient: "from-[#1E2B61]/8 via-white to-[#65A3FF]/10", rotate: "-rotate-3" },
  { gradient: "from-[#65A3FF]/10 via-white to-[#1E2B61]/8", rotate: "rotate-2" },
  { gradient: "from-[#1E2B61]/10 via-white to-[#65A3FF]/6", rotate: "-rotate-1" },
];

export default function ProductVisual({
  slug,
  variant = 0,
  compact = false,
  className,
}: {
  slug: string;
  variant?: number;
  compact?: boolean;
  className?: string;
}) {
  const style = VARIANTS[variant % VARIANTS.length];

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl border border-[#1E2B61]/10 bg-gradient-to-br ${style.gradient} ${className ?? ""}`}
    >
      <div
        className={`pointer-events-none absolute rounded-full bg-[#65A3FF]/20 blur-2xl ${
          compact ? "-right-4 -top-4 h-10 w-10" : "-right-10 -top-10 h-40 w-40"
        }`}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute rounded-full bg-[#1E2B61]/10 blur-2xl ${
          compact ? "-bottom-4 -left-4 h-8 w-8" : "-bottom-10 -left-10 h-32 w-32"
        }`}
        aria-hidden="true"
      />
      <div
        className={`relative flex items-center justify-center rounded-2xl bg-[#1E2B61] text-white shadow-sm ${style.rotate} ${
          compact ? "h-8 w-8" : "h-20 w-20 sm:h-24 sm:w-24"
        }`}
      >
        <ProductIcon slug={slug} className={compact ? "h-4 w-4" : "h-9 w-9 sm:h-11 sm:w-11"} />
      </div>
    </div>
  );
}
