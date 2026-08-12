export interface ComparisonRow {
  aspect: string;
  freelancer: string;
  competitor: string;
  gilabs: string;
}

export interface ComparisonData {
  eyebrow: string;
  title: string;
  subtitle: string;
  headers: {
    aspect: string;
    freelancer: string;
    competitor: string;
    gilabs: string;
  };
  badgeText: string;
  rows: ComparisonRow[];
}

export const comparisonData: Record<string, ComparisonData> = {
  id: {
    eyebrow: "Matriks Perbandingan",
    title: "Bagaimana Kami Berbeda",
    subtitle: "Perbandingan jujur dan transparan: standar industri vs. pendekatan Gilabs.",
    headers: {
      aspect: "Aspek",
      freelancer: "Freelancer",
      competitor: "Agency Kompetitor",
      gilabs: "Gilabs",
    },
    badgeText: "Standar Gilabs",
    rows: [
      {
        aspect: "Desain UI/UX",
        freelancer: "Sering pakai template Canva atau Figma community yang itu-itu saja, ujung-ujungnya kelihatan pasaran.",
        competitor: "Kadang masih mengandalkan library desain generik, revisi konsep dianggap kerjaan tambahan.",
        gilabs: "Dirancang dari nol sesuai brand dan target user, AI hanya membantu riset & eksplorasi, bukan bikin asal jadi.",
      },
      {
        aspect: "Pemakaian AI",
        freelancer: "AI generate mentah, hasil \"kata AI banget\", tidak disesuaikan sama kebutuhan bisnis klien.",
        competitor: "Terkadang AI dipakai buat mengejar deadline, tapi output jarang dikurasi ulang.",
        gilabs: "AI dipakai buat mempercepat riset dan wireframing, tapi finishing dan detail tetap disentuh manual sama desainer.",
      },
      {
        aspect: "Kecepatan Respon",
        freelancer: "Kadang ghosting di tengah project, komunikasi cuma pas nagih deadline.",
        competitor: "Ada tim tapi birokrasi panjang, approval berlapis, jadi lambat.",
        gilabs: "Fast response, satu pintu komunikasi, progress jelas tiap tahap.",
      },
      {
        aspect: "Revisi",
        freelancer: "Dibatesin, lebih dari itu kena charge tambahan tanpa kejelasan di awal.",
        competitor: "Revisi ada tapi sering dikenain biaya tersembunyi.",
        gilabs: "Revisi masuk paket, jelas dari kontrak, nggak ada biaya siluman.",
      },
      {
        aspect: "Harga",
        freelancer: "Murah di depan, tapi sering nambah-nambah pas project jalan.",
        competitor: "Mahal, sering nggak sepadan sama hasil akhir.",
        gilabs: "Transparan sejak awal, sepadan sama kualitas dan effort yang dikasih.",
      },
      {
        aspect: "Support Pasca Launch",
        freelancer: "Ilang begitu file dikirim.",
        competitor: "Support terbatas, biasanya cuma bug fix ringan.",
        gilabs: "Ada pendampingan, siap dihubungi kalau ada kendala setelah web live.",
      },
      {
        aspect: "Proses Kerja",
        freelancer: "Nggak terstruktur, sering nebak-nebak maunya klien.",
        competitor: "Proses baku, kaku, kurang ruang buat masukan klien.",
        gilabs: "Kolaboratif, klien dilibatin dari riset sampe testing akhir.",
      },
    ],
  },
  en: {
    eyebrow: "Comparison Matrix",
    title: "How We Stand Apart",
    subtitle: "An honest, side-by-side comparison: industry norms vs. the Gilabs approach.",
    headers: {
      aspect: "Aspect",
      freelancer: "Freelancers",
      competitor: "Competitor Agencies",
      gilabs: "Gilabs",
    },
    badgeText: "Gilabs Standard",
    rows: [
      {
        aspect: "UI/UX Design",
        freelancer: "Rely heavily on generic Canva or Figma templates, resulting in repetitive, ordinary market output.",
        competitor: "Often reuse generic component libraries, treating concept revisions as extra billable work.",
        gilabs: "Designed from scratch around your brand and target users. AI assists research & exploration, never raw output.",
      },
      {
        aspect: "AI Utilization",
        freelancer: "Raw AI generation with generic results that fail to align with real business needs.",
        competitor: "AI is rushed to hit tight deadlines, with outputs rarely curated or refined.",
        gilabs: "AI accelerates research and wireframing, while final finishing and details are manually crafted by experts.",
      },
      {
        aspect: "Response Speed",
        freelancer: "Prone to mid-project ghosting; communication usually only happens around payment deadlines.",
        competitor: "Layered bureaucracy and long approval chains slow down project execution.",
        gilabs: "Rapid response with a dedicated single point of contact and transparent progress at every stage.",
      },
      {
        aspect: "Revisions",
        freelancer: "Strictly capped; additional revisions incur unexpected charges without upfront clarity.",
        competitor: "Revisions exist but often come with surprise hidden fees later on.",
        gilabs: "Included in the agreed package, explicitly contracted upfront with zero hidden fees.",
      },
      {
        aspect: "Pricing",
        freelancer: "Cheap upfront, but scope creep and hidden fees keep piling up as the project progresses.",
        competitor: "Expensive, yet final deliverables rarely match the heavy investment.",
        gilabs: "Fully transparent from day one, fair pricing aligned with enterprise quality and effort.",
      },
      {
        aspect: "Post-Launch Support",
        freelancer: "Disappears immediately once final files or source code are delivered.",
        competitor: "Support is highly restricted, usually limited to basic minor bug fixes.",
        gilabs: "Ongoing guidance and dedicated support whenever issues arise post-launch.",
      },
      {
        aspect: "Work Process",
        freelancer: "Unstructured approach based on guesswork instead of strategic alignment.",
        competitor: "Rigid and bureaucratic processes with little room for client input.",
        gilabs: "Deeply collaborative, clients are actively involved from initial research to final testing.",
      },
    ],
  },
};
