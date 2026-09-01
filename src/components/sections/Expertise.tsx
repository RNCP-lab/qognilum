"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

const PILLARS = ["Photonics", "Optoelectronics", "Advanced Sensing", "Intelligent Data Processing"];

const PARAGRAPHS = [
  "Qognilum combines deep expertise in photonics, optoelectronics, advanced sensing, and intelligent data processing to develop innovative solutions for emerging technological challenges.",
  "Our team brings together strong theoretical foundations with extensive experimental expertise in the design, development, and validation of advanced photonic and optoelectronic systems. Our dual academic–industrial model combines leadership in Horizon Europe research projects with close partnerships across the AI, photonics, and sensing ecosystems. This unique positioning enables us to translate pioneering research into practical, high-impact technologies that address real-world needs.",
  "Our expertise spans the entire innovation chain—from fundamental concepts and system design to hardware prototyping, signal processing, data analytics, and field validation. By integrating advanced photonic technologies with sophisticated algorithms and machine learning, Qognilum develops robust, intelligent solutions for demanding applications in fibre-optic sensing, secure quantum and classical communications, and next-generation hardware security.",
];

export default function Expertise() {
  const { ref: sectionRef, progress } = useScrollProgress<HTMLElement>(0.75, 0.25);

  return (
    <section id="expertise" ref={sectionRef} className="scroll-mt-14 bg-[#F5F7FC]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-[#65A3FF]">
            Expertise
          </span>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-600">
            {PARAGRAPHS.map((text, i) => {
              const delay = i * 0.22;
              const p = Math.min(Math.max((progress - delay) / (1 - delay), 0), 1);
              return (
                <p
                  key={i}
                  style={{
                    opacity: p,
                    transform: `translateX(${(1 - p) * -32}px)`,
                    willChange: "transform, opacity",
                  }}
                >
                  {text}
                </p>
              );
            })}
          </div>
        </div>

        <ul className="mt-12 flex flex-wrap gap-3">
          {PILLARS.map((pillar) => (
            <li
              key={pillar}
              className="rounded-full border border-[#1E2B61]/15 bg-white px-4 py-2 text-sm font-medium text-[#1E2B61]"
            >
              {pillar}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
