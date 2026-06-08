
export interface PricingPackage {
  title: string;
  description: string;
  price: string;
  revisions: string[];
  features: string[];
  addons: string[];
}

export interface PricingData {
  hero: {
    title: string;
    eyebrow: string;
    subtitle: string;
    cta: string;
  };
  features: {
    items: {
      title: string;
      description: string;
    }[];
  };
  about: {
    title: string;
    subtitle: string;
    body: string[];
  };
  process: {
    title: string;
    subtitle: string;
    body: string[];
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      body: string[];
      tagline: string;
    }[];
  };
  energy: {
    title: string;
    subtitle: string;
    body: string[];
  };
  ctaSection: {
    title: string;
    subtitle: string[];
    button: string;
  };
  packages: PricingPackage[];
  revisionSystem: {
    title: string;
    small: {
      title: string;
      items: string[];
    };
    large: {
      title: string;
      items: string[];
    };
    extra: string[];
  };
  blog: {
    title: string;
    options: {
      name: string;
      price: string;
    }[];
    addons: string[];
  };
  store: {
    title: string;
    options: {
      name: string;
      details?: string[];
      price: string;
    }[];
  };
  erpCrm: {
    title: string;
    description: string;
    cta?: {
      title: string;
      subtitle: string;
      timeline: string;
      description: string;
      button: string;
    };
    crm: {
      title: string;
      description: string;
      packages: {
        name: string;
        features: string[];
        price: string;
        revisions?: string[];
      }[];
    };
    erp: {
      title: string;
      description: string;
      modules: string[];
      fullPackage: string;
      revisions: string[];
    };
  };
  maintenance: {
    title: string;
    items: string[];
  };
  recurringRevenue: {
    title: string;
    subtitle: string;
    description: string;
    maintenance: {
      title: string;
      label: string;
      description: string;
      packages: {
        name: string;
        price: string;
        features: string[];
        sla?: string;
      }[];
    };
    licensing: {
      title: string;
      label: string;
      description: string;
      packages: {
        name: string;
        setupPrice: string;
        monthlyPrice: string;
        features: string[];
        bestFor: string;
      }[];
    };
  };
  recommendations: {
    title: string;
    items: {
      name: string;
      price: string;
      desc: string;
    }[];
  };
  aiAddons: {
    tabLabel: string;
    headline: string;
    eyebrow: string;
    narrative: string;
    impacts: {
      stat: string;
      label: string;
      description: string;
    }[];
    useCases: {
      title: string;
      items: string[];
    };
    pricingNote: string;
    cta: {
      primary: string;
      secondary: string;
    };
  };
  customSoftware: {
    title: string;
    subtitle: string;
    description: string;
    packages: {
      name: string;
      description: string;
      price: string;
      features: string[];
      revisions?: string[];
      bestFor: string;
    }[];
  };
  trackRecord: {
    items: {
      value: string;
      label: string;
    }[];
  };
}


export const pricingData: Record<string, PricingData> = {
  id: {
    hero: {
      title: "Miliki Software Anda\nBangun Aset Digital",
      eyebrow: "PT Griya Innovations Labs",
      subtitle: "Kami membangun ERP, CRM, HRIS, finance system, workflow approval, dan dashboard operasional yang mengikuti proses bisnis perusahaan Anda.",
      cta: "Bangun Aset Digital Anda",
    },
    features: {
      items: [
        {
          title: "Strategic-Driven Development.",
          description: "Kami tidak hanya membuat fitur — kami membangun solusi yang relevan dengan tujuan bisnis Anda."
        },
        {
          title: "Enterprise-Ready Architecture.",
          description: "Teknologi dan struktur aplikasi dirancang untuk performa jangka panjang."
        },
        {
          title: "Reliable Communication.",
          description: "Progress jelas, laporan rutin, dan keputusan cepat di setiap tahap pengembangan."
        },
        {
          title: "No Overpromise — Just Results.",
          description: "Kami bekerja berdasarkan scope dan timeline realistis untuk menghindari revisi berulang."
        }
      ]
    },
    about: {
      title: "Keahlian Boutique. Kemampuan Enterprise. Kemitraan Jangka Panjang.",
      subtitle: "Mitra Teknologi Strategis",
      body: [
        "Kami selektif—kami bekerja dengan klien yang menghargai kontrol infrastruktur dan otonomi strategis.",
        "Tim senior, pengiriman terfokus. Tanpa birokrasi, hanya hasil.",
        "Kami menjadi perpanjangan strategi teknologi Anda, bukan hanya vendor.",
        "Kemitraan strategis jangka panjang dibangun atas kepercayaan dan hasil bersama."
      ]
    },
    process: {
      title: "Kami bergerak cepat\nKami tetap dalam alur",
      subtitle: "Cara Kami Bekerja",
      body: [
        "**Lingkup & Biaya Tetap** <br> Kami mendefinisikan semuanya di awal. Tanpa biaya tersembunyi.",
        "**Eksekusi Terstruktur** <br> Eksekusi terstruktur dengan friksi operasional minimal. Kami menghargai waktu Anda.",
        "**Progres Mingguan** <br> Anda menerima versi yang sudah di-deploy setiap minggu."
      ]
    },
    services: {
      title: "Layanan Kami",
      subtitle: "Kami membangun software custom sesuai kebutuhan bisnis Anda.",
      items: [
        {
          title: "Web Development",
          body: [
            "Website dan aplikasi web modern.",
            "Dari company profile hingga platform full-stack dengan backend dan database.",
            "Cepat, responsive, dan dibangun untuk bertahan lama."
          ],
          tagline: "→ Rp 5.000.000 – 80.000.000+"
        },
        {
          title: "Mobile App Development",
          body: [
            "Aplikasi mobile cross-platform untuk iOS dan Android.",
            "Satu codebase, multiple platform. Cepat, reliable, mudah dirawat.",
            "Dibangun untuk berkembang bersama bisnis Anda."
          ],
          tagline: "→ Rp 20.000.000 – 80.000.000"
        },
        {
          title: "System & Integration",
          body: [
            "Sistem enterprise lengkap dengan multiple modules dan integrasi.",
            "Kami menghubungkan tools, database, dan API Anda menjadi satu sistem yang seamless.",
            "Lebih sedikit pekerjaan manual, lebih banyak otomatisasi."
          ],
          tagline: "→ Rp 150.000.000 – 800.000.000+"
        },
        {
          title: "Maintenance & Support",
          body: [
            "Kami tidak menghilang setelah peluncuran.",
            "Support dan maintenance berkelanjutan untuk menjaga sistem Anda berjalan lancar.",
            "Dari basic maintenance hingga enterprise support dengan SLA."
          ],
          tagline: "→ Rp 2.000.000 – 20.000.000/bulan"
        }
      ]
    },
    energy: {
      title: "Cara Kami Bekerja",
      subtitle: "Dibangun untuk Kesuksesan Jangka Panjang",
      body: [
        "Kami mengukur dua kali, memotong sekali. Akurasi adalah harga mati.",
        "Kami merancang aset digital jangka panjang, bukan hanya membangun fitur. Setiap sistem dirancang untuk transfer, bukan dependensi.",
        "Kami fokus pada hasil strategis dan dampak bisnis yang terukur, bukan hanya pengiriman teknis."
      ]
    },
    trackRecord: {
      items: [
        { value: "12+", label: "Industri Dilayani" }, // Leaving as simple stats for now, user asked for "Multi-industry system experience" but that's long for a stat card. I will map it in component or use short label here.
        // Actually, user said: "Multi-industry system experience", "Systems built for thousands of users", "Enterprise-ready architecture", "100% project completion record"
        // I will put the full text in 'label' and maybe use a symbol or checkmark in 'value' if I change the component.
        // Let's try to stick to the data structure but maybe I should change the component to handle text-heavy stats.
        // For now, I'll put the text the user wanted.
        { value: "Multi-industry", label: "System Experience" },
        { value: "50k+", label: "End Users Supported" },
        { value: "100%", label: "Completion Rate" },
        { value: "Enterprise", label: "Ready Architecture" }
      ]
    },
    ctaSection: {
      title: "Siap Membangun Software Anda?",
      subtitle: [
        "Mari diskusikan project Anda dan bagaimana kami bisa membantu.",
        "Mulai hari ini."
      ],
      button: "Mulai Sekarang"
    },
    packages: [
      {
        title: "Website Development",
        description: "Website modern untuk company profile, landing page, atau marketing site. Fokus pada informasi dan branding bisnis Anda.",
        price: "Rp 5.000.000 – 20.000.000",
        revisions: ["Revisi termasuk dalam development", "Post-launch support tersedia"],
        features: [
          "Modern tech stack (Next.js / Astro)",
          "SEO optimized",
          "Mobile responsive",
          "Fast loading (< 1 detik)",
          "CMS integration (opsional)",
          "Contact form & basic integrations"
        ],
        addons: []
      },
      {
        title: "Mobile App Development",
        description: "Aplikasi mobile cross-platform yang dirancang khusus untuk workflow bisnis Anda.",
        price: "Rp 20.000.000 – 80.000.000",
        revisions: ["Revisi termasuk dalam development", "Post-launch support tersedia"],
        features: [
          "Cross-platform (iOS & Android)",
          "Custom UI/UX design",
          "Backend API integration",
          "Push notifications",
          "Offline capability",
          "App store deployment"
        ],
        addons: []
      },
      {
        title: "Custom Software Development",
        description: "Software custom yang dibuat khusus sesuai kebutuhan unik bisnis Anda.",
        price: "Rp 15.000.000 – 200.000.000+",
        revisions: ["Revisi termasuk dalam development", "Dedicated project manager"],
        features: [
          "Full-stack development",
          "Custom architecture",
          "Database design",
          "API development",
          "Integration dengan sistem existing",
          "Scalable & maintainable code"
        ],
        addons: []
      },
    ],
    revisionSystem: {
      title: "Development Process",
      small: {
        title: "Included in Development",
        items: [
          "Revisi UI/UX selama development",
          "Bug fixes & adjustments",
          "Performance optimization",
          "Responsive design refinement"
        ]
      },
      large: {
        title: "Post-Launch Support",
        items: [
          "Maintenance packages available",
          "Feature updates (separate quote)",
          "Ongoing support & monitoring",
          "Custom development requests"
        ]
      },
      extra: []
    },
    blog: {
      title: "Blog Setup",
      options: [
        {
          name: "Static Blog",
          price: "Rp 300.000 – 800.000"
        },
        {
          name: "Dynamic Blog (SSG/SSR)",
          price: "Rp 500.000 – 1.500.000"
        }
      ],
      addons: [
        "Pagination → +150.000",
        "Kategori/tag → +200.000",
        "Panel admin sederhana → +800.000 – 2.000.000"
      ]
    },
    store: {
      title: "Tambahan Halaman Toko",
      options: [
        {
          name: "Katalog Produk (tanpa checkout)",
          price: "Rp 800.000 – 1.500.000"
        },
        {
          name: "Mini Ecommerce",
          details: ["Cart + checkout", "CMS / database"],
          price: "Rp 3.000.000 – 8.000.000"
        }
      ]
    },
    erpCrm: {
      title: "Enterprise System Development",
      description: "Sistem enterprise lengkap dengan multiple modules dan integrasi kompleks. Dikembangkan melalui konsultasi mendalam untuk memahami kebutuhan bisnis Anda.",
      cta: {
        title: "By Consultation Only",
        subtitle: "Typical budget: Rp 150.000.000 – 1.500.000.000",
        timeline: "Timeline: 3–12 bulan",
        description: "Hubungi kami untuk proposal custom sesuai kebutuhan bisnis Anda.",
        button: "Request Proposal"
      },
      crm: {
        title: "CRM & Sales Management System",
        description: "Sistem untuk mengelola customer, sales pipeline, dan workflow tim.",
        packages: []
      },
      erp: {
        title: "ERP & Business Management System",
        description: "Sistem manajemen bisnis terintegrasi dengan multiple modules.",
        modules: [],
        fullPackage: "Enterprise solutions dikembangkan melalui discovery phase & custom proposal",
        revisions: []
      }
    },
    maintenance: {
      title: "Maintenance & Support",
      items: [
        "Basic maintenance → Rp 150.000/bulan",
        "Maintenance + upload konten → Rp 250.000 – 400.000/bulan",
        "SLA 24 jam support → Rp 500.000 – 1.000.000/bulan"
      ]
    },
    recommendations: {
      title: "Rekomendasi Paket Paling Laku",
      items: [
        {
          name: "Starter Package – Astro Basic",
          price: "Rp 2 juta-an",
          desc: "Untuk company profile biasa."
        },
        {
          name: "Business Package – Astro Profesional",
          price: "Rp 3,5 juta-an",
          desc: "Dengan animasi & visual premium."
        },
        {
          name: "Premium Package – Next.js Scale Ready",
          price: "Rp 7–12 juta",
          desc: "Untuk perusahaan besar."
        },
        {
          name: "CRM Starter Package",
          price: "Rp 15–25 juta",
          desc: ""
        }
      ]
    },
    aiAddons: {
      tabLabel: "Otomatisasi Cerdas",
      headline: "Bagaimana jika operasional Anda berjalan tanpa follow-up manual?",
      eyebrow: "Lapisan Kecerdasan",
      narrative: "Kami membantu tim menghilangkan tugas berulang dengan mengotomatisasi persetujuan, pelaporan, dan sinkronisasi data antar sistem. Dari routing lead dan invoicing hingga pemeriksaan compliance dan notifikasi — otomatisasi kami menyesuaikan dengan cara kerja tim Anda, bukan sebaliknya.",
      impacts: [
        { stat: "60%", label: "Pengurangan operasi manual", description: "Otomatisasi tugas berulang dan bebaskan tim Anda" },
        { stat: "Nol", label: "Kesalahan manusia dalam workflow", description: "Minimalisir kesalahan dalam proses persetujuan & pelaporan" },
        { stat: "Semua", label: "Integrasi sistem", description: "Hubungkan ERP, CRM, tools internal, dan API pihak ketiga" },
        { stat: "∞", label: "Otomatisasi yang scalable", description: "Otomatisasi yang tumbuh bersama bisnis Anda" }
      ],
      useCases: {
        title: "Apa yang bisa diotomatisasi?",
        items: ["Routing & scoring lead", "Pembuatan invoice", "Workflow persetujuan", "Pemeriksaan compliance", "Penjadwalan laporan", "Sinkronisasi data", "Sistem notifikasi", "Update pipeline"]
      },
      pricingNote: "Harga ditentukan setelah memahami kebutuhan workflow dan integrasi Anda.",
      cta: {
        primary: "Jelajahi Peluang Otomasi",
        secondary: "Konsultasi gratis untuk mengidentifikasi use case otomasi"
      }
    },
    customSoftware: {
      title: "Custom Software Development",
      subtitle: "Solusi Software yang Dibuat Khusus untuk Bisnis Anda",
      description: "Kami membangun software custom yang disesuaikan dengan kebutuhan unik bisnis Anda. Dari aplikasi web hingga mobile, dari sistem manajemen hingga integrasi kompleks — semua dibuat khusus untuk Anda.",
      packages: [
        {
          name: "Custom Software Development",
          description: "Aplikasi web & mobile yang disesuaikan dengan proses bisnis Anda. Untuk bisnis yang berkembang, sistem internal, atau tools operasional.",
          price: "Rp 20.000.000 – 120.000.000",
          bestFor: "Bisnis yang berkembang, sistem internal, MVP & tools operasional",
          features: [
            "Web & Mobile applications",
            "Tailored to your business processes",
            "Internal systems & dashboards",
            "MVP development",
            "Operational tools",
            "Custom integrations",
            "Dedicated project manager"
          ],
          revisions: ["Revisi termasuk dalam development", "Post-launch support tersedia"]
        },
        {
          name: "Enterprise Software Solution",
          description: "Sistem enterprise lengkap dengan multiple modules dan integrasi kompleks.",
          price: "Rp 150.000.000 – 800.000.000+",
          bestFor: "Perusahaan besar yang butuh sistem terintegrasi dan scalable",
          features: [
            "Multiple modules & features",
            "Complex integrations",
            "Scalable architecture",
            "Advanced security & compliance",
            "Custom reporting & analytics",
            "Team collaboration tools",
            "Dedicated project manager",
            "SLA guarantee",
            "Security audit & certification",
            "Training & documentation"
          ],
          revisions: ["Unlimited revisi kecil selama development", "10x revisi besar"]
        }
      ]
    },
    recurringRevenue: {
      title: "Recurring Revenue Solutions",
      subtitle: "Revenue Berkelanjutan untuk Bisnis yang Stabil",
      description: "Bangun revenue yang stabil dan berkelanjutan dengan paket maintenance dan licensing. Anda membayar untuk mengurangi risiko, bukan untuk menambah fitur.",
      maintenance: {
        title: "Maintenance & Support Plans",
        label: "Maintenance & Support",
        description: "Jaminan aplikasi Anda selalu berjalan optimal dengan support berkelanjutan.",
        packages: [
          {
            name: "Basic Maintenance",
            price: "Rp 2.000.000/bulan",
            features: [
              "Bug fixes & security updates",
              "Server monitoring",
              "Email support (5 hari kerja)",
              "Update minor (bulanan)"
            ],
            sla: "Response time: 48 jam"
          },
          {
            name: "Pro Maintenance",
            price: "Rp 5.000.000/bulan",
            features: [
              "Semua fitur Basic",
              "Performance optimization",
              "Feature updates kecil",
              "Priority support (24/7)",
              "Monthly health check",
              "Uptime monitoring & alerts"
            ],
            sla: "Response time: 4 jam"
          },
          {
            name: "Enterprise Maintenance",
            price: "Rp 10.000.000 – 20.000.000/bulan",
            features: [
              "Semua fitur Pro",
              "Dedicated support team",
              "Custom feature development",
              "SLA guarantee (99.9% uptime)",
              "Quarterly strategy review",
              "Security audit & compliance",
              "On-site support (opsional)"
            ],
            sla: "Response time: 1 jam, 99.9% uptime SLA"
          }
        ]
      },
      licensing: {
        title: "Software Licensing (White-label)",
        label: "Licensing Plans",
        description: "Akses ke sistem base + customization. Bayar sekali untuk setup, lalu monthly license untuk akses berkelanjutan.",
        packages: [
          {
            name: "CRM Base License",
            setupPrice: "Rp 50.000.000",
            monthlyPrice: "Rp 3.000.000 – 5.000.000/bulan",
            bestFor: "Perusahaan yang butuh CRM dengan customization terbatas",
            features: [
              "Base CRM system (ready-to-use)",
              "Custom branding & logo",
              "Basic customization (5 modul)",
              "User management (hingga 50 users)",
              "Monthly updates & bug fixes",
              "Email support"
            ]
          },
          {
            name: "Enterprise License",
            setupPrice: "Rp 100.000.000 – 200.000.000",
            monthlyPrice: "Rp 10.000.000 – 20.000.000/bulan",
            bestFor: "Perusahaan besar yang butuh sistem lengkap dengan customization penuh",
            features: [
              "Full system access (CRM + ERP modules)",
              "Unlimited customization",
              "Unlimited users",
              "Priority development queue",
              "Dedicated account manager",
              "Custom integrations",
              "White-label support",
              "Source code access (opsional)"
            ]
          }
        ]
      }
    }
  },
  en: {
    hero: {
      title: "Own the System\nOwn the Advantage",
      eyebrow: "PT Griya Innovations Labs",
      subtitle: "We build ERP, CRM, HRIS, finance systems, approval workflows, and operational dashboards tailored to your company's internal processes.",
      cta: "Build Your Digital Asset",
    },
    features: {
      items: [
        {
          title: "Strategic-Driven Development.",
          description: "We don't just build features — we build solutions that align with your business goals."
        },
        {
          title: "Enterprise-Ready Architecture.",
          description: "Technology and application structure designed for long-term performance."
        },
        {
          title: "Reliable Communication.",
          description: "Clear progress, regular reports, and quick decisions at every development stage."
        },
        {
          title: "No Overpromise — Just Results.",
          description: "We work based on realistic scope and timeline to avoid repeated revisions."
        }
      ]
    },
    about: {
      title: "Boutique Expertise. Enterprise Capability. Long-Term Partnerships.",
      subtitle: "Strategic Technology Partners",
      body: [
        "We're selective—we work with clients who value infrastructure control and strategic autonomy.",
        "Senior team, focused delivery. No bureaucracy, just results.",
        "We become an extension of your technology strategy, not just a vendor.",
        "Long-term strategic partnerships built on trust and shared outcomes."
      ]
    },
    process: {
      title: "We move quick\nWe stay in flow",
      subtitle: "How We Work",
      body: [
        "**Fixed Scope & Cost** <br> We define everything upfront. No hidden fees, no surprise billings.",
        "**Structured Execution** <br> Structured execution with minimal operational friction. We respect your time.",
        "**Weekly Progress** <br> You get a deployed version every week. You see the progress, you feel the speed."
      ]
    },
    services: {
      title: "Our Services",
      subtitle: "We build custom software for your business needs.",
      items: [
        {
          title: "Web Development",
          body: [
            "Modern websites and web applications.",
            "From company profile to full-stack platforms with backend and database.",
            "Fast, responsive, and built to last."
          ],
          tagline: "→ IDR 5,000,000 – 80,000,000+"
        },
        {
          title: "Mobile App Development",
          body: [
            "Cross-platform mobile applications for iOS and Android.",
            "One codebase, multiple platforms. Fast, reliable, easy to maintain.",
            "Built to scale with your business."
          ],
          tagline: "→ IDR 20,000,000 – 80,000,000"
        },
        {
          title: "System & Integration",
          body: [
            "Complete enterprise systems with multiple modules and integrations.",
            "We connect your tools, databases, and APIs into one seamless system.",
            "Less manual work, more automation."
          ],
          tagline: "→ IDR 150,000,000 – 800,000,000+"
        },
        {
          title: "Maintenance & Support",
          body: [
            "We don't disappear after launch.",
            "Ongoing support and maintenance to keep your system running smoothly.",
            "From basic maintenance to enterprise support with SLA."
          ],
          tagline: "→ IDR 2,000,000 – 20,000,000/month"
        }
      ]
    },
    energy: {
      title: "How We Work",
      subtitle: "Built for Long-Term Success",
      body: [
        "We measure twice, cut once. Accuracy is non-negotiable.",
        "We architect long-term digital assets, not just build features. Every system is designed for transfer, not dependency.",
        "We focus on strategic outcomes and measurable business impact, not just technical delivery."
      ]
    },
    trackRecord: {
      items: [
        { value: "Multi-industry", label: "System Experience" },
        { value: "Thousands", label: "Of Users Supported" },
        { value: "100%", label: "Completion Record" },
        { value: "Enterprise", label: "Ready Architecture" }
      ]
    },
    ctaSection: {
      title: "Ready to Build Your Software?",
      subtitle: [
        "Let's talk about your project and how we can help.",
        "Get started today."
      ],
      button: "Get Started"
    },
    packages: [
      {
        title: "Website Development",
        description: "Modern websites for company profile, landing page, or marketing site. Focus on information and business branding.",
        price: "IDR 5,000,000 – 20,000,000",
        revisions: ["Revisions included in development", "Post-launch support available"],
        features: [
          "Modern tech stack (Next.js / Astro)",
          "SEO optimized",
          "Mobile responsive",
          "Fast loading (< 1 second)",
          "CMS integration (optional)",
          "Contact form & basic integrations"
        ],
        addons: []
      },
      {
        title: "Mobile App Development",
        description: "Cross-platform mobile applications designed specifically for your business workflow.",
        price: "IDR 20,000,000 – 80,000,000",
        revisions: ["Revisions included in development", "Post-launch support available"],
        features: [
          "Cross-platform (iOS & Android)",
          "Custom UI/UX design",
          "Backend API integration",
          "Push notifications",
          "Offline capability",
          "App store deployment"
        ],
        addons: []
      },
      {
        title: "Custom Software Development",
        description: "Custom software built specifically according to your unique business needs.",
        price: "IDR 15,000,000 – 200,000,000+",
        revisions: ["Revisions included in development", "Dedicated project manager"],
        features: [
          "Full-stack development",
          "Custom architecture",
          "Database design",
          "API development",
          "Integration with existing systems",
          "Scalable & maintainable code"
        ],
        addons: []
      },
    ],
    revisionSystem: {
      title: "Development Process",
      small: {
        title: "Included in Development",
        items: [
          "UI/UX revisions during development",
          "Bug fixes & adjustments",
          "Performance optimization",
          "Responsive design refinement"
        ]
      },
      large: {
        title: "Post-Launch Support",
        items: [
          "Maintenance packages available",
          "Feature updates (separate quote)",
          "Ongoing support & monitoring",
          "Custom development requests"
        ]
      },
      extra: []
    },
    blog: {
      title: "Blog Setup",
      options: [
        {
          name: "Static Blog",
          price: "IDR 300,000 – 800,000"
        },
        {
          name: "Dynamic Blog (SSG/SSR)",
          price: "IDR 500,000 – 1,500,000"
        }
      ],
      addons: [
        "Pagination → +150,000",
        "Category/tag → +200,000",
        "Simple admin panel → +800,000 – 2,000,000"
      ]
    },
    store: {
      title: "Store Add-ons",
      options: [
        {
          name: "Product Catalog (no checkout)",
          price: "IDR 800,000 – 1,500,000"
        },
        {
          name: "Mini Ecommerce",
          details: ["Cart + checkout", "CMS / database"],
          price: "IDR 3,000,000 – 8,000,000"
        }
      ]
    },
    erpCrm: {
      title: "Enterprise System Development",
      description: "Complete enterprise systems with multiple modules and complex integrations. Developed through in-depth consultation to understand your business needs.",
      cta: {
        title: "By Consultation Only",
        subtitle: "Typical budget: IDR 150,000,000 – 1,500,000,000",
        timeline: "Timeline: 3–12 months",
        description: "Contact us for a custom proposal tailored to your business needs.",
        button: "Request Proposal"
      },
      crm: {
        title: "CRM & Sales Management System",
        description: "Systems for managing customers, sales pipeline, and team workflow.",
        packages: []
      },
      erp: {
        title: "ERP & Business Management System",
        description: "Integrated business management systems with multiple modules.",
        modules: [],
        fullPackage: "Enterprise solutions developed through discovery phase & custom proposal",
        revisions: []
      }
    },
    maintenance: {
      title: "Maintenance & Support",
      items: [
        "Basic maintenance → IDR 150,000/month",
        "Maintenance + content upload → IDR 250,000 – 400,000/month",
        "SLA 24-hour support → IDR 500,000 – 1,000,000/month"
      ]
    },
    recommendations: {
      title: "Recommended Best Sellers",
      items: [
        {
          name: "Starter Package – Astro Basic",
          price: "~IDR 2 million",
          desc: "For standard company profiles."
        },
        {
          name: "Business Package – Astro Professional",
          price: "~IDR 3.5 million",
          desc: "With premium animation & visuals."
        },
        {
          name: "Premium Package – Next.js Scale Ready",
          price: "IDR 7–12 million",
          desc: "For large companies."
        },
        {
          name: "CRM Starter Package",
          price: "IDR 15–25 million",
          desc: ""
        }
      ]
    },
    aiAddons: {
      tabLabel: "Smart Automation",
      headline: "What if your operations run without manual follow-ups?",
      eyebrow: "Intelligence Layer",
      narrative: "We help teams eliminate repetitive tasks by automating approvals, reporting, and data synchronization across systems. From lead routing and invoicing to compliance checks and notifications — our automation adapts to how your team works, not the other way around.",
      impacts: [
        { stat: "60%", label: "Reduction in manual operations", description: "Automate repetitive tasks and free up your team" },
        { stat: "Zero", label: "Human errors in workflows", description: "Minimize mistakes in approval & reporting processes" },
        { stat: "Any", label: "System integration", description: "Connect ERP, CRM, internal tools, and third-party APIs" },
        { stat: "∞", label: "Scalable automation", description: "Automation that grows with your business" }
      ],
      useCases: {
        title: "What can be automated?",
        items: ["Lead routing & scoring", "Invoice generation", "Approval workflows", "Compliance checks", "Report scheduling", "Data synchronization", "Notification systems", "Pipeline updates"]
      },
      pricingNote: "Pricing is determined after understanding your workflow and integration needs.",
      cta: {
        primary: "Explore Automation Opportunities",
        secondary: "Free consultation to identify automation use cases"
      }
    },
    customSoftware: {
      title: "Custom Software Development",
      subtitle: "Tailored Software Solutions Built for Your Business",
      description: "We build custom software tailored to your unique business needs. From web to mobile applications, from management systems to complex integrations — all built specifically for you.",
      packages: [
        {
          name: "Custom Software Development",
          description: "Web & Mobile applications tailored to your business processes. For growing businesses, internal systems, or operational tools.",
          price: "IDR 20,000,000 – 120,000,000",
          bestFor: "Growing businesses, internal systems, MVP & operational tools",
          features: [
            "Web & Mobile applications",
            "Tailored to your business processes",
            "Internal systems & dashboards",
            "MVP development",
            "Operational tools",
            "Custom integrations",
            "Dedicated project manager"
          ],
          revisions: ["Revisions included in development", "Post-launch support available"]
        },
        {
          name: "Enterprise Software Solution",
          description: "Complete enterprise system with multiple modules and complex integrations.",
          price: "IDR 150,000,000 – 800,000,000+",
          bestFor: "Large companies needing integrated and scalable systems",
          features: [
            "Multiple modules & features",
            "Complex integrations",
            "Scalable architecture",
            "Advanced security & compliance",
            "Custom reporting & analytics",
            "Team collaboration tools",
            "Dedicated project manager",
            "SLA guarantee",
            "Security audit & certification",
            "Training & documentation"
          ],
          revisions: ["Unlimited small revisions during development", "10x major revisions"]
        }
      ]
    },
    recurringRevenue: {
      title: "Recurring Revenue Solutions",
      subtitle: "Sustainable Revenue for Stable Business",
      description: "Build stable and sustainable revenue with maintenance and licensing packages. You pay to reduce risk, not to add features.",
      maintenance: {
        title: "Maintenance & Support Plans",
        label: "Maintenance & Support",
        description: "Ensure your application always runs optimally with ongoing support.",
        packages: [
          {
            name: "Basic Maintenance",
            price: "IDR 2,000,000/month",
            features: [
              "Bug fixes & security updates",
              "Server monitoring",
              "Email support (5 business days)",
              "Minor updates (monthly)"
            ],
            sla: "Response time: 48 hours"
          },
          {
            name: "Pro Maintenance",
            price: "IDR 5,000,000/month",
            features: [
              "All Basic features",
              "Performance optimization",
              "Small feature updates",
              "Priority support (24/7)",
              "Monthly health check",
              "Uptime monitoring & alerts"
            ],
            sla: "Response time: 4 hours"
          },
          {
            name: "Enterprise Maintenance",
            price: "IDR 10,000,000 – 20,000,000/month",
            features: [
              "All Pro features",
              "Dedicated support team",
              "Custom feature development",
              "SLA guarantee (99.9% uptime)",
              "Quarterly strategy review",
              "Security audit & compliance",
              "On-site support (optional)"
            ],
            sla: "Response time: 1 hour, 99.9% uptime SLA"
          }
        ]
      },
      licensing: {
        title: "Software Licensing (White-label)",
        label: "Licensing Plans",
        description: "Access to base system + customization. Pay once for setup, then monthly license for ongoing access.",
        packages: [
          {
            name: "CRM Base License",
            setupPrice: "IDR 50,000,000",
            monthlyPrice: "IDR 3,000,000 – 5,000,000/month",
            bestFor: "Companies needing CRM with limited customization",
            features: [
              "Base CRM system (ready-to-use)",
              "Custom branding & logo",
              "Basic customization (5 modules)",
              "User management (up to 50 users)",
              "Monthly updates & bug fixes",
              "Email support"
            ]
          },
          {
            name: "Enterprise License",
            setupPrice: "IDR 100,000,000 – 200,000,000",
            monthlyPrice: "IDR 10,000,000 – 20,000,000/month",
            bestFor: "Large companies needing complete system with full customization",
            features: [
              "Full system access (CRM + ERP modules)",
              "Unlimited customization",
              "Unlimited users",
              "Priority development queue",
              "Dedicated account manager",
              "Custom integrations",
              "White-label support",
              "Source code access (optional)"
            ]
          }
        ]
      }
    }
  }
};
