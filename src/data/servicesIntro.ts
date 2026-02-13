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
      title: "Own Your Software. Stop Renting.",
      subtitle: "Break free from endless SaaS subscriptions",
      description: [
        "SaaS pricing is spiraling out of control. Per-user, per-month fees that never end. AI disruption making subscription models obsolete.",
        "We build custom software with unlimited users, no recurring fees, and full ownership. Your business, your software, your terms.",
      ],
    },
    problem: {
      title: "The SaaS Trap",
      subtitle: "Why subscription models are holding your business back",
      challenges: [
        {
          title: "Endless Monthly Fees",
          description: "Pay $50-500 per user, every month, forever. Costs balloon as your team grows. You never own anything.",
          icon: "/icon/expensive.gif",
        },
        {
          title: "Limited Customization",
          description: "Forced to adapt your workflow to their software. Features you need? Pay extra. Features you don't? Still paying.",
          icon: "/icon/limited.gif",
        },
        {
          title: "Vendor Lock-In",
          description: "Your data, their platform. Want to leave? Export nightmare. Price increase? Accept or lose everything.",
          icon: "/icon/locked.gif",
        },
        {
          title: "AI Disruption",
          description: "AI tools are commoditizing SaaS features. Why pay monthly for what AI can do cheaper or free?",
          icon: "/icon/artificial-intelligence.gif",
        },
      ],
    },
    solution: {
      title: "Custom Software: Built for You, Owned by You",
      subtitle: "One-time investment. Lifetime value.",
      tagline: "Stop renting. Start owning.",
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
          title: "Built Exactly for Your Workflow",
          description: "Not generic software. Purpose-built for how YOU work. Every feature serves your business needs.",
          stats: "Custom fit",
        },
        {
          icon: "/icon/integration.gif",
          title: "AI-Ready Integration",
          description: "Future-proof with AI integration. Automate workflows, enhance features with latest AI. Stay ahead of disruption.",
          stats: "AI-powered",
        },
        {
          icon: "/icon/savings.gif",
          title: "ROI in 12-24 Months",
          description: "One-time cost vs. endless subscriptions. Break even in 1-2 years, save millions over 5 years.",
          stats: "Break even: 12-24mo",
        },
        {
          icon: "/icon/scalable.gif",
          title: "Scales With Your Growth",
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
      title: "Ready to Own Your Software?",
      subtitle: "Let's calculate your exact ROI and build a roadmap for your custom solution.",
      button: "Schedule a Consultation",
    },
  },
  id: {
    hero: {
      eyebrow: "Masa Depan Software Bisnis",
      title: "Miliki Software Anda. Berhenti Menyewa.",
      subtitle: "Lepaskan diri dari subscription SaaS yang tak berujung",
      description: [
        "Harga SaaS terus melonjak tak terkendali. Biaya per user, per bulan yang tak pernah berhenti. Disrupsi AI membuat model subscription menjadi usang.",
        "Kami membangun software custom dengan unlimited users, tanpa biaya berulang, dan full ownership. Bisnis Anda, software Anda, aturan Anda.",
      ],
    },
    problem: {
      title: "Jebakan SaaS",
      subtitle: "Mengapa model subscription menghambat pertumbuhan bisnis Anda",
      challenges: [
        {
          title: "Biaya Bulanan Tanpa Akhir",
          description: "Bayar Rp 700rb - 7jt per user, setiap bulan, selamanya. Biaya membengkak saat tim bertambah. Anda tidak pernah memiliki apapun.",
          icon: "/icon/expensive.gif",
        },
        {
          title: "Kustomisasi Terbatas",
          description: "Terpaksa menyesuaikan workflow Anda dengan software mereka. Fitur yang dibutuhkan? Bayar ekstra. Fitur yang tidak? Tetap bayar.",
          icon: "/icon/limited.gif",
        },
        {
          title: "Terkunci Vendor",
          description: "Data Anda, platform mereka. Mau pindah? Ekspor data mimpi buruk. Harga naik? Terima atau kehilangan semua.",
          icon: "/icon/locked.gif",
        },
        {
          title: "Disrupsi AI",
          description: "AI tools membuat fitur SaaS jadi komoditas. Mengapa bayar bulanan untuk yang bisa AI lakukan lebih murah atau gratis?",
          icon: "/icon/artificial-intelligence.gif",
        },
      ],
    },
    solution: {
      title: "Software Custom: Dibangun untuk Anda, Dimiliki oleh Anda",
      subtitle: "Investasi sekali. Value selamanya.",
      tagline: "Berhenti menyewa. Mulai memiliki.",
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
          title: "Dibangun Sesuai Workflow Anda",
          description: "Bukan software generik. Dibuat khusus untuk cara kerja ANDA. Setiap fitur melayani kebutuhan bisnis Anda.",
          stats: "Custom fit",
        },
        {
          icon: "/icon/integration.gif",
          title: "AI-Ready Integration",
          description: "Future-proof dengan integrasi AI. Otomatisasi workflow, tingkatkan fitur dengan AI terbaru. Tetap unggul dari disrupsi.",
          stats: "AI-powered",
        },
        {
          icon: "/icon/savings.gif",
          title: "ROI dalam 12-24 Bulan",
          description: "Biaya sekali vs subscription tanpa akhir. Break even 1-2 tahun, hemat miliaran dalam 5 tahun.",
          stats: "Break even: 12-24bln",
        },
        {
          icon: "/icon/scalable.gif",
          title: "Scale Seiring Pertumbuhan",
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
      title: "Siap Memiliki Software Anda Sendiri?",
      subtitle: "Mari hitung ROI exact Anda dan buat roadmap untuk solusi custom Anda.",
      button: "Jadwalkan Konsultasi",
    },
  },
};
