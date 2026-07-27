export type Product = {
  slug: string;
  title: string;
  paragraphs: string[];
  applications?: string[];
  closingParagraph?: string;
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
  },
  {
    slug: "photonic-pufs",
    title:
      "Advanced Prototyping of Photonic Physical Unclonable Functions (PUFs): From Classical to Quantum Security",
    paragraphs: [
      "Qognilum develops next-generation photonic Physical Unclonable Functions (PUFs) that exploit the intrinsic randomness of optical and CMOS compatible integrated photonic systems to create unique, clone-resilient hardware based fingerprints.",
      "Unlike conventional electronic security solutions, photonic PUFs leverage the complex behaviour of light propagation, scattering, interference, and nanoscale fabrication variations to generate highly distinctive physical fingerprints. Qognilum's integrated PUFs leverages physics driven security, offering robust cyber-resilient and secure key generation without power/resource hungry pseudo-random algorithms.",
      "These characteristics enable robust hardware authentication, anti-counterfeiting, device identification, and secure cryptographic key generation for applications including photonic integrated circuits, optical transceivers, sensing platforms, and edge devices.",
      "Building on our expertise in integrated photonics, optical signal processing, and machine learning, Qognilum is advancing the field towards quantum photonic PUFs, exploiting the fundamental properties of single-photon sources and quantum optical phenomena to deliver enhanced security, tamper free and machine-learning attack resilient at the physical layer.",
      "Our quantum PUF technology introduces a new paradigm for hardware security by using single photons as information carriers, providing intrinsic advantages in terms of unpredictability, uniqueness, and resistance to invasive characterization. The quantum nature of the generated responses significantly increases robustness against side-channel attacks, as attempts to observe or extract the physical characteristics of the device can alter the quantum state itself, limiting the possibility of undetected information leakage.",
      "Qognilum's research in quantum PUFs targets highly secure authentication architectures for future quantum-safe infrastructures, advanced QKD deployments, trusted photonic networks, secure communications, and next-generation Internet of Things (IoT) devices. By combining quantum photonics, advanced fabrication technologies, and intelligent signal analysis, we aim to deliver hardware security solutions capable of meeting the requirements of emerging cyber-physical systems.",
    ],
  },
];
