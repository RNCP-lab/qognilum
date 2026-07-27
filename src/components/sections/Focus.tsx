export default function Focus() {
  return (
    <section id="focus" className="relative overflow-hidden bg-white">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:max-w-3xl lg:py-40">
        <span className="text-xs font-semibold uppercase tracking-wide text-[#65A3FF]">
          Our Focus
        </span>

        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#1E2B61] sm:text-4xl lg:text-5xl">
          Qognilum develops high-fidelity, cost-effective deep-tech solutions
          for fibre optic sensing and photonic hardware security.
        </h1>

        <div className="mt-6 max-w-xl space-y-5 text-lg leading-relaxed text-zinc-600">
          <p>
            Our mission is to transform advanced photonic technologies
            exploiting classical light and quantum optics into practical
            systems by combining innovative optoelectronic architectures with
            proprietary data acquisition, signal processing, and intelligent
            analytics.
          </p>
          <p>
            From ultra-long-range fibre monitoring to next-generation
            quantum-hardened trusted hardware, our solutions integrate custom
            hardware with advanced software platforms to deliver complete
            end-to-end capabilities, enabling reliable sensing, secure
            identification, and data-driven decision making in demanding
            real-world environments.
          </p>
        </div>

        <a
          href="#products"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#1E2B61] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16204a]"
        >
          Products & Services
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0 6-6m-6 6-6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
