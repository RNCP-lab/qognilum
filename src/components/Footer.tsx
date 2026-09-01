import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-10 sm:px-8">
        <Image
          src="/logo_blue/mark.svg"
          alt="Qognilum"
          width={265}
          height={278}
          className="h-8 w-auto"
        />
        <a
          href="mailto:info@qognilum.eu"
          className="text-center text-xs text-zinc-400 transition hover:text-zinc-600"
        >
          info@qognilum.eu
        </a>
        <p className="text-center text-xs text-zinc-400">
          &copy; {new Date().getFullYear()} Qognilum. All rights reserved.
        </p>
        <p className="text-center text-xs text-zinc-400">
          Spin-off of the Research Unit on Neuromorphic Computing and
          Photonics (RNCP), University of West Attica (UWA).
        </p>
      </div>
    </footer>
  );
}
