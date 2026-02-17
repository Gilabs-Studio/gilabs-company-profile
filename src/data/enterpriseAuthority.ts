export interface EnterpriseAuthorityData {
  eyebrow: string;
  title: string;
  subtitle: string;
  credentials: {
    icon: string;
    title: string;
    description: string;
    stat?: string;
  }[];
  positioning: {
    title: string;
    points: string[];
  };
}

export const enterpriseAuthorityData: Record<string, EnterpriseAuthorityData> = {
  en: {
    eyebrow: "Enterprise Credibility",
    title: "Built for Enterprise\nProven at Scale",
    subtitle: "We don't just build software—we architect infrastructure that transfers. Organizations choose us for infrastructure control, not vendor dependency.",
    credentials: [
      {
        icon: "/icon/enterprise-development.gif",
        title: "Years of Infrastructure Control Expertise",
        description: "We've specialized in transfer-ready architecture from day one. Every system we build is designed for client autonomy, not vendor dependency.",
        stat: "5+ years",
      },
      {
        icon: "/icon/strategic-consulting.gif",
        title: "Enterprise Clients Trust Us",
        description: "Organizations across industries trust us with their core operations. We build systems that become their competitive advantage.",
        stat: "Enterprise-grade",
      },
      {
        icon: "/icon/award.gif",
        title: "Capital Assets Transferred",
        description: "Millions in software infrastructure successfully transferred to client control. Full source code, documentation, and operational autonomy.",
        stat: "$M+ transferred",
      },
      {
        icon: "/icon/discuss.gif",
        title: "Strategic Partnership Focus",
        description: "We think in 5-year horizons, not project sprints. Your success is our success—we're invested in your long-term outcomes.",
      },
    ],
    positioning: {
      title: "Boutique Expertise\nEnterprise Capability\nLong-Term Partnerships",
      points: [
        "We're selective—we work with clients who value infrastructure control and strategic autonomy.",
        "Senior team, focused delivery. No bureaucracy, just results.",
        "We become an extension of your technology strategy, not just a vendor.",
        "Long-term strategic partnerships built on trust and shared outcomes.",
      ],
    },
  },
  id: {
    eyebrow: "Kredibilitas Enterprise",
    title: "Dibangun untuk Enterprise\nTerbukti dalam Skala",
    subtitle: "Kami tidak hanya membangun software—kami merancang infrastruktur yang transfer. Organisasi memilih kami untuk kontrol infrastruktur, bukan dependensi vendor.",
    credentials: [
      {
        icon: "/icon/enterprise-development.gif",
        title: "Tahun Keahlian Kontrol Infrastruktur",
        description: "Kami mengkhususkan diri dalam arsitektur transfer-ready sejak hari pertama. Setiap sistem yang kami bangun dirancang untuk otonomi klien, bukan dependensi vendor.",
        stat: "5+ tahun",
      },
      {
        icon: "/icon/strategic-consulting.gif",
        title: "Klien Enterprise Mempercayai Kami",
        description: "Organisasi di berbagai industri mempercayai kami dengan operasi inti mereka. Kami membangun sistem yang menjadi keunggulan kompetitif mereka.",
        stat: "Enterprise-grade",
      },
      {
        icon: "/icon/award.gif",
        title: "Aset Modal yang Ditransfer",
        description: "Jutaan dalam infrastruktur software berhasil ditransfer ke kontrol klien. Source code lengkap, dokumentasi, dan otonomi operasional.",
        stat: "$M+ ditransfer",
      },
      {
        icon: "/icon/discuss.gif",
        title: "Fokus Kemitraan Strategis",
        description: "Kami berpikir dalam horizon 5 tahun, bukan sprint proyek. Kesuksesan Anda adalah kesuksesan kami—kami berinvestasi dalam hasil jangka panjang Anda.",
      },
    ],
    positioning: {
      title: "Keahlian Boutique\nKemampuan Enterprise\nKemitraan Jangka Panjang",
      points: [
        "Kami selektif—kami bekerja dengan klien yang menghargai kontrol infrastruktur dan otonomi strategis.",
        "Tim senior, pengiriman terfokus. Tanpa birokrasi, hanya hasil.",
        "Kami menjadi perpanjangan strategi teknologi Anda, bukan hanya vendor.",
        "Kemitraan strategis jangka panjang dibangun atas kepercayaan dan hasil bersama.",
      ],
    },
  },
};
