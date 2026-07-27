export default function Company() {
  return (
    <section id="company" className="scroll-mt-14 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-[#65A3FF]">
              Company
            </span>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-zinc-600">
            <p>
              Qognilum is a privately held company founded by researchers
              from the Research Unit on Neuromorphic Computing and Photonics
              (RNCP) of the University of West Attica (UWA). The team
              combines expertise in computer science, quantum security,
              cryptography, sensing and photonics/optoelectronics
              engineering aiming at offering unique solutions in the fields
              of fibre optics sensing and hardware security.
            </p>
            <p>
              Building on years of research in optical communications,
              sensing, neuromorphic computing and hardware security at RNCP,
              Qognilum develops state-of-the-art prototypes and specialized
              analysis tools tailored for optical communications and
              sensing signals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
