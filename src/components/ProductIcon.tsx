const ICON_PATHS: Record<string, React.ReactNode> = {
  "signal-processing": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12h3l2.25-6.75L12 18.75l2.25-9L16 12h5"
    />
  ),
  mffi: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM8.25 8.25c2.485 2.485 2.485 5.015 0 7.5M11.25 5.25c4.142 4.142 4.142 9.358 0 13.5M14.25 2.25c5.799 5.799 5.799 13.701 0 19.5"
    />
  ),
  "photonic-pufs": (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2.25c3.75 0 6.75 1.5 6.75 4.5v3c0 6-3 9.75-6.75 11.25-3.75-1.5-6.75-5.25-6.75-11.25v-3c0-3 3-4.5 6.75-4.5Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 12.75 11.5 14.5 14.75 10" />
    </>
  ),
};

export default function ProductIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      {ICON_PATHS[slug]}
    </svg>
  );
}
