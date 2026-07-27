const PILLARS = ["Photonics", "Optoelectronics", "Advanced Sensing", "Intelligent Data Processing"];

export default function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-14 bg-[#F5F7FC]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-[#65A3FF]">
            Expertise
          </span>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-600">
            <p>
              Qognilum combines deep expertise in photonics, optoelectronics,
              advanced sensing and intelligent data processing to develop
              innovative solutions for emerging technological challenges.
            </p>
            <p>
              Our team brings together strong theoretical foundations and
              extensive experimental experience in the design, development,
              and validation of advanced photonic and optoelectronic systems.
              Through a dual academic-industrial model combines leadership in
              Horizon Europe research projects with close partnerships
              across the AI and sensing ecosystem, enabling us to turn
              pioneering research into practical technologies that deliver
              measurable impact.&quot;
            </p>
            <p>
              Our expertise spans the complete innovation chain, from
              fundamental concepts and system design to hardware
              prototyping, signal processing, data analytics, and field
              validation. By integrating photonic technologies with
              sophisticated algorithms and machine learning approaches,
              Qognilum delivers robust solutions for demanding applications
              in fibre optic sensing, secure quantum and classical
              communications, and next-generation hardware security.
            </p>
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
