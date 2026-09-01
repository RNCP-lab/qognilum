"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const heroHeight = window.innerHeight || 1;
      const p = Math.min(Math.max(window.scrollY / heroHeight, 0), 1);
      setProgress(p);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const contentScale = 1 + progress * 0.5;
  const contentOpacity = 1 - progress;

  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden bg-white"
    >
      <Image
        src="/mesh.png"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 160% 145% at 0% 0%, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.85) 32%, rgba(255,255,255,0.55) 55%, rgba(255,255,255,0.22) 75%, rgba(255,255,255,0) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="relative z-10 flex -translate-y-10 flex-col items-center px-6 text-center sm:-translate-y-14"
        style={{
          transform: `scale(${contentScale})`,
          opacity: contentOpacity,
          willChange: "transform, opacity",
        }}
      >
        <Image
          src="/logo_blue/letters.svg"
          alt="Qognilum"
          width={803}
          height={273}
          priority
          className="h-28 w-auto sm:h-36 lg:h-44"
        />

        <p className="-mt-2 text-xl font-bold tracking-wide text-[#1E2B61] [text-shadow:0_2px_16px_rgba(255,255,255,0.9)] sm:text-2xl">
          High-fidelity optical solutions
        </p>

        <a
          href="#products"
          className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[#1E2B61] bg-white/40 px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-[#1E2B61] transition hover:bg-[#1E2B61] hover:text-white"
        >
          View Work
        </a>
      </div>

      <a
        href="#focus"
        aria-label="Scroll to content"
        className="absolute bottom-8 z-10 flex h-11 w-11 animate-bounce items-center justify-center rounded-full border border-[#1E2B61]/15 bg-white text-[#1E2B61]/70 shadow-md transition hover:border-[#1E2B61]/30 hover:text-[#1E2B61]"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0 6-6m-6 6-6-6" />
        </svg>
      </a>
    </section>
  );
}
