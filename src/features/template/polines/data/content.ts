export const polinesImages = {
  campusAerial: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=85',
  civilEngineering: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  mechanicalEngineering: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  electricalEngineering: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  accountingFinance: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  businessManagement: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  digitalLibrary: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
  droneTech: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
  smartAgri: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80',
  engineeringExpo: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
  industrialOutreach: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80',
  appliedResearch: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
  ctaCurtain: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=80',
};

export interface PolinesContent {
  nav: {
    home: string;
    profile: string;
    academics: string;
    research: string;
    admissions: string;
    megaMenu: {
      profile: {
        title: string;
        links: { label: string; href: string }[];
      };
      academics: {
        title: string;
        links: { label: string; href: string }[];
      };
      research: {
        title: string;
        links: { label: string; href: string }[];
      };
      admissions: {
        title: string;
        links: { label: string; href: string }[];
      };
    };
  };
  hero: {
    tagline: string;
    displayHeading: string;
  };
  textIntro: {
    eyebrow: string;
    words: { text: string; isHighlight?: boolean }[];
  };
  purpose1: {
    watermark: string;
    title: string;
    highlight: string;
    desc: string;
    cta: string;
    image: string;
    imageAlt: string;
  };
  purpose2: {
    watermark: string;
    title: string;
    highlight: string;
    desc: string;
    cta: string;
    image: string;
    imageAlt: string;
  };
  campusLife: {
    eyebrow: string;
    title: string;
    desc: string;
    departments: {
      id: string;
      title: string;
      tag: string;
      image: string;
      description: string;
      details: string[];
    }[];
  };
  journey: {
    badge: string;
    title: string;
    desc: string;
    card1: {
      badge: string;
      title: string;
      desc: string;
      actionText: string;
    };
    card2: {
      badge: string;
      title: string;
      desc: string;
      actionText: string;
    };
  };
  news: {
    eyebrow: string;
    title: string;
    desc: string;
    categories: { id: string; label: string }[];
    stories: {
      id: string;
      filterGroup: string;
      category: string;
      innovator: string;
      title: string;
      date: string;
      image: string;
      excerpt: string;
      readMore: string;
    }[];
    viewArchive: string;
  };
  cta: {
    cta1: {
      title: string;
      desc: string;
      buttonText: string;
    };
    cta2: {
      title: string;
      desc: string;
      buttonText: string;
      modalTitle: string;
      modalDesc: string;
      formNamePlaceholder: string;
      formEmailPlaceholder: string;
      formPhonePlaceholder: string;
      formSubmit: string;
      formSuccess: string;
    };
  };
  footer: {
    tagline: string;
    address: string;
    contact: string;
    colDepartmentsTitle: string;
    colPortalsTitle: string;
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterSuccess: string;
    copyright: string;
  };
}

export const polinesContentData: Record<'id' | 'en', PolinesContent> = {
  id: {
    nav: {
      home: 'BERANDA',
      profile: 'PROFIL',
      academics: 'AKADEMIK',
      research: 'RISET',
      admissions: 'PENERIMAAN',
      megaMenu: {
        profile: {
          title: 'PROFIL INSTITUSI',
          links: [
            { label: 'Struktur Organisasi & Tata Kelola', href: '#profil' },
            { label: 'Rencana Strategis Pengembangan', href: '#profil' },
            { label: 'Laporan Kinerja & Akreditasi Unggul', href: '#profil' },
            { label: 'Fasilitas Bengkel & Lab Presisi', href: '#kehidupan-kampus' },
            { label: 'Peta Kawasan Kampus Terpadu', href: '#profil' },
          ]
        },
        academics: {
          title: 'PROGRAM AKADEMIK',
          links: [
            { label: 'Program Sarjana Terapan & Diploma', href: '#kehidupan-kampus' },
            { label: 'Skema Beasiswa Prestasi & Industri', href: '#pmb' },
            { label: 'Kurikulum Vokasi Berbasis Proyek', href: '#kehidupan-kampus' },
            { label: 'Sertifikasi Kompetensi Industri', href: '#kehidupan-kampus' },
            { label: 'Kalender Akademik Terpadu', href: '#kehidupan-kampus' },
          ]
        },
        research: {
          title: 'RISET & HILIRISASI',
          links: [
            { label: 'Pusat Riset Terapan & Inovasi', href: '#riset' },
            { label: 'Kemitraan Industri Multinasional', href: '#riset' },
            { label: 'Paten & Kekayaan Intelektual Terdaftar', href: '#riset' },
            { label: 'Inkubator Bisnis & Teknologi Rekayasa', href: '#riset' },
          ]
        },
        admissions: {
          title: 'PENERIMAAN MAHASISWA',
          links: [
            { label: 'Jalur Masuk Prestasi Nasional', href: '#pmb' },
            { label: 'Jalur Tes Bersama Vokasi', href: '#pmb' },
            { label: 'Jalur Mandiri Kemitraan Khusus', href: '#pmb' },
            { label: 'Brosur & Panduan Pendaftaran', href: '#unduh-brosur' },
          ]
        }
      }
    },
    hero: {
      tagline: 'Pendidikan tinggi vokasi terdepan yang memadukan keahlian praktis presisi, teknologi industri modern, dan kurikulum terapan untuk mencetak profesional unggul siap kerja.',
      displayHeading: 'Committed to Quality'
    },
    textIntro: {
      eyebrow: 'Pendidikan Tinggi Vokasi Terapan',
      words: [
        { text: 'Di' }, { text: 'LOREM,' }, { text: 'teori' }, { text: 'dan' }, { text: 'praktik' }, { text: 'industri' }, { text: 'berjalan' }, { text: 'beriringan.' },
        { text: 'Kami', isHighlight: true }, { text: 'melatih', isHighlight: true }, { text: 'keahlian', isHighlight: true }, { text: 'terapan', isHighlight: true },
        { text: 'langsung' }, { text: 'di' }, { text: 'laboratorium' }, { text: 'dan' }, { text: 'bengkel' }, { text: 'kerja' }, { text: 'presisi,' },
        { text: 'menyiapkan', isHighlight: true }, { text: 'Anda', isHighlight: true }, { text: 'menjadi', isHighlight: true }, { text: 'profesional', isHighlight: true }, { text: 'unggul', isHighlight: true },
        { text: 'yang' }, { text: 'dicari' }, { text: 'dunia' }, { text: 'industri' }, { text: 'modern.' }
      ]
    },
    purpose1: {
      watermark: 'VOKASI • VOKASI •',
      title: 'Keahlian Nyata,',
      highlight: 'Standar Industri',
      desc: 'Pembelajaran berfokus pada praktik intensif di laboratorium dan bengkel presisi. Mahasiswa menguasai teknologi terkini yang langsung terpakai di industri manufaktur dan rekayasa.',
      cta: 'Jelajahi Jurusan',
      image: polinesImages.civilEngineering,
      imageAlt: 'Laboratorium & Praktik Terapan Rekayasa'
    },
    purpose2: {
      watermark: 'INOVASI • INOVASI •',
      title: 'Riset Terapan yang',
      highlight: 'Menjawab Kebutuhan',
      desc: 'Kami mengembangkan teknologi tepat guna dan solusi rekayasa otomasi untuk menjawab tantangan dunia usaha. Inovasi sivitas diarahkan langsung pada hilirisasi nyata.',
      cta: 'Karya Sivitas',
      image: polinesImages.mechanicalEngineering,
      imageAlt: 'Pusat Manufaktur & Riset Terapan'
    },
    campusLife: {
      eyebrow: 'Lingkungan Kampus & Akademik',
      title: 'Fasilitas & Ekosistem Terpadu',
      desc: 'Jelajahi laboratorium modern, bengkel rekayasa presisi, dan sarana pembelajaran terpadu di Lorem Polytechnic Institute.',
      departments: [
        {
          id: 'sipil',
          title: 'Teknik Rekayasa Sipil',
          tag: 'Rekayasa Infrastruktur',
          image: polinesImages.civilEngineering,
          description: 'Pusat pembelajaran praktik konstruksi, mekanika tanah, uji material beton, hidrolika, dan sistem informasi geografis (GIS) berstandar industri infrastruktur nasional.',
          details: [
            'Laboratorium Mekanika Tanah & Geoteknik bersertifikasi',
            'Peralatan Total Station digital presisi tinggi',
            'Studio Perancangan BIM (Building Information Modeling)',
            'Uji Kuat Tekan Beton & Struktur Baja ASTM'
          ]
        },
        {
          id: 'mesin',
          title: 'Teknik Manufaktur & Mesin',
          tag: 'Manufaktur & Presisi',
          image: polinesImages.mechanicalEngineering,
          description: 'Fasilitas pemesinan canggih dilengkapi mesin bubut CNC multi-axis, pusat manufaktur presisi, otomotif rekayasa, dan bengkel pengelasan sertifikasi internasional.',
          details: [
            'Machining Center CNC 3-Axis & 5-Axis',
            'Bengkel Pengelasan SMAW, GMAW, GTAW berstandar ISO',
            'Laboratorium Pengujian Metalurgi & Heat Treatment',
            'Simulator Kendali Pneumatik & Hidrolika Otomasi'
          ]
        },
        {
          id: 'elektro',
          title: 'Teknik Elektro & Otomasi',
          tag: 'Otomasi, IoT & AI',
          image: polinesImages.electricalEngineering,
          description: 'Pusat riset dan praktikum elektronika daya, kendali otomasi PLC, robotika industri, jaringan komputer, serta pengembangan drone kecerdasan buatan (Multi-UAV).',
          details: [
            'Laboratorium PLC & SCADA Berbasis Industri 4.0',
            'Fasilitas Perakitan & Pengujian Multi-UAV Otonom',
            'Ruang Bersih Fabrikasi Prototipe IoT & PCB Mikro',
            'Pembangkit Mini Energi Terbarukan Surya & Angin'
          ]
        },
        {
          id: 'akuntansi',
          title: 'Akuntansi & Keuangan Terapan',
          tag: 'Keuangan & Perpajakan',
          image: polinesImages.accountingFinance,
          description: 'Laboratorium pasar modal terintegrasi, simulasi perbankan modern, audit forensik digital, serta tax center berkolaborasi langsung dengan otoritas fiskal resmi.',
          details: [
            'Dealing Room Simulasi Perdagangan Efek & Pasar Uang',
            'Software Enterprise ERP & SAP Terakreditasi',
            'Laboratorium Audit Finansial & Investigasi Digital',
            'Tax Center Konsultasi Perpajakan Terapan'
          ]
        },
        {
          id: 'bisnis',
          title: 'Manajemen Bisnis Terapan',
          tag: 'Rantai Pasok & Ekspor',
          image: polinesImages.businessManagement,
          description: 'Wahana pengembangan kewirausahaan mahasiswa, laboratorium ekspor-impor, manajemen rantai pasok global, dan studio digital marketing berkinerja tinggi.',
          details: [
            'Laboratorium Dokumen Ekspor-Impor & Kepabeanan',
            'Studio Produksi Konten Digital Marketing',
            'Inkubator Startup Bisnis Mahasiswa Terkurasi',
            'Simulasi Logistik Terpadu & Rantai Pasok'
          ]
        },
        {
          id: 'perpus',
          title: 'Perpustakaan & Riset Digital',
          tag: 'Layanan ETD & Jurnal',
          image: polinesImages.digitalLibrary,
          description: 'Layanan perpustakaan pintar terintegrasi Electronic Theses and Dissertations (ETD), repositori ilmiah terindeks global, dan ruang kolaborasi interaktif.',
          details: [
            'Akses ke Jutaan Jurnal Ilmiah Internasional',
            'Sistem Peminjaman Otomatis RFID Mandiri',
            'Ruang Diskusi & Collaborative Pods Berpendingin',
            'Pusat Bimbingan Penulisan Paten & Sitasi'
          ]
        }
      ]
    },
    journey: {
      badge: 'Langkah Awal',
      title: 'Mulai Perjalananmu di LOREM',
      desc: 'Tentukan jalur penerimaan yang sesuai atau manfaatkan program beasiswa untuk mendukung masa depan studimu di kampus vokasi unggulan.',
      card1: {
        badge: 'Jalur Seleksi',
        title: 'Penerimaan Mahasiswa Baru',
        desc: 'Informasi jalur seleksi nasional vokasi serta Jalur Mandiri Kemitraan tahun akademik mendatang.',
        actionText: 'Alur PMB & Jadwal'
      },
      card2: {
        badge: 'Dukungan Finansial',
        title: 'Program Beasiswa & Kemitraan',
        desc: 'Dukungan beasiswa prestasi, bantuan keringanan biaya studi, dan program beasiswa ikatan dinas dari mitra industri terkemuka.',
        actionText: 'Kategori Beasiswa'
      }
    },
    news: {
      eyebrow: 'Kabar, Inovasi & Riset Terapan',
      title: 'Karya Sivitas & Kabar Kampus',
      desc: 'Inovasi teknologi tepat guna, hasil riset dosen dan mahasiswa, serta informasi resmi terkini Lorem Polytechnic Institute.',
      categories: [
        { id: 'all', label: 'Semua Cerita' },
        { id: 'inovasi', label: 'Inovasi & Riset' },
        { id: 'mahasiswa', label: 'Karya Mahasiswa' },
        { id: 'kampus', label: 'Kabar Kampus' }
      ],
      stories: [
        {
          id: 'uav-doktor',
          filterGroup: 'inovasi',
          category: 'Inovasi Dosen',
          innovator: 'Tim Peneliti • Rekayasa Elektro',
          title: 'Pengembangan Algoritma WE-Gen.A untuk Tingkatkan Efisiensi Energi Sistem Multi-UAV',
          date: '04 Agustus 2026',
          image: polinesImages.droneTech,
          excerpt: 'Riset mutakhir yang menciptakan efisiensi energi signifikan pada formasi kawanan drone nirawak untuk pemantauan dan inspeksi infrastruktur kritis.',
          readMore: 'Baca Selengkapnya'
        },
        {
          id: 'monik-hidroponik',
          filterGroup: 'mahasiswa',
          category: 'Karya Mahasiswa',
          innovator: 'Tim Inovator Rekayasa • Riset Terapan',
          title: 'Alat Pantau Tanaman Hidroponik Otomatis Berbasis Smart Agriculture',
          date: '03 September 2026',
          image: polinesImages.smartAgri,
          excerpt: 'Inovasi sistem sensor otomatis yang memantau kadar nutrisi, pH air, dan suhu tanaman secara presisi melalui dashboard smartphone petani.',
          readMore: 'Baca Selengkapnya'
        },
        {
          id: 'elektro-expo',
          filterGroup: 'mahasiswa',
          category: 'Karya Mahasiswa',
          innovator: 'Mahasiswa Tingkat Akhir • Rekayasa Sistem',
          title: 'Ratusan Prototipe Siap Hilirisasi Dipamerkan pada Gelaran Rekayasa Tahunan',
          date: '10 September 2026',
          image: polinesImages.engineeringExpo,
          excerpt: 'Pameran tahunan karya rekayasa mahasiswa yang menampilkan solusi otomasi industri, energi terbarukan, dan Internet of Things (IoT).',
          readMore: 'Baca Selengkapnya'
        },
        {
          id: 'vacuum-press',
          filterGroup: 'inovasi',
          category: 'Pengabdian Industri',
          innovator: 'Tim Kolaborasi • Teknik Manufaktur',
          title: 'Penerapan Mesin Otomatis Presisi untuk Efisiensi Produksi Manufaktur',
          date: '04 Oktober 2026',
          image: polinesImages.industrialOutreach,
          excerpt: 'Penerapan teknologi tepat guna berbasis pneumatik yang meningkatkan kecepatan pengemasan dan efisiensi logistik pabrik mitra hingga 300%.',
          readMore: 'Baca Selengkapnya'
        },
        {
          id: 'hilirisasi-industri',
          filterGroup: 'inovasi',
          category: 'Kolaborasi Industri',
          innovator: 'Pusat Riset & Kemitraan LOREM',
          title: 'Perkuat Hilirisasi Produk Inovasi Melalui Kolaborasi Riset dan Industri Terkemuka',
          date: '04 Agustus 2026',
          image: polinesImages.appliedResearch,
          excerpt: 'Langkah strategis mempertemukan hasil prototipe rekayasa kampus dengan kebutuhan manufaktur dunia usaha demi percepatan kemandirian teknologi.',
          readMore: 'Baca Selengkapnya'
        },
        {
          id: 'perpustakaan-etd',
          filterGroup: 'kampus',
          category: 'Layanan Akademik',
          innovator: 'Unit Repositori Digital',
          title: 'Perluas Akses Pengetahuan Global Lewat Portal Repositori Terintegrasi ETD',
          date: '29 Juli 2026',
          image: polinesImages.digitalLibrary,
          excerpt: 'Modernisasi sistem repositori riset digital mempermudah sivitas akademika dalam mengakses serta mendiseminasikan karya ilmiah ke komunitas internasional.',
          readMore: 'Baca Selengkapnya'
        }
      ],
      viewArchive: 'Lihat Arsip Publikasi'
    },
    cta: {
      cta1: {
        title: 'Siap Menentukan Masa Depan Anda?',
        desc: 'Bergabunglah bersama ribuan mahasiswa Lorem Polytechnic Institute. Kuasai keahlian praktis berstandar industri dan raih kompetensi teruji untuk langsung berkarier di dunia kerja modern.',
        buttonText: 'Daftar PMB Sekarang'
      },
      cta2: {
        title: 'Unduh Panduan Akademik Resmi',
        desc: 'Dapatkan rincian lengkap mengenai pilihan program studi vokasi, kurikulum terapan berbasis industri, prospek karier lulusan, serta panduan alur seleksi penerimaan.',
        buttonText: 'Unduh Panduan Resmi',
        modalTitle: 'Unduh Brosur Informasi Akademik',
        modalDesc: 'Silakan isi kontak Anda untuk menerima salinan digital prospektus dan panduan seleksi PMB.',
        formNamePlaceholder: 'Nama Lengkap Anda',
        formEmailPlaceholder: 'Alamat Email',
        formPhonePlaceholder: 'Nomor WhatsApp Aktif',
        formSubmit: 'Kirim & Unduh Dokumen (PDF)',
        formSuccess: 'Terima kasih! Brosur akademik telah berhasil diproses.'
      }
    },
    footer: {
      tagline: 'Pendidikan Tinggi Vokasi Terdepan',
      address: 'Kampus Terpadu: Kawasan Pendidikan Terpadu, Boulevard Lorem No. 1, Kota Mandiri 50275.',
      contact: 'Telp: (021) 8088-5000 • Email: halo@lorem-polytechnic.ac.id',
      colDepartmentsTitle: 'Jurusan & Departemen',
      colPortalsTitle: 'Layanan & Portal',
      newsletterTitle: 'Informasi Penerimaan',
      newsletterDesc: 'Dapatkan pengumuman resmi jadwal seleksi dan pembukaan jalur masuk akademik terbaru.',
      newsletterSuccess: 'Terima kasih, Anda telah berlangganan notifikasi seleksi.',
      copyright: '© 2026 Lorem Polytechnic Institute. Hak Cipta Dilindungi.'
    }
  },
  en: {
    nav: {
      home: 'HOME',
      profile: 'PROFILE',
      academics: 'ACADEMICS',
      research: 'RESEARCH',
      admissions: 'ADMISSIONS',
      megaMenu: {
        profile: {
          title: 'INSTITUTIONAL PROFILE',
          links: [
            { label: 'Leadership & Strategic Governance', href: '#profil' },
            { label: 'Strategic Development Roadmap', href: '#profil' },
            { label: 'Institutional Accreditation & Excellence', href: '#profil' },
            { label: 'High-Precision Workshops & Facilities', href: '#kehidupan-kampus' },
            { label: 'Integrated Campus Masterplan Map', href: '#profil' },
          ]
        },
        academics: {
          title: 'ACADEMIC PROGRAMS',
          links: [
            { label: 'Applied Bachelor & Diploma Degrees', href: '#kehidupan-kampus' },
            { label: 'Industry & Merit Scholarships', href: '#pmb' },
            { label: 'Project-Based Vocational Curriculum', href: '#kehidupan-kampus' },
            { label: 'Professional Competency Certifications', href: '#kehidupan-kampus' },
            { label: 'Academic Calendar & Milestones', href: '#kehidupan-kampus' },
          ]
        },
        research: {
          title: 'RESEARCH & COMMERCIALIZATION',
          links: [
            { label: 'Applied Research Centers & Labs', href: '#riset' },
            { label: 'Global Industry Partnerships', href: '#riset' },
            { label: 'Registered Patents & Intellectual Property', href: '#riset' },
            { label: 'Engineering Incubation & Tech Spin-offs', href: '#riset' },
          ]
        },
        admissions: {
          title: 'STUDENT ADMISSIONS',
          links: [
            { label: 'National Merit Entry Pathways', href: '#pmb' },
            { label: 'Standardized Vocational Entrance Exam', href: '#pmb' },
            { label: 'Corporate Sponsored Fast-Track', href: '#pmb' },
            { label: 'Prospectus & Admission Guidelines', href: '#unduh-brosur' },
          ]
        }
      }
    },
    hero: {
      tagline: 'Leading state vocational higher education combining practical expertise, modern industrial technology, and applied curricula to produce industry-ready professionals.',
      displayHeading: 'Committed to Quality'
    },
    textIntro: {
      eyebrow: 'Applied Vocational Higher Education',
      words: [
        { text: 'At' }, { text: 'LOREM,' }, { text: 'academic' }, { text: 'theory' }, { text: 'and' }, { text: 'industry' }, { text: 'practice' }, { text: 'converge.' },
        { text: 'We', isHighlight: true }, { text: 'cultivate', isHighlight: true }, { text: 'applied', isHighlight: true }, { text: 'expertise', isHighlight: true },
        { text: 'inside' }, { text: 'advanced' }, { text: 'laboratories' }, { text: 'and' }, { text: 'precision' }, { text: 'workshops,' },
        { text: 'preparing', isHighlight: true }, { text: 'you', isHighlight: true }, { text: 'to', isHighlight: true }, { text: 'become', isHighlight: true }, { text: 'industry', isHighlight: true }, { text: 'leaders', isHighlight: true },
        { text: 'demanded' }, { text: 'by' }, { text: 'global' }, { text: 'enterprises.' }
      ]
    },
    purpose1: {
      watermark: 'VOCATION • VOCATION •',
      title: 'Practical Mastery,',
      highlight: 'Industry Standards',
      desc: 'Rigorous hands-on training in precision workshops and cutting-edge labs empowers our graduates with direct engineering proficiency required by global technology sectors.',
      cta: 'Explore Departments',
      image: polinesImages.civilEngineering,
      imageAlt: 'Applied Engineering Laboratories'
    },
    purpose2: {
      watermark: 'INNOVATION • INNOVATION •',
      title: 'Applied Research that',
      highlight: 'Solves Real Challenges',
      desc: 'We pioneer functional technologies and automation solutions designed for direct industrial adoption, turning intellectual prototypes into high-yield enterprise assets.',
      cta: 'Community Innovations',
      image: polinesImages.mechanicalEngineering,
      imageAlt: 'Manufacturing & Applied Research'
    },
    campusLife: {
      eyebrow: 'Campus Ecosystem & Facilities',
      title: 'Integrated Learning Infrastructure',
      desc: 'Explore state-of-the-art laboratories, precision fabrication centers, and connected digital facilities at Lorem Polytechnic Institute.',
      departments: [
        {
          id: 'sipil',
          title: 'Civil Engineering & Infrastructure',
          tag: 'Structural Engineering',
          image: polinesImages.civilEngineering,
          description: 'Comprehensive practical training in structural mechanics, soil geotechnics, concrete testing, hydrology, and spatial Geographic Information Systems (GIS).',
          details: [
            'Certified Soil Mechanics & Geotechnical Testing Lab',
            'High-Precision Digital Total Stations & Surveying',
            'Advanced Building Information Modeling (BIM) Studio',
            'ASTM Certified Concrete & Structural Stress Analysis'
          ]
        },
        {
          id: 'mesin',
          title: 'Mechanical & Precision Engineering',
          tag: 'Precision Manufacturing',
          image: polinesImages.mechanicalEngineering,
          description: 'High-precision manufacturing facilities featuring multi-axis CNC machines, automotive engineering centers, and ISO-certified welding workshops.',
          details: [
            '3-Axis & 5-Axis CNC Machining Centers',
            'ISO Certified Welding (SMAW, GMAW, GTAW)',
            'Metallurgy & Thermal Treatment Testing Facility',
            'Automation Hydraulics & Pneumatics Simulators'
          ]
        },
        {
          id: 'elektro',
          title: 'Electrical & Automation Engineering',
          tag: 'Robotics, IoT & AI',
          image: polinesImages.electricalEngineering,
          description: 'Specialized center for power electronics, PLC industrial automation, robotics, high-speed networks, and autonomous aerial drone development (Multi-UAV).',
          details: [
            'Industry 4.0 PLC & SCADA Automation Center',
            'Autonomous Multi-UAV Assembly & Flight Testing Lab',
            'Cleanroom Micro-Electronics & IoT Prototyping',
            'Renewable Solar & Wind Micro-Power Generation Station'
          ]
        },
        {
          id: 'akuntansi',
          title: 'Applied Accounting & Finance',
          tag: 'Financial Systems & Tax',
          image: polinesImages.accountingFinance,
          description: 'Interactive securities dealing room, digital forensic accounting simulations, enterprise ERP platforms, and applied taxation intelligence center.',
          details: [
            'Live Securities Trading & Capital Market Dealing Room',
            'Accredited Enterprise SAP & ERP Software Suites',
            'Financial Forensic Investigation & Digital Audit Lab',
            'Applied Corporate Tax Advisory & Compliance Hub'
          ]
        },
        {
          id: 'bisnis',
          title: 'Business Management & Trade',
          tag: 'Supply Chain & Logistics',
          image: polinesImages.businessManagement,
          description: 'Global commerce laboratory, international export-import documentation center, digital marketing studio, and curated student venture incubator.',
          details: [
            'Customs & International Trade Clearance Lab',
            'High-Performance Digital Media Marketing Studio',
            'Curated Student Startup Venture Accelerator',
            'End-to-End Global Supply Chain Management Sandbox'
          ]
        },
        {
          id: 'perpus',
          title: 'Digital Library & Research Hub',
          tag: 'Repository & ETD',
          image: polinesImages.digitalLibrary,
          description: 'Smart campus library integrated with Electronic Theses & Dissertations (ETD), international indexing repos, and modern collaboration pods.',
          details: [
            'Access to Millions of Peer-Reviewed Global Journals',
            'Contactless RFID Self-Checkout & Book Return',
            'Acoustic Collaborative Pods & Brainstorming Zones',
            'Patent Draft Mentorship & Citation Verification Desk'
          ]
        }
      ]
    },
    journey: {
      badge: 'First Steps',
      title: 'Begin Your Journey at LOREM',
      desc: 'Discover diverse academic pathways and merit-based financial aid opportunities designed to empower your career in applied technology.',
      card1: {
        badge: 'Admission Paths',
        title: 'New Student Enrollment',
        desc: 'Comprehensive guidance on national admission tests and direct corporate partnership enrollment tracks.',
        actionText: 'View Schedule & Criteria'
      },
      card2: {
        badge: 'Financial Support',
        title: 'Scholarships & Grants',
        desc: 'Merit-based scholarships, tuition reduction programs, and sponsored industry cadetships from top tech conglomerates.',
        actionText: 'Explore Financial Aid'
      }
    },
    news: {
      eyebrow: 'News, Innovations & Applied Research',
      title: 'Community Achievements & Campus News',
      desc: 'Applied technological breakthroughs, student innovations, and official announcements from Lorem Polytechnic Institute.',
      categories: [
        { id: 'all', label: 'All Stories' },
        { id: 'inovasi', label: 'Innovations & Research' },
        { id: 'mahasiswa', label: 'Student Inventions' },
        { id: 'kampus', label: 'Campus News' }
      ],
      stories: [
        {
          id: 'uav-doktor',
          filterGroup: 'inovasi',
          category: 'Faculty Innovation',
          innovator: 'Research Team • Electrical Systems',
          title: 'Development of WE-Gen.A Algorithm for Energy Optimization in Multi-UAV Swarms',
          date: 'August 04, 2026',
          image: polinesImages.droneTech,
          excerpt: 'Groundbreaking doctoral research yielding substantial energy conservation in drone swarm deployments for infrastructure inspection.',
          readMore: 'Read Full Story'
        },
        {
          id: 'monik-hidroponik',
          filterGroup: 'mahasiswa',
          category: 'Student Invention',
          innovator: 'Student Engineering Team • AgTech',
          title: 'Smart Automated Hydroponic Monitoring Device for Precision Agriculture',
          date: 'September 03, 2026',
          image: polinesImages.smartAgri,
          excerpt: 'Automated multi-sensor unit monitoring water pH, nutrients, and ambient temperatures delivered via mobile smartphone dashboards.',
          readMore: 'Read Full Story'
        },
        {
          id: 'elektro-expo',
          filterGroup: 'mahasiswa',
          category: 'Student Exhibition',
          innovator: 'Senior Engineering Cohort',
          title: 'Hundreds of Industrial Prototypes Showcased at Annual Engineering Expo',
          date: 'September 10, 2026',
          image: polinesImages.engineeringExpo,
          excerpt: 'Flagship technology exhibition highlighting industrial automation, renewable energy setups, and IoT robotics created by graduating students.',
          readMore: 'Read Full Story'
        },
        {
          id: 'vacuum-press',
          filterGroup: 'inovasi',
          category: 'Industry Outreach',
          innovator: 'Applied Engineering Faculty',
          title: 'Automated Precision Vacuum Equipment Adopted by Manufacturing Partners',
          date: 'October 04, 2026',
          image: polinesImages.industrialOutreach,
          excerpt: 'Pneumatic engineering implementation yielding a 300% efficiency gain in enterprise packaging lines across local factories.',
          readMore: 'Read Full Story'
        },
        {
          id: 'hilirisasi-industri',
          filterGroup: 'inovasi',
          category: 'Industry Alliance',
          innovator: 'LOREM Research & Partnership Unit',
          title: 'Accelerating Technology Commercialization Through Joint Enterprise Alliances',
          date: 'August 04, 2026',
          image: polinesImages.appliedResearch,
          excerpt: 'Strategic framework bridging university laboratory prototypes with industrial manufacturing lines to spur national tech independence.',
          readMore: 'Read Full Story'
        },
        {
          id: 'perpustakaan-etd',
          filterGroup: 'kampus',
          category: 'Academic Services',
          innovator: 'Digital Repository Hub',
          title: 'Global Knowledge Access Expanded with Integrated Electronic Thesis Platform',
          date: 'July 29, 2026',
          image: polinesImages.digitalLibrary,
          excerpt: 'Enhanced digital repository systems enabling seamless global dissemination and citation of student and faculty research output.',
          readMore: 'Read Full Story'
        }
      ],
      viewArchive: 'Explore Publications Archive'
    },
    cta: {
      cta1: {
        title: 'Ready to Define Your Future?',
        desc: 'Join thousands of distinguished students at Lorem Polytechnic Institute. Master industry-grade competencies and launch your career in the forefront of technology.',
        buttonText: 'Apply for Admissions Now'
      },
      cta2: {
        title: 'Download Official Academic Prospectus',
        desc: 'Access complete details regarding degree pathways, applied industry curriculum, graduate employment outcomes, and enrollment requirements.',
        buttonText: 'Download Prospectus (PDF)',
        modalTitle: 'Download Academic Guide & Prospectus',
        modalDesc: 'Please provide your details below to receive a digital copy of the comprehensive curriculum and admission roadmap.',
        formNamePlaceholder: 'Full Name',
        formEmailPlaceholder: 'Email Address',
        formPhonePlaceholder: 'WhatsApp / Contact Phone',
        formSubmit: 'Submit & Download PDF',
        formSuccess: 'Thank you! Your academic prospectus download is ready.'
      }
    },
    footer: {
      tagline: 'Leading Applied Polytechnic Institute',
      address: 'Central Campus: Knowledge Hub Boulevard No. 1, Technology City 50275.',
      contact: 'Phone: +62 21 8088 5000 • Email: admissions@lorem-polytechnic.ac.id',
      colDepartmentsTitle: 'Academic Departments',
      colPortalsTitle: 'Services & Portals',
      newsletterTitle: 'Admissions Digest',
      newsletterDesc: 'Subscribe for verified notifications regarding admission testing schedules and application deadlines.',
      newsletterSuccess: 'Thank you! You have subscribed to admissions updates.',
      copyright: '© 2026 Lorem Polytechnic Institute. All Rights Reserved.'
    }
  }
};
