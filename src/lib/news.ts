export type NewsArticle = {
  slug: string;
  title: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  /** One-sentence summary for listings and previews. */
  excerpt: string;
  paragraphs: string[];
  /** Caption for the article's lead image (public/news/<slug>/1.*). */
  imageCaption?: string;
};

export const NEWS: NewsArticle[] = [
  {
    slug: "first_sale",
    title: "Qognilum Completes Its First Commercial Delivery",
    date: "2026-11-24",
    excerpt:
      "Qognilum has delivered its first Long-Range Microwave Frequency Fibre Interferometry (MFFI) system to the Dublin Institute for Advanced Studies (DIAS) in Ireland.",
    paragraphs: [
      "Qognilum is pleased to announce the successful delivery of its first Long-Range Microwave Frequency Fibre Interferometry (MFFI) system to the Dublin Institute for Advanced Studies (DIAS) in Ireland, marking the company's first commercial milestone.",
      "MFFI technology enables sensing over thousands of kilometres of optical fibre, combining high sensitivity to low-frequency disturbances, an exceptionally high dynamic range, and cost-effective interrogation in the microwave domain. Designed for submarine cable monitoring, oceanographic and geophysical observation, and critical infrastructure surveillance, MFFI turns existing fibre-optic networks into large-scale sensing infrastructures.",
      "The delivery builds on pioneering research carried out by the Research Unit on Neuromorphic Computing and Photonics (RNCP) at the University of West Attica. The original MFFI prototype developed by RNCP is already deployed and operating on the IRIS submarine cable connecting Ireland and Iceland. This field-proven technology has now taken its next step toward commercialisation through Qognilum.",
      "We would like to thank Prof. Chris Bean and the DIAS team for their trust in Qognilum and their continued collaboration, and we look forward to further advancing long-range fibre sensing together.",
    ],
    imageCaption:
      "The original MFFI prototype developed by RNCP, deployed and operating on the IRIS submarine cable between Ireland and Iceland.",
  },
];
