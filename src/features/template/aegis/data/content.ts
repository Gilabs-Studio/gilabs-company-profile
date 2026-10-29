export interface ContentData {
  nav: {
    work: string;
    life: string;
    health: string;
    investment: string;
    syariah: string;
    careers: string;
    smt: string;
    about: string;
    ourStory: string;
    team: string;
    partnership: string;
    contact: string;
    portal: string;
    switchLang: string;
  };
  hero: {
    tagline: string;
    middleText: string;
    smtBtn: string;
    contactBtn: string;
    aiTitle: string;
    storyTitle: string;
    careersTitle: string;
    cards: {
      life: { title: string; desc: string; img: string };
      health: { title: string; desc: string; img: string };
      unitlink: { title: string; desc: string; img: string };
      syariah: { title: string; desc: string; img: string };
    };
  };
  statement: {
    badge: string;
    text: string;
    subtext: string;
  };
  workList: {
    eyebrow: string;
    title: string;
    explore: string;
    items: {
      number: string;
      title: string;
      subtitle: string;
      desc: string;
      img: string;
      alt: string;
    }[];
  };
  accordion: {
    eyebrow: string;
    title: string;
    button: string;
    items: {
      category: string;
      title: string;
      shortTitle: string;
      desc: string;
      video: string;
      poster: string;
      bottleneckTitle: string;
      bottleneckDesc: string;
      systemTitle: string;
      systemDesc: string;
      img?: string;
      alt?: string;
    }[];
  };
  numbers: {
    eyebrow: string;
    title: string;
    items: {
      value: string;
      label: string;
    }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    desc: string;
    step1Label: string;
    step1Placeholder: string;
    step2Label: string;
    step2Placeholder: string;
    step3Label: string;
    step3Placeholder: string;
    nextBtn: string;
    sendBtn: string;
    consentText: string;
    successMessage: string;
  };
  footer: {
    disclaimer: string;
    rights: string;
    privacyPolicy: string;
    terms: string;
  };
}

export const siteContent: Record<'en' | 'id', ContentData> = {
  id: {
    nav: {
      work: "Solusi Proteksi",
      life: "Proteksi Jiwa",
      health: "Asuransi Kesehatan",
      investment: "Unit Link & Pensiun",
      syariah: "Solusi Syariah",
      careers: "Karier & Bisnis",
      smt: "Program SMT",
      about: "Tentang Lorem",
      ourStory: "Profil Agensi",
      team: "Manajemen & Leader",
      partnership: "Kemitraan",
      contact: "Hubungi Kami",
      portal: "Portal Nasabah",
      switchLang: "EN"
    },
    hero: {
      tagline: "Agensi Terkemuka Afiliasi Resmi Ipsum Life Assurance",
      middleText: "Lorem Financial Group adalah jaringan agensi proteksi finansial dan pengembangan kepemimpinan bisnis terkemuka di Indonesia, berafiliasi resmi dengan Ipsum Life Assurance.",
      smtBtn: "Karier SMT",
      contactBtn: "Konsultasi",
      aiTitle: "Lorem Platform & Training",
      storyTitle: "Kisah Lorem Group",
      careersTitle: "Sales Management Trainee",
      cards: {
        life: {
          title: "Proteksi Jiwa",
          desc: "Solusi perlindungan finansial terhadap risiko hidup demi kepastian masa depan keluarga tercinta.",
          img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
        },
        health: {
          title: "Asuransi Kesehatan",
          desc: "Program proteksi kesehatan komprehensif, mencakup rawat inap, rawat jalan, hingga kondisi kritis.",
          img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
        },
        unitlink: {
          title: "Unit Link & Pensiun",
          desc: "Kombinasi proteksi asuransi sekaligus investasi terencana untuk dana pendidikan anak dan masa pensiun.",
          img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
        },
        syariah: {
          title: "Solusi Syariah",
          desc: "Perlindungan dan perencanaan finansial berbasis prinsip tolong-menolong syariah melalui Ipsum Sharia Life.",
          img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=800&q=80"
        }
      }
    },
    statement: {
      badge: "",
      text: "Kami adalah jaringan profesional dan wirausahawan proteksi finansial yang bergerak mendampingi masa depan keluarga bersama Ipsum Life.",
      subtext: ""
    },
    workList: {
      eyebrow: "Portofolio Layanan",
      title: "Solusi Proteksi",
      explore: "Explore",
      items: [
        {
          number: "01",
          title: "Proteksi Jiwa",
          subtitle: "",
          desc: "Solusi kepastian finansial dan proteksi warisan terencana untuk menjaga kelangsungan impian keluarga tercinta dari risiko kehidupan yang tak terduga.",
          img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=85",
          alt: "Keluarga harmonis dengan kepastian perlindungan finansial"
        },
        {
          number: "02",
          title: "Asuransi Kesehatan",
          subtitle: "",
          desc: "Akses perawatan medis komprehensif dengan penjaminan klaim cashless di jaringan rumah sakit rekanan terkemuka di Indonesia dan mancanegara.",
          img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=85",
          alt: "Fasilitas perawatan kesehatan modern dan tim medis profesional"
        },
        {
          number: "03",
          title: "Unit Link & Pensiun",
          subtitle: "",
          desc: "Memadukan perlindungan jiwa dengan alokasi investasi terencana untuk mempersiapkan dana pendidikan tinggi anak dan kemandirian masa pensiun.",
          img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
          alt: "Pusat pertumbuhan finansial perkotaan yang dinamis"
        },
        {
          number: "04",
          title: "Ipsum Sharia Life",
          subtitle: "",
          desc: "Solusi perlindungan jiwa dan kesehatan berbasis tolong-menolong (ta'awun) yang dikelola terpisah dan diawasi resmi oleh Otoritas Jasa Keuangan.",
          img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1600&q=85",
          alt: "Perencanaan keuangan syariah yang berkah dan amanah"
        }
      ]
    },
    accordion: {
      eyebrow: "Keunggulan Layanan",
      title: "Mengapa Lorem Group?",
      button: "Konsultasi Sekarang",
      items: [
        {
          category: "Afiliasi Resmi",
          title: "Kemitraan Resmi Ipsum Life Assurance",
          shortTitle: "Afiliasi Resmi",
          desc: "Didukung oleh kekuatan finansial dan reputasi global lebih dari 150 tahun, Lorem Group menghadirkan standar proteksi jiwa dan kesehatan tertinggi.",
          video: "https://res.cloudinary.com/wum7ikxp/video/upload/v1785858436/resized-semantic-energy-video_copy_3_e2kfua.mp4",
          poster: "https://framerusercontent.com/images/jCCFbvzN5rfZc0cK9a9Beoaxic.webp?width=1200&height=1358",
          bottleneckTitle: "Tantangan Industri",
          bottleneckDesc: "Banyak keluarga menghadapi ketidakpastian finansial akibat polis yang terfragmentasi, minimnya pendampingan jangka panjang, dan kekhawatiran atas solvabilitas klaim asuransi.",
          systemTitle: "Sistem & Solusi Lorem",
          systemDesc: "Lorem Group berafiliasi langsung dengan Ipsum Life Indonesia, menjamin dukungan rasio solvabilitas (RBC) kokoh di atas ketentuan OJK, kepastian pembayaran klaim, dan pendampingan seumur hidup.",
          img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
          alt: "Kantor institusi finansial terkemuka"
        },
        {
          category: "Karier & Kepemimpinan",
          title: "Program Sales Management Trainee (SMT)",
          shortTitle: "Karier SMT",
          desc: "Jalur karier akselerasi hibrid dan paruh waktu bagi profesional muda untuk membangun bisnis agensi mandiri.",
          video: "https://res.cloudinary.com/wum7ikxp/video/upload/v1785858575/resized-semantic-logistic_copy_yafw_balanced_yq6pmq.mp4",
          poster: "https://framerusercontent.com/images/7n9JFTYK9fMMT8McezJOn9hQ6o.webp?width=720&height=1280",
          bottleneckTitle: "Tantangan Talenta",
          bottleneckDesc: "Generasi muda dan profesional sering terjebak dalam jalur karier linier dengan jenjang kompensasi terbatas dan minimnya akses ke ekosistem kepemimpinan bisnis mandiri.",
          systemTitle: "Sistem Inkubasi SMT",
          systemDesc: "Kurikulum mentorship intensif, lisensi resmi AASI/AAJI, pendampingan dari Agency Leader berpengalaman, serta struktur reward transparan tanpa batas pendapatan.",
          img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
          alt: "Sesi pelatihan kepemimpinan dan mentoring tim bisnis"
        },
        {
          category: "Layanan Digital",
          title: "Ekosistem Klaim Digital Lorem Access",
          shortTitle: "Layanan Digital",
          desc: "Kemudahan pemantauan polis, administrasi rumah sakit cashless, dan klaim cepat berbasis aplikasi digital.",
          video: "https://res.cloudinary.com/wum7ikxp/video/upload/v1785858845/resized-semantic-ai-insurance-video_yafw_balanced_axdwnb.mp4",
          poster: "https://framerusercontent.com/images/xRuPPuC6vFm7KbIuHkS9pVZvQ6Q.webp?width=1000&height=562",
          bottleneckTitle: "Tantangan Layanan",
          bottleneckDesc: "Proses administrasi klaim manual yang berbelit-belit dan lambat sering menimbulkan stres di saat nasabah sedang membutuhkan penanganan medis segera.",
          systemTitle: "Sistem Lorem Access 24/7",
          systemDesc: "Jaringan rumah sakit cashless rekanan nasional dan internasional, pengajuan klaim digital via aplikasi Lorem Access, dan pendampingan personal dari financial planner resmi.",
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
          alt: "Sistem digital pemantauan layanan nasabah"
        },
        {
          category: "Prinsip Syariah",
          title: "Entitas Syariah Mandiri Berizin Resmi OJK",
          shortTitle: "Ipsum Sharia",
          desc: "Pengelolaan proteksi berbasis tolong-menolong (ta'awun) yang murni dan diawasi ketat oleh DSN-MUI.",
          video: "https://res.cloudinary.com/wum7ikxp/video/upload/v1785858698/resized-semantic-ai-defense-video_yafw_balanced_wzc90c.mp4",
          poster: "https://framerusercontent.com/images/RgpNwhTts37JaMp8pJ2F6ZikJI.webp?width=720&height=1280",
          bottleneckTitle: "Kebutuhan Pasar",
          bottleneckDesc: "Masyarakat membutuhkan solusi perlindungan finansial yang selaras dengan prinsip syariah tanpa kompromi pada transparansi alokasi dana dan kepatuhan regulasi.",
          systemTitle: "Ekosistem Ta'awun Halal",
          systemDesc: "Pengelolaan dana tabarru' terpisah, bebas riba, gharar, dan maysir, berizin Otoritas Jasa Keuangan dengan pengawasan langsung Dewan Pengawas Syariah.",
          img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
          alt: "Kenyamanan dan ketenangan keluarga Indonesia"
        }
      ]
    },
    numbers: {
      eyebrow: "Dampak & Pencapaian",
      title: "Rekam Jejak Kepercayaan",
      items: [
        {
          value: "Rp 10T+",
          label: "Total klaim & manfaat proteksi terbayarkan bagi keluarga Indonesia."
        },
        {
          value: "100K+",
          label: "Nasabah & keluarga aktif terlindungi di seluruh penjuru negeri."
        },
        {
          value: "30+",
          label: "Kantor operasional & agensi mandiri di berbagai kota besar."
        },
        {
          value: "5,000+",
          label: "Perencana keuangan berlisensi & mitra bisnis aktif Lorem Group."
        }
      ]
    },
    cta: {
      eyebrow: "Langkah Selanjutnya",
      title: "Rencanakan Masa Depan Anda Bersama Lorem Group",
      desc: "Konsultasikan kebutuhan proteksi keluarga Anda atau bergabung dalam program karier Sales Management Trainee (SMT) bersama agensi Ipsum Life terdepan.",
      step1Label: "Email atau Nomor WhatsApp",
      step1Placeholder: "nama@email.com atau 0812...",
      step2Label: "Nama Lengkap & Kota Domisili",
      step2Placeholder: "Contoh: Budi Santoso (Jakarta)",
      step3Label: "Kebutuhan Solusi",
      step3Placeholder: "Ceritakan kebutuhan Anda (Proteksi Jiwa / Kesehatan / Karier SMT)...",
      nextBtn: "Lanjutkan",
      sendBtn: "Kirim Permintaan Konsultasi",
      consentText: "Saya menyetujui untuk dihubungi oleh tim perencana keuangan resmi Lorem Group Ipsum Life.",
      successMessage: "Terima kasih telah menghubungi Lorem Group. Financial Planner resmi kami akan segera menghubungi Anda."
    },
    footer: {
      disclaimer: "Lorem Financial Group merupakan kantor agensi mandiri yang berafiliasi resmi dengan Ipsum Life Assurance dan Ipsum Sharia Life Assurance. Seluruh tenaga pemasar berlisensi resmi dan diawasi oleh Otoritas Jasa Keuangan (OJK).",
      rights: "© 2026 Lorem Financial Group. Seluruh hak cipta dilindungi undang-undang.",
      privacyPolicy: "Kebijakan Privasi",
      terms: "Syarat & Ketentuan"
    }
  },
  en: {
    nav: {
      work: "Protection Solutions",
      life: "Life Insurance",
      health: "Health Insurance",
      investment: "Unit Link & Retirement",
      syariah: "Syariah Solutions",
      careers: "Careers & Business",
      smt: "SMT Program",
      about: "About Lorem",
      ourStory: "Agency Profile",
      team: "Leadership Team",
      partnership: "Partnership",
      contact: "Contact Us",
      portal: "Client Portal",
      switchLang: "ID"
    },
    hero: {
      tagline: "Premier Agency Network Affiliated with Ipsum Life Assurance",
      middleText: "Lorem Financial Group is a premier financial protection agency and business leadership network in Indonesia, directly affiliated with Ipsum Life Assurance.",
      smtBtn: "SMT Careers",
      contactBtn: "Consultation",
      aiTitle: "Lorem Platform & Training",
      storyTitle: "The Story of Lorem Group",
      careersTitle: "Sales Management Trainee",
      cards: {
        life: {
          title: "Life Insurance",
          desc: "Comprehensive financial security protecting your family against unexpected life uncertainties.",
          img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
        },
        health: {
          title: "Health Insurance",
          desc: "Total medical care coverage spanning inpatient, outpatient, and critical illness protections.",
          img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
        },
        unitlink: {
          title: "Unit Link & Wealth",
          desc: "Integrated insurance protection combined with managed capital growth for education and retirement.",
          img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
        },
        syariah: {
          title: "Syariah Solutions",
          desc: "Mutual-aid financial planning adhering to authentic Syariah governance via Ipsum Sharia Life.",
          img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=800&q=80"
        }
      }
    },
    statement: {
      badge: "",
      text: "We are a team of financial protection professionals and entrepreneurs built to safeguard families and build businesses with Ipsum Life.",
      subtext: ""
    },
    workList: {
      eyebrow: "Our Work",
      title: "What we do",
      explore: "Explore",
      items: [
        {
          number: "01",
          title: "Life Insurance",
          subtitle: "",
          desc: "Guarantees family dreams and financial certainty when life's unforeseen risks occur, securing lasting wealth preservation.",
          img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=85",
          alt: "Harmonious family protected with financial peace of mind"
        },
        {
          number: "02",
          title: "Health Insurance",
          subtitle: "",
          desc: "Comprehensive medical protection with private rooms, cashless hospital access across Indonesia and worldwide.",
          img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=85",
          alt: "Modern healthcare facilities and dedicated medical care"
        },
        {
          number: "03",
          title: "Investment & Pension",
          subtitle: "",
          desc: "Combines insurance security with strategic capital allocation across managed funds to prepare university funds and dignified retirement.",
          img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
          alt: "Dynamic city skyline representing financial growth"
        },
        {
          number: "04",
          title: "Ipsum Sharia Life",
          subtitle: "",
          desc: "Protection and legacy planning rooted in mutual assistance (Ta'awun) and Sharia principles, overseen by the National Sharia Board and OJK.",
          img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1600&q=85",
          alt: "Ethical and transparent Sharia financial planning"
        }
      ]
    },
    accordion: {
      eyebrow: "Service Excellence",
      title: "Why Lorem Group?",
      button: "Consult Now",
      items: [
        {
          category: "Official Affiliation",
          title: "Direct Partnership with Ipsum Life Assurance",
          shortTitle: "Ipsum Affiliation",
          desc: "Backed by 150+ years of global legacy, unmatched financial stability, and Ipsum Life's track record as Indonesia's trusted market leader.",
          video: "https://res.cloudinary.com/wum7ikxp/video/upload/v1785858436/resized-semantic-energy-video_copy_3_e2kfua.mp4",
          poster: "https://framerusercontent.com/images/jCCFbvzN5rfZc0cK9a9Beoaxic.webp?width=1200&height=1358",
          bottleneckTitle: "Industry Bottleneck",
          bottleneckDesc: "Families frequently face fragmented policies, uncertain claims solvency, and lack of continuous lifelong advisory when navigating medical and life protection.",
          systemTitle: "Lorem Platform Solution",
          systemDesc: "Direct strategic alliance with Ipsum Life Assurance, backed by robust Risk-Based Capital (RBC) far exceeding regulatory thresholds, guaranteed claim delivery, and dedicated family planners.",
          img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
          alt: "Prestigious corporate financial center"
        },
        {
          category: "Career & Leadership",
          title: "Sales Management Trainee (SMT) Program",
          shortTitle: "SMT Careers",
          desc: "Accelerated hybrid leadership curriculum enabling ambitious professionals and graduates to build their own agency franchise with structured mentorship.",
          video: "https://res.cloudinary.com/wum7ikxp/video/upload/v1785858575/resized-semantic-logistic_copy_yafw_balanced_yq6pmq.mp4",
          poster: "https://framerusercontent.com/images/7n9JFTYK9fMMT8McezJOn9hQ6o.webp?width=720&height=1280",
          bottleneckTitle: "Career Bottleneck",
          bottleneckDesc: "Talented professionals often encounter rigid corporate hierarchies, capped income ceilings, and lack of entrepreneurial mentorship.",
          systemTitle: "SMT Incubation Engine",
          systemDesc: "Comprehensive executive coaching, official licensing curriculum, dedicated mentor pairing, and uncapped enterprise revenue-sharing models.",
          img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
          alt: "Executive leadership training and mentorship program"
        },
        {
          category: "Digital Ecosystem",
          title: "Lorem Access & Digital Claims Platform",
          shortTitle: "Digital Claims",
          desc: "Direct support from licensed planners paired with digital platforms for real-time policy monitoring and cashless hospital admissions.",
          video: "https://res.cloudinary.com/wum7ikxp/video/upload/v1785858845/resized-semantic-ai-insurance-video_yafw_balanced_axdwnb.mp4",
          poster: "https://framerusercontent.com/images/xRuPPuC6vFm7KbIuHkS9pVZvQ6Q.webp?width=1000&height=562",
          bottleneckTitle: "Operational Bottleneck",
          bottleneckDesc: "Traditional insurance paperwork and manual claim reviews create delays and anxiety during critical medical emergencies.",
          systemTitle: "Lorem Access 24/7 Ecosystem",
          systemDesc: "Instant cashless admissions across thousands of top-tier hospitals worldwide, transparent digital tracking, and personalized advisory support.",
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
          alt: "Digital platform for customer claims and services"
        },
        {
          category: "Sharia Principles",
          title: "Dedicated Sharia Life Entity Licensed by OJK",
          shortTitle: "Ipsum Sharia",
          desc: "Independent, certified Islamic insurance options operating under authentic Ta'awun mutual cooperation, supervised directly by DSN-MUI and OJK.",
          video: "https://res.cloudinary.com/wum7ikxp/video/upload/v1785858698/resized-semantic-ai-defense-video_yafw_balanced_wzc90c.mp4",
          poster: "https://framerusercontent.com/images/RgpNwhTts37JaMp8pJ2F6ZikJI.webp?width=720&height=1280",
          bottleneckTitle: "Market Demand",
          bottleneckDesc: "Modern families seek ethical, interest-free, and spiritually aligned financial safeguards backed by stringent regulatory compliance.",
          systemTitle: "Authentic Ta'awun System",
          systemDesc: "Segregated Tabarru' funds, complete transparency, certified free of riba and gharar, licensed by OJK and monitored by Sharia Supervisory Boards.",
          img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
          alt: "Family security and enduring peace of mind"
        }
      ]
    },
    numbers: {
      eyebrow: "Impact & Scale",
      title: "Proven Track Record",
      items: [
        {
          value: "IDR 10T+",
          label: "Total claims and protection benefits delivered to families."
        },
        {
          value: "100K+",
          label: "Active policyholders and families secured nationwide."
        },
        {
          value: "30+",
          label: "Agency hubs and strategic branches across major cities."
        },
        {
          value: "5,000+",
          label: "Licensed financial advisors and agency business partners."
        }
      ]
    },
    cta: {
      eyebrow: "Get in Touch",
      title: "Plan Your Future with Lorem Group",
      desc: "Consult your family's protection needs or explore entrepreneurship through our Sales Management Trainee (SMT) leadership program.",
      step1Label: "Email or WhatsApp Number",
      step1Placeholder: "name@email.com or +62...",
      step2Label: "Full Name & City",
      step2Placeholder: "e.g. Michael Tan (Jakarta)",
      step3Label: "Area of Interest",
      step3Placeholder: "Tell us your goals (Family Protection / Health / SMT Career)...",
      nextBtn: "Continue",
      sendBtn: "Request Consultation",
      consentText: "I agree to be contacted by a licensed Lorem Group Ipsum Life financial planner.",
      successMessage: "Thank you for reaching out. A licensed Lorem Group advisor will contact you promptly."
    },
    footer: {
      disclaimer: "Lorem Financial Group is an authorized independent agency network directly affiliated with Ipsum Life Assurance and Ipsum Sharia Life Assurance. All financial planners are licensed and supervised by OJK.",
      rights: "© 2026 Lorem Financial Group. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      terms: "Terms of Service"
    }
  }
};
