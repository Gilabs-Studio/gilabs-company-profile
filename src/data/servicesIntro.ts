export interface ComparisonItem {
  feature: string;
  saas: string;
  custom: string;
  highlight?: boolean;
}

export interface ValuePoint {
  icon: string;
  title: string;
  description: string;
  stats?: string;
}

export interface ServicesIntroData {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string[];
    tagsLeft: string[];
    tagsRight: string[];
  };
  problem: {
    title: string;
    subtitle: string;
    challenges: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  solution: {
    title: string;
    subtitle: string;
    tagline: string;
    benefits: ValuePoint[];
  };
  comparison: {
    title: string;
    subtitle: string;
    items: ComparisonItem[];
    note: string;
  };
  investment: {
    title: string;
    subtitle: string;
    scenarios: {
      type: string;
      saasModel: {
        title: string;
        monthly: string;
        yearly: string;
        threeYears: string;
        fiveYears: string;
      };
      customModel: {
        title: string;
        initial: string;
        yearly: string;
        threeYears: string;
        fiveYears: string;
      };
    }[];
    insight: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
}

export const servicesIntroData: Record<string, ServicesIntroData> = {
  en: {
    hero: {
      eyebrow: "The Future of Business Software",
      title: "Own Your Software. Build a Digital Asset.",
      subtitle: "Stop paying rent on your software",
      description: [
        "We architect ownership-based software systems. Your business, your digital asset, your strategic advantage.",
      ],
      tagsLeft: ["Unlimited Seats", "Source Code Access", "Private Infrastructure"],
      tagsRight: ["Long-Term Asset", "No Vendor Lock-in", "Enterprise Grade"],
    },
    problem: {
      title: "The Hidden Risks of Software Rentals",
      subtitle: "SaaS vendors can change terms anytime—you have no control. Platform pivots can break your workflows—you're along for the ride. Acquisitions can disrupt service—your business continuity at risk.",
      challenges: [
        {
          title: "Vendor Pricing Risk",
          description: "SaaS vendors can raise prices 40% with 30 days notice. You have no alternative—your workflows are locked in. Your success penalizes you with higher costs.",
          icon: "/icon/expensive.gif",
        },
        {
          title: "Platform Pivot Risk",
          description: "Vendors pivot their business model—your investment becomes legacy. Forced updates break your workflows. You're stuck adapting to their roadmap, not yours.",
          icon: "/icon/limited.gif",
        },
        {
          title: "Business Continuity Risk",
          description: "Acquisitions disrupt service. Vendor shutdowns leave you stranded. Your data is hostage. Your operations depend on their survival—not yours.",
          icon: "/icon/locked.gif",
        },
        {
          title: "Growth Penalty",
          description: "Success means higher costs. Scale from 50 to 500 users? Your SaaS bill increases 10x. Ownership means unlimited growth at fixed cost.",
          icon: "/icon/scalable.gif",
        },
      ],
    },
    solution: {
      title: "Our Solution: Built for You, Owned by You",
      subtitle: "One-time investment. Lifetime value.",
      tagline: "Stop renting. Start building equity.",
      benefits: [
        {
          icon: "/icon/unlimited.gif",
          title: "Unlimited Users, Forever",
          description: "Scale from 10 to 10,000 users without paying a cent more. No per-seat pricing. No hidden costs.",
          stats: "∞ users",
        },
        {
          icon: "/icon/ownership.gif",
          title: "Full Ownership & Control",
          description: "100% yours. Full source code, complete documentation. Host anywhere. Modify anytime. No vendor dependency.",
          stats: "100% owned",
        },
        {
          icon: "/icon/custom.gif",
          title: "Custom Workflow",
          description: "Not generic software. Purpose-built for how YOU work. Every feature serves your business needs.",
          stats: "Custom fit",
        },
        {
          icon: "/icon/scalable.gif",
          title: "Scalable Architecture",
          description: "Built to handle 10x growth. Add features when you need them. Your timeline, your budget.",
          stats: "10x scalable",
        },
      ],
    },
    comparison: {
      title: "Custom Software vs SaaS",
      subtitle: "See the real difference",
      items: [
        {
          feature: "Pricing Model",
          saas: "Per user, per month, forever",
          custom: "One-time development cost",
          highlight: true,
        },
        {
          feature: "User Limit",
          saas: "$50-500/user/month",
          custom: "Unlimited users included",
          highlight: true,
        },
        {
          feature: "Ownership",
          saas: "License rental only",
          custom: "Full source code ownership",
          highlight: true,
        },
        {
          feature: "Customization",
          saas: "Limited to available features",
          custom: "100% tailored to your needs",
        },
        {
          feature: "Data Control",
          saas: "Stored on their servers",
          custom: "Host on your infrastructure",
        },
        {
          feature: "Feature Updates",
          saas: "Forced updates, take it or leave it",
          custom: "You decide when and what",
        },
        {
          feature: "Integration",
          saas: "Limited APIs, extra costs",
          custom: "Integrate with anything",
        },
        {
          feature: "AI Enhancement",
          saas: "Pay extra for AI features",
          custom: "Add AI as you need",
        },
        {
          feature: "Long-term Cost",
          saas: "$100K-2M+ over 5 years",
          custom: "$50K-500K one-time",
          highlight: true,
        },
      ],
      note: "Actual costs vary by team size and requirements. Contact us for detailed breakdown.",
    },
    investment: {
      title: "The Real Cost Comparison",
      subtitle: "Let's do the math on a 50-user team",
      scenarios: [
        {
          type: "Small Team (50 users)",
          saasModel: {
            title: "SaaS Subscription",
            monthly: "$5,000/month",
            yearly: "$60,000/year",
            threeYears: "$180,000",
            fiveYears: "$300,000",
          },
          customModel: {
            title: "Custom Development",
            initial: "$80,000 one-time",
            yearly: "$10,000 maintenance",
            threeYears: "$100,000 total",
            fiveYears: "$120,000 total",
          },
        },
      ],
      insight: "Save $180,000 over 5 years. That's 150% ROI. And you own the software forever.",
    },
    cta: {
      title: "Stop Paying Rent. Build a Digital Asset.",
      subtitle: "Make a strategic investment, not a recurring expense. Let's calculate your ROI and architect your ownership-based system.",
      button: "Schedule a Strategic Consultation",
    },
  },
  id: {
    hero: {
      eyebrow: "Masa Depan Software Bisnis",
      title: "Miliki Software Anda. Bangun Aset Digital.",
      subtitle: "Berhenti membayar sewa untuk software Anda",
      description: [
        "Kami merancang sistem software berbasis kepemilikan. Bisnis Anda, aset digital Anda, keunggulan strategis Anda.",
      ],
      tagsLeft: ["Unlimited Seats", "Akses Source Code", "Infrastruktur Privat"],
      tagsRight: ["Aset Jangka Panjang", "Tanpa Vendor Lock-in", "Enterprise Grade"],
    },
    problem: {
      title: "Risiko Tersembunyi Sewa Software",
      subtitle: "Vendor SaaS dapat mengubah syarat kapan saja—Anda tidak punya kontrol. Platform pivot dapat merusak workflow Anda—Anda ikut arus. Akuisisi dapat mengganggu layanan—kontinuitas bisnis Anda berisiko.",
      challenges: [
        {
          title: "Risiko Kenaikan Harga Vendor",
          description: "Vendor SaaS dapat menaikkan harga 40% dengan pemberitahuan 30 hari. Anda tidak punya alternatif—workflow Anda terkunci. Kesuksesan Anda menghukum Anda dengan biaya lebih tinggi.",
          icon: "/icon/expensive.gif",
        },
        {
          title: "Risiko Pivot Platform",
          description: "Vendor mengubah model bisnis—investasi Anda menjadi legacy. Update paksa merusak workflow Anda. Anda terjebak menyesuaikan roadmap mereka, bukan Anda.",
          icon: "/icon/limited.gif",
        },
        {
          title: "Risiko Kontinuitas Bisnis",
          description: "Akuisisi mengganggu layanan. Penutupan vendor meninggalkan Anda terdampar. Data Anda disandera. Operasi Anda bergantung pada kelangsungan hidup mereka—bukan Anda.",
          icon: "/icon/locked.gif",
        },
        {
          title: "Penalti Pertumbuhan",
          description: "Kesuksesan berarti biaya lebih tinggi. Skala dari 50 ke 500 user? Tagihan SaaS Anda meningkat 10x. Kepemilikan berarti pertumbuhan tak terbatas dengan biaya tetap.",
          icon: "/icon/scalable.gif",
        },
      ],
    },
    solution: {
      title: "Solusi Kami: Dibangun untuk Anda, Dimiliki oleh Anda",
      subtitle: "Investasi sekali. Value selamanya.",
      tagline: "Berhenti menyewa. Mulai membangun ekuitas.",
      benefits: [
        {
          icon: "/icon/unlimited.gif",
          title: "Unlimited Users, Selamanya",
          description: "Scale dari 10 ke 10.000 user tanpa bayar sepeser pun lagi. Tanpa pricing per-seat. Tanpa biaya tersembunyi.",
          stats: "∞ users",
        },
        {
          icon: "/icon/ownership.gif",
          title: "Full Ownership & Control",
          description: "100% milik Anda. Source code lengkap, dokumentasi komplit. Host di mana saja. Modifikasi kapan saja. Tanpa ketergantungan vendor.",
          stats: "100% milik",
        },
        {
          icon: "/icon/custom.gif",
          title: "Custom Workflow",
          description: "Bukan software generik. Dibuat khusus untuk cara kerja ANDA. Setiap fitur melayani kebutuhan bisnis Anda.",
          stats: "Custom fit",
        },
        {
          icon: "/icon/scalable.gif",
          title: "Scalable Architecture",
          description: "Dibangun untuk menangani pertumbuhan 10x lipat. Tambah fitur saat butuh. Timeline Anda, budget Anda.",
          stats: "10x scalable",
        },
      ],
    },
    comparison: {
      title: "Software Custom vs SaaS",
      subtitle: "Lihat perbedaan nyatanya",
      items: [
        {
          feature: "Model Harga",
          saas: "Per user, per bulan, selamanya",
          custom: "Biaya development sekali",
          highlight: true,
        },
        {
          feature: "Limit User",
          saas: "Rp 700rb - 7jt/user/bulan",
          custom: "Unlimited users termasuk",
          highlight: true,
        },
        {
          feature: "Kepemilikan",
          saas: "Hanya sewa lisensi",
          custom: "Full kepemilikan source code",
          highlight: true,
        },
        {
          feature: "Kustomisasi",
          saas: "Terbatas fitur yang ada",
          custom: "100% disesuaikan kebutuhan",
        },
        {
          feature: "Kontrol Data",
          saas: "Tersimpan di server mereka",
          custom: "Host di infrastruktur Anda",
        },
        {
          feature: "Update Fitur",
          saas: "Update paksa, ambil atau tinggalkan",
          custom: "Anda yang putuskan kapan dan apa",
        },
        {
          feature: "Integrasi",
          saas: "API terbatas, biaya ekstra",
          custom: "Integrasi dengan apapun",
        },
        {
          feature: "AI Enhancement",
          saas: "Bayar ekstra untuk fitur AI",
          custom: "Tambah AI sesuai kebutuhan",
        },
        {
          feature: "Biaya Jangka Panjang",
          saas: "Rp 1,5M - 30M+ dalam 5 tahun",
          custom: "Rp 750jt - 7,5M sekali",
          highlight: true,
        },
      ],
      note: "Biaya aktual bervariasi tergantung ukuran tim dan requirement. Hubungi kami untuk breakdown detail.",
    },
    investment: {
      title: "Perbandingan Biaya Nyata",
      subtitle: "Mari hitung untuk tim 50 user",
      scenarios: [
        {
          type: "Tim Kecil (50 users)",
          saasModel: {
            title: "SaaS Subscription",
            monthly: "Rp 70jt/bulan",
            yearly: "Rp 840jt/tahun",
            threeYears: "Rp 2,5M",
            fiveYears: "Rp 4,2M",
          },
          customModel: {
            title: "Custom Development",
            initial: "Rp 1,1M sekali",
            yearly: "Rp 140jt maintenance",
            threeYears: "Rp 1,4M total",
            fiveYears: "Rp 1,7M total",
          },
        },
      ],
      insight: "Hemat Rp 2,5M dalam 5 tahun. ROI 150%. Dan Anda memiliki software selamanya.",
    },
    cta: {
      title: "Berhenti Membayar Sewa. Bangun Aset Digital.",
      subtitle: "Buat investasi strategis, bukan biaya berulang. Mari hitung ROI Anda dan rancang sistem berbasis kepemilikan Anda.",
      button: "Jadwalkan Konsultasi Strategis",
    },
  },
};
