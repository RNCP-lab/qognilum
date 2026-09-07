export type Spec = {
  label: string;
  value: string;
};

export type DetailSection = {
  title: string;
  paragraphs: string[];
};

export type Product = {
  slug: string;
  title: string;
  paragraphs: string[];
  applications?: string[];
  closingParagraph?: string;
  specs?: Spec[];
  /** Overrides the accordion tab label that otherwise defaults to "Specs" / "Services". */
  specsTabLabel?: string;
  relatedWork?: string[];
  /** When set, the Details tab renders these titled subsections instead of the rest of `paragraphs`. */
  detailSections?: DetailSection[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "signal-processing",
    title: "Advanced Signal Processing for Optical Communications and Fibre Optic Sensing",
    paragraphs: [
      "Qognilum develops advanced signal processing solutions for optical communications and fibre optic sensing, combining state-of-the-art classical and bio-inspired/neuromorphic algorithms with lightweight machine learning models for real-time event detection, classification, and anomaly identification.",
      "Our software suites enable the analysis, modelling, and emulation of a wide range of optical devices and subsystems, including lasers, waveguides, photonic integrated circuits, and complete sensing architectures. The machine learning models developed by Qognilum have been validated in demanding laboratory environments and real-world field deployments, demonstrating outstanding performance in applications such as event detection, event classification and signal quality assessment.",
      "A key focus of our development is the migration of these cutting-edge algorithms to embedded hardware platforms, enabling quasi real-time processing directly at the sensing edge with low power-consumption footprint, suitable for IoT deployments. This approach significantly reduces processing latency and supports the deployment of efficient early-warning systems for critical infrastructure monitoring.",
    ],
    relatedWork: [
      'Deligiannidis, Stavros, et al. "Compensation of fiber nonlinearities in digital coherent systems leveraging long short-term memory neural networks." Journal of Lightwave Technology 38.21 (2020): 5991-5999.',
      'Deligiannidis, Stavros, et al. "VCSEL-based PAM-4 transmission system emulator: a data-driven deep-learning perspective." Applied Optics 65.16 (2026): 5369-5375.',
      'Moustakas, Georgios, et al. "Neuromorphic imaging flow cytometry combined with adaptive recurrent spiking neural networks." Optics Express 33.16 (2025): 34180-34194.',
      'Moustakas, G., et al. "Data Driven Simulation of Semiconductor Optical Amplifiers by Means of bi-LSTM and Transformer Machine Learning Models." The European Conference on Lasers and Electro-Optics. Optica Publishing Group, 2025.',
    ],
  },
  {
    slug: "mffi",
    title:
      "Microwave Frequency Fibre Interferometry (MFFI) Solutions for Ultra-Long-Range Fibre Sensing",
    paragraphs: [
      "Qognilum develops next-generation fibre optic sensing interrogators based on Microwave Frequency Fibre Interferometry (MFFI), an innovative technology pioneered by the company's founders.",
      "Unlike conventional distributed acoustic sensing (DAS) systems that rely on optical-domain interferometry, MFFI performs highly precise phase measurements in the microwave domain by exploiting the exceptional spectral purity of microwave oscillators operating at frequencies of 10 GHz and above. This approach delivers high sensitivity while significantly simplifying the interrogation architecture.",
      "Our MFFI interrogators enable the monitoring of submarine and terrestrial fibre links exceeding 1,000 km with minimal network intrusion and full compatibility with existing telecommunications traffic. For networks incorporating high-loss loopbacks, per-span interferometry provides spatial resolution on the order of 50 km, allowing localized monitoring over ultra-long-haul infrastructures.",
      "The resulting systems offer a unique combination of long reach, high sensitivity, low deployment cost, and compatibility with existing fibre infrastructure, making them ideal for applications including:",
    ],
    applications: [
      "Submarine cable monitoring",
      "Geophysical and seismic sensing",
      "Critical infrastructure surveillance",
      "Border and perimeter security",
      "Pipeline and power transmission monitoring",
      "Telecom network health monitoring",
    ],
    closingParagraph:
      "Compared with conventional DAS technologies, Qognilum's MFFI solutions provide unprecedented sensing range while maintaining excellent sensitivity and operational simplicity.",
    specs: [
      {
        label: "Fiber reach",
        value:
          ">2,000 km target, scalable to transoceanic links depending on cable architecture and optical link budget.",
      },
      {
        label: "Cable compatibility",
        value: "Designed for repeatered submarine telecom cables equipped with High-Loss Loopbacks (HLLBs).",
      },
      {
        label: "Non-invasive operation",
        value: "Interrogation from the cable landing station, requiring no modification of the submerged cable plant.",
      },
      {
        label: "Per-span sensing",
        value:
          "Independently interrogates individual repeater spans, effectively turning each ~50–100 km cable section into a sensing element.",
      },
      {
        label: "Number of sensing spans",
        value: ">20 spans, with architecture scalable to tens of HLLBs per cable.",
      },
      {
        label: "Optical-band compatibility",
        value: "C/L-band operation.",
      },
      {
        label: "Long-haul amplified-link compatibility",
        value: "Designed to operate through the cable's existing EDFA/repeater infrastructure and associated high optical losses.",
      },
      {
        label: "Sensing bandwidth",
        value: "From quasi-DC / multi-hour phenomena to tens of Hz.",
      },
      {
        label: "Sensitivity",
        value: "Nanostrain level.",
      },
      {
        label: "Continuous monitoring",
        value: "Intended for 24/7 unattended operation over months/years.",
      },
      {
        label: "Simultaneous geophysical and anthropogenic sensing",
        value:
          "Single instrument capable of observing earthquakes, ocean microseisms/storm activity, tides and other long-period ocean signals along with marine vessel activity, offshore construction, seismic surveys, industrial operations and other human-generated acoustic/seismic disturbances.",
      },
      {
        label: "Telecom coexistence",
        value: "Architecture suitable for operation alongside normal submarine telecommunications traffic.",
      },
      {
        label: "Remote operation",
        value: "Ethernet/IP control, remote configuration, health monitoring, data streaming and firmware updates.",
      },
      {
        label: "Scalable data volume",
        value: "Orders-of-magnitude lower acquisition/data-rate requirements than conventional high-speed coherent/OFDR-style interrogation.",
      },
      {
        label: "Form factor target",
        value:
          "Ultimately suitable for a rack-mount landing-station appliance, interfacing between the cable monitoring/HLLB optical port and the operator's network.",
      },
    ],
    relatedWork: [
      'Bogris, Adonis, et al. "Sensitive seismic sensors based on microwave frequency fiber interferometry in commercially deployed cables." Scientific Reports 12.1 (2022): 14000.',
      'Bogris, Adonis, et al. "Microwave frequency fiber interferometry in submarine deployed telecommunication cables." Optical Fiber Communication Conference. Optica Publishing Group, 2025.',
      'Deligiannidis, Stavros, et al. "Earthquake Distance and Magnitude Estimation via Calibrated Microwave Frequency Fiber Interferometry." 2025 European Conference on Optical Communications (ECOC). IEEE, 2025.',
      'Karydis, Georgios Aias, et al. "Per-Span Microwave Frequency Fiber Interferometry in Subsea Cables for Scalable Deep-Ocean Geophysical Monitoring." arXiv preprint arXiv:2606.21905 (2026), European Conference on Optical Communications (ECOC), 2026.',
    ],
  },
  {
    slug: "photonic-pufs",
    title:
      "Advanced Prototyping of Photonic Physical Unclonable Functions (PUFs): From Classical to Quantum Security",
    paragraphs: [
      "Qognilum develops next-generation photonic Physical Unclonable Functions (PUFs) that exploit the intrinsic randomness of optical and CMOS compatible integrated photonic systems to create unique, clone-resilient hardware based fingerprints.",
    ],
    detailSections: [
      {
        title: "Photonic Integrated PUFs",
        paragraphs: [
          "Photonic integrated PUFs leverage the complex behaviour of light propagation, scattering, interference, and nanoscale fabrication variations to generate unique and clone resilient physical fingerprints in a CMOS compatible integrated platform.",
          "Qognilum's integrated PUFs circumvent complex and resource hungry algorithmic entropy sources by leveraging physics driven security, exploiting unavoidable silicon photonic fabrication tolerances, offer a robust, miniaturized pseudo-random number generator – ready for the post quantum era.",
          "Extracting spectro-temporal responses applications such as robust hardware authentication, trusted hardware anti-counterfeiting and secure cryptographic key generation are within grasp. Applications include authentication of integrated circuits, of optical transceivers, sensing platforms, and IoT edge devices or secure PRNGs suitable for cryptographic systems.",
        ],
      },
      {
        title: "Quantum Hardened PUFs",
        paragraphs: [
          "Building on our expertise in integrated photonics, optical signal processing, and machine learning, Qognilum is advancing the field towards quantum photonic PUFs, exploiting SiN fabrication platform, the fundamental properties of single-photon sources and quantum optical phenomena to merge the above merits with enhanced security features, tamper free and machine-learning attack resiliency.",
          "Our quantum PUF technology introduces a new paradigm for hardware security by using single photons as information carriers, providing intrinsic advantages in terms of unpredictability, uniqueness, and resistance to invasive characterization. The quantum nature of the generated responses significantly increases robustness against side-channel attacks, as attempts to observe or extract the physical characteristics of the device can alter the quantum state itself, limiting the possibility of undetected information leakage.",
          "Qognilum's research in quantum PUFs targets highly secure authentication architectures for future quantum-safe infrastructures, advanced QKD deployments, trusted photonic networks, secure communications, and next-generation Internet of Things (IoT) devices. By combining quantum photonics, advanced fabrication technologies, and intelligent signal analysis, we aim to deliver hardware security solutions capable of meeting the requirements of emerging cyber-physical systems.",
        ],
      },
    ],
    relatedWork: [
      'Sarantoglou, George, et al. "Reconfigurable silicon photonics extreme learning machine with random non-linearities as neural processor and physical unclonable function." Journal of Applied Physics 140.2 (2026): 023101.',
      'Sarantoglou, G., et al. "Quantum-Secure Physical Unclonable Function enabled by Silicon Photonics Integrated Circuits." arXiv preprint arXiv:2605.14959 (2026).',
      'Sarantoglou, George, et al. "Reconfigurable integrated photonic chips as dual-purpose neuromorphic accelerators and physical unclonable functions." Optics Letters 50.15 (2025): 4842-4845.',
      'Dermanis, Dimitris, et al. "Photonic Physical Unclonable Function Based on Integrated Neuromorphic Devices." Journal of Lightwave Technology 40.22 (2022): 7333-7341.',
    ],
  },
];
