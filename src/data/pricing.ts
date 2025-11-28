
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
    subtitle: string[];
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
  recommendations: {
    title: string;
    items: {
      name: string;
      price: string;
      desc: string;
    }[];
  };
}

export const pricingData: Record<string, PricingData> = {
  id: {
    hero: {
      title: "Kami Cepat. Dan Kami Bangun Hal yang Bertahan Lama.",
      subtitle: [
        "Kami tidak punya pengalaman puluhan tahun.",
        "Yang kami punya adalah kecepatan, kerja tim, dan energi yang baik.",
        "Kami coding cepat — dan kami peduli dengan apa yang kami kirim."
      ],
      cta: "Mari Bangun Sesuatu",
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
      title: "Kami bukan perusahaan besar.",
      subtitle: "Kami tim kecil yang suka membangun sesuatu.",
      body: [
        "Kami mulai karena kami suka membuat hal-hal bekerja — dan membuatnya cepat.",
        "Kami tidak bersembunyi di balik kata-kata manis atau profesionalisme palsu.",
        "Hanya orang-orang nyata, memecahkan masalah nyata, dengan kode dan kopi."
      ]
    },
    process: {
      title: "Kami bergerak cepat. Kami tetap dalam alur.",
      subtitle: "Cara Kami Bekerja",
      body: [
        "Tidak ada rapat panjang. Tidak ada penantian tanpa akhir.",
        "Hanya fokus, suasana yang baik, dan menyelesaikan pekerjaan.",
        "Ketika ide muncul, kami membangun. Ketika kami mengirim, kami bergerak maju."
      ]
    },
    services: {
      title: "Apa yang Kami Lakukan — dan Kami Lakukan dengan Cepat.",
      subtitle: "Kami membangun produk digital yang benar-benar berfungsi. Tanpa basa-basi, tanpa proses berbelit — hanya fokus, kecepatan, dan peduli pada kualitas.",
      items: [
        {
          title: "Web Development",
          body: [
            "Website yang bergerak cepat dan terasa pas.",
            "Dari landing page hingga platform full-stack, kami membangun pengalaman web yang bersih, cepat, dan mudah digunakan.",
            "Baik itu situs pertama Anda atau dashboard yang kompleks, kami memastikan semuanya berjalan lancar dan terlihat solid di setiap layar."
          ],
          tagline: "→ Frontend, Backend, API — semua ditangani dengan alur yang sama."
        },
        {
          title: "Mobile Development",
          body: [
            "Aplikasi yang mengikuti pengguna Anda ke mana saja.",
            "Kami membuat aplikasi lintas platform yang terasa alami dan cepat dibangun.",
            "Dirancang untuk berkinerja baik, mudah diperbarui, dan tumbuh bersama produk Anda.",
            "Flutter adalah senjata utama kami, kecepatan adalah kebiasaan kami."
          ],
          tagline: "→ Satu basis kode. Lancar di mana saja."
        },
        {
          title: "UI / UX Design",
          body: [
            "Sederhana, indah, dan dibuat untuk manusia.",
            "Kami tidak mendesain berlebihan — kami mendesain apa yang penting.",
            "Antarmuka yang membantu orang melakukan hal-hal dengan mudah, tanpa berpikir terlalu keras.",
            "Setiap piksel memiliki alasan, dan setiap alur terasa alami."
          ],
          tagline: "→ Cepat digunakan. Mudah dicintai."
        },
        {
          title: "System & Integration",
          body: [
            "Hal-hal yang saling berbicara.",
            "Kami menghubungkan alat, database, dan API Anda sehingga semuanya berjalan bersama seperti satu sistem.",
            "Lebih sedikit pekerjaan manual, lebih sedikit menunggu, lebih banyak otomatisasi."
          ],
          tagline: "→ Bangun sekali. Terhubung selamanya."
        },
        {
          title: "Maintenance & Scaling",
          body: [
            "Kami tidak menghilang setelah peluncuran.",
            "Butuh pembaruan? Perbaikan? Desain ulang?",
            "Kami tetap ada untuk menjaga semuanya berjalan cepat dan aman — sama seperti saat kami membangunnya.",
            "Anggap kami sebagai kru pit teknologi Anda."
          ],
          tagline: "→ Jaga produk Anda tetap hidup dan cepat."
        }
      ]
    },
    energy: {
      title: "Vibe dulu. Code kemudian.",
      subtitle: "Energi Kami",
      body: [
        "Kami percaya pekerjaan hebat datang dari energi yang baik.",
        "Proyek kami tumbuh dari rasa ingin tahu, candaan, debugging larut malam, dan playlist bersama.",
        "Kami serius tentang hasil, bukan tentang berpura-pura menjadi korporat."
      ]
    },
    ctaSection: {
      title: "Ingin membangun sesuatu dengan cepat bersama kami?",
      subtitle: [
        "Kirim pesan pada kami. Ceritakan ide Anda.",
        "Kita lihat seberapa jauh kita bisa membawanya — bersama."
      ],
      button: "Mari Bicara"
    },
    packages: [
      {
        title: "Paket Basic (Astro – Static)",
        description: "Cocok untuk klien yang hanya butuh website cepat & informatif.",
        price: "Rp 1.200.000 – 2.500.000",
        revisions: ["2x revisi kecil", "1x revisi besar"],
        features: [
          "3–5 halaman",
          "SEO dasar",
          "Mobile responsive",
          "Loading < 1 detik"
        ],
        addons: [
          "Halaman tambahan → Rp 150.000 – 300.000",
          "Animasi icon (Lottie) → +150.000 / animasi",
          "Parallax ringan → +200.000 – 400.000"
        ]
      },
      {
        title: "Paket Profesional (Astro – Semi Dynamic + Animations)",
        description: "Situs cepat tapi lebih modern & interaktif.",
        price: "Rp 3.000.000 – 4.500.000",
        revisions: ["4x revisi kecil", "2x revisi besar"],
        features: [
          "5–8 halaman",
          "Animasi halus (Framer Motion / parallax)",
          "Slider, gallery interaktif",
          "SEO advanced",
          "Performance 95–100"
        ],
        addons: [
          "Three.js hero → 700.000 – 1.500.000",
          "Parallax complex → +300.000 – 600.000",
          "Halaman tambahan → Rp 200.000 – 300.000"
        ]
      },
      {
        title: "Paket Premium (Next.js – Scale Ready)",
        description: "Untuk bisnis yang ingin website sekaligus fondasi aplikasi.",
        price: "Rp 6.000.000 – 12.000.000",
        revisions: ["6x revisi kecil", "3x revisi besar"],
        features: [
          "SSR/SSG",
          "API routes",
          "Integrasi database (opsional)",
          "Animasi Framer Motion",
          "5–10 halaman"
        ],
        addons: [
          "Dashboard mini → 2.000.000 – 5.000.000",
          "Integrasi database → 1.000.000 – 3.000.000",
          "Three.js → +1.000.000+",
          "Halaman SSR tambahan → 300.000 – 600.000"
        ]
      }
    ],
    revisionSystem: {
      title: "Sistem Revisi — Berlaku Untuk Semua Paket",
      small: {
        title: "Revisi Kecil (UI minor)",
        items: [
          "Ganti warna",
          "Ganti teks",
          "Perbaikan layout kecil",
          "Ubah icon / gambar",
          "(Estimasi pengerjaan: ≤ 15 menit per item)"
        ]
      },
      large: {
        title: "Revisi Besar (Perubahan struktural)",
        items: [
          "Ubah layout keseluruhan",
          "Ubah desain hero section",
          "Tambah fitur kecil (tanpa coding backend)",
          "Redesign halaman"
        ]
      },
      extra: [
        "Revisi kecil tambahan → Rp 30.000 – 50.000",
        "Revisi besar tambahan → Rp 150.000 – 300.000"
      ]
    },
    blog: {
      title: "Blog Setup",
      options: [
        {
          name: "Astro (Static Blog)",
          price: "Rp 300.000 – 800.000"
        },
        {
          name: "Next.js Blog (SSG/SSR)",
          price: "Rp 500.000 – 1.500.000"
        }
      ],
      addons: [
        "Pagination → +150.000",
        "Kategori/tag → +200.000",
        "Panel admin sederhana (Next.js) → +800.000 – 2.000.000"
      ]
    },
    store: {
      title: "Tambahan Halaman Toko",
      options: [
        {
          name: "Astro — Katalog Produk (tanpa checkout)",
          price: "Rp 800.000 – 1.500.000"
        },
        {
          name: "Next.js — Mini Ecommerce",
          details: ["Cart + checkout", "CMS / database"],
          price: "Rp 3.000.000 – 8.000.000"
        }
      ]
    },
    erpCrm: {
      title: "Paket ERP & CRM — Full Web App",
      description: "Ini biasanya proyek besar — harga menyesuaikan kompleksitas.",
      crm: {
        title: "CRM (Customer Relationship Management)",
        description: "Untuk bisnis yang ingin mengelola customer, sales, dan follow up.",
        packages: [
          {
            name: "Paket CRM Basic",
            features: [
              "Manajemen customer",
              "Pipeline leads",
              "Activity log",
              "Sales dashboard",
              "Export Excel"
            ],
            price: "Rp 10.000.000 – 25.000.000",
            revisions: ["8x revisi kecil", "4x revisi besar"]
          },
          {
            name: "Paket CRM Pro",
            features: [
              "Team management",
              "Permissions & roles",
              "Email automation (SMTP)",
              "Integrasi API WhatsApp",
              "Report builder",
              "Integrasi Next.js + Supabase/Prisma"
            ],
            price: "Rp 25.000.000 – 60.000.000"
          }
        ]
      },
      erp: {
        title: "ERP (Enterprise Resource Planning)",
        description: "ERP itu jauh lebih kompleks — modul per modul.",
        modules: [
          "Modul Inventory → Rp 8.000.000 – 15.000.000",
          "Modul Purchasing → Rp 6.000.000 – 12.000.000",
          "Modul Invoicing & Finance → Rp 10.000.000 – 20.000.000",
          "Modul HR & Absensi → Rp 12.000.000 – 25.000.000",
          "Modul Production → Rp 15.000.000 – 30.000.000",
          "Modul CRM-terintegrasi → Rp 15.000.000 – 30.000.000"
        ],
        fullPackage: "ERP Full Package (6–12 modul): Rp 80.000.000 – 250.000.000",
        revisions: [
          "Revisi kecil → gratis selama development",
          "Revisi besar → 3x (sisanya bayar per request)",
          "Change request tambahan → Rp 300.000 – 1.000.000 per item"
        ]
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
    }
  },
  en: {
    hero: {
      title: "We’re Fast. And We Build Things That Last.",
      subtitle: [
        "We don’t have decades of experience.",
        "What we have is speed, teamwork, and good energy.",
        "We code fast — and we care about what we ship."
      ],
      cta: "Let's Build Something",
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
      title: "We're not a big company.",
      subtitle: "We’re a small team that loves building stuff.",
      body: [
        "We started because we like making things work — and making them fast.",
        "We don’t hide behind buzzwords or fake professionalism.",
        "Just real people, solving real problems, with code and coffee."
      ]
    },
    process: {
      title: "We move quick. We stay in flow.",
      subtitle: "How We Work",
      body: [
        "No long meetings. No endless waiting.",
        "Just focus, good vibe, and getting things done.",
        "When an idea clicks, we build. When we ship, we move on."
      ]
    },
    services: {
      title: "What We Do — and What We Do Fast.",
      subtitle: "We build digital products that actually work. No buzzwords, no endless process — just focus, speed, and care for quality.",
      items: [
        {
          title: "Web Development",
          body: [
            "Websites that move fast and feel right.",
            "From landing pages to full-stack platforms, we build web experiences that are clean, fast, and easy to use.",
            "Whether it’s your first site or a complex dashboard, we make sure it runs smooth and looks solid on every screen."
          ],
          tagline: "→ Frontend, Backend, APIs — all handled by the same flow."
        },
        {
          title: "Mobile Development",
          body: [
            "Apps that follow your users anywhere.",
            "We craft cross-platform apps that feel natural and quick to build.",
            "Designed to perform well, update easily, and grow with your product.",
            "Flutter is our main weapon, speed is our habit."
          ],
          tagline: "→ One codebase. Smooth everywhere."
        },
        {
          title: "UI / UX Design",
          body: [
            "Simple, beautiful, and made for humans.",
            "We don’t overdesign — we design what matters.",
            "Interfaces that help people do things easily, without thinking too hard.",
            "Every pixel has a reason, and every flow feels natural."
          ],
          tagline: "→ Fast to use. Easy to love."
        },
        {
          title: "System & Integration",
          body: [
            "Things that talk to each other.",
            "We connect your tools, databases, and APIs so everything runs together like a single system.",
            "Less manual work, less waiting, more automation."
          ],
          tagline: "→ Build once. Connect forever."
        },
        {
          title: "Maintenance & Scaling",
          body: [
            "We don’t disappear after launch.",
            "Need updates? Fixes? A redesign?",
            "We stay around to keep things running fast and safe — just like when we built it.",
            "Think of us as your tech pit-crew."
          ],
          tagline: "→ Keep your product alive and fast."
        }
      ]
    },
    energy: {
      title: "Vibe first. Code second.",
      subtitle: "Our Energy",
      body: [
        "We believe great work comes from good energy.",
        "Our projects grow from curiosity, jokes, late-night debugging, and shared playlists.",
        "We’re serious about results, not about pretending to be corporate."
      ]
    },
    ctaSection: {
      title: "Wanna build something fast with us?",
      subtitle: [
        "Drop us a message. Tell us your idea.",
        "We’ll see how far we can take it — together."
      ],
      button: "Let's Talk"
    },
    packages: [
      {
        title: "Basic Package (Astro – Static)",
        description: "Suitable for clients who need a fast & informative website.",
        price: "IDR 1,200,000 – 2,500,000",
        revisions: ["2x small revisions", "1x major revision"],
        features: [
          "3–5 pages",
          "Basic SEO",
          "Mobile responsive",
          "Loading < 1 second"
        ],
        addons: [
          "Additional page → IDR 150,000 – 300,000",
          "Icon animation (Lottie) → +150,000 / animation",
          "Light Parallax → +200,000 – 400,000"
        ]
      },
      {
        title: "Professional Package (Astro – Semi Dynamic + Animations)",
        description: "Fast site but more modern & interactive.",
        price: "IDR 3,000,000 – 4,500,000",
        revisions: ["4x small revisions", "2x major revisions"],
        features: [
          "5–8 pages",
          "Smooth animation (Framer Motion / parallax)",
          "Slider, interactive gallery",
          "Advanced SEO",
          "Performance 95–100"
        ],
        addons: [
          "Three.js hero → 700,000 – 1,500,000",
          "Complex Parallax → +300,000 – 600.000",
          "Additional page → IDR 200,000 – 300,000"
        ]
      },
      {
        title: "Premium Package (Next.js – Scale Ready)",
        description: "For businesses wanting a website and application foundation.",
        price: "IDR 6,000,000 – 12,000,000",
        revisions: ["6x small revisions", "3x major revisions"],
        features: [
          "SSR/SSG",
          "API routes",
          "Database integration (optional)",
          "Framer Motion animation",
          "5–10 pages"
        ],
        addons: [
          "Mini Dashboard → 2,000,000 – 5,000,000",
          "Database integration → 1,000,000 – 3,000,000",
          "Three.js → +1,000,000+",
          "Additional SSR page → 300,000 – 600,000"
        ]
      }
    ],
    revisionSystem: {
      title: "Revision System — Applies to All Packages",
      small: {
        title: "Small Revision (Minor UI)",
        items: [
          "Change color",
          "Change text",
          "Minor layout fix",
          "Change icon / image",
          "(Est. time: ≤ 15 mins per item)"
        ]
      },
      large: {
        title: "Major Revision (Structural Change)",
        items: [
          "Change overall layout",
          "Change hero section design",
          "Add small feature (no backend coding)",
          "Redesign page"
        ]
      },
      extra: [
        "Extra small revision → IDR 30,000 – 50,000",
        "Extra major revision → IDR 150,000 – 300,000"
      ]
    },
    blog: {
      title: "Blog Setup",
      options: [
        {
          name: "Astro (Static Blog)",
          price: "IDR 300,000 – 800,000"
        },
        {
          name: "Next.js Blog (SSG/SSR)",
          price: "IDR 500,000 – 1,500,000"
        }
      ],
      addons: [
        "Pagination → +150,000",
        "Category/tag → +200,000",
        "Simple admin panel (Next.js) → +800,000 – 2,000,000"
      ]
    },
    store: {
      title: "Store Add-ons",
      options: [
        {
          name: "Astro — Product Catalog (no checkout)",
          price: "IDR 800,000 – 1,500,000"
        },
        {
          name: "Next.js — Mini Ecommerce",
          details: ["Cart + checkout", "CMS / database"],
          price: "IDR 3,000,000 – 8,000,000"
        }
      ]
    },
    erpCrm: {
      title: "ERP & CRM Packages — Full Web App",
      description: "These are usually large projects — price depends on complexity.",
      crm: {
        title: "CRM (Customer Relationship Management)",
        description: "For businesses managing customers, sales, and follow-ups.",
        packages: [
          {
            name: "Basic CRM Package",
            features: [
              "Customer management",
              "Leads pipeline",
              "Activity log",
              "Sales dashboard",
              "Export Excel"
            ],
            price: "IDR 10,000,000 – 25,000,000",
            revisions: ["8x small revisions", "4x major revisions"]
          },
          {
            name: "Pro CRM Package",
            features: [
              "Team management",
              "Permissions & roles",
              "Email automation (SMTP)",
              "WhatsApp API integration",
              "Report builder",
              "Next.js + Supabase/Prisma integration"
            ],
            price: "IDR 25,000,000 – 60,000,000"
          }
        ]
      },
      erp: {
        title: "ERP (Enterprise Resource Planning)",
        description: "ERP is much more complex — module by module.",
        modules: [
          "Inventory Module → IDR 8,000,000 – 15,000,000",
          "Purchasing Module → IDR 6,000,000 – 12,000,000",
          "Invoicing & Finance Module → IDR 10,000,000 – 20,000,000",
          "HR & Attendance Module → IDR 12,000,000 – 25,000,000",
          "Production Module → IDR 15,000,000 – 30,000,000",
          "Integrated CRM Module → IDR 15,000,000 – 30,000,000"
        ],
        fullPackage: "ERP Full Package (6–12 modules): IDR 80,000,000 – 250,000,000",
        revisions: [
          "Small revisions → free during development",
          "Major revisions → 3x (rest paid per request)",
          "Additional change request → IDR 300,000 – 1,000,000 per item"
        ]
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
    }
  }
};
