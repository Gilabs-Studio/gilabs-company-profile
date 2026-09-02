export interface CityPageData {
  slug: string;
  cityName: string;
  isHq?: boolean;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroIllustration: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  localOverviewTitle: string;
  localOverviewText: string;
  localServices: { title: string; description: string }[];
  localAdvantagesTitle: string;
  localAdvantages: { title: string; description: string }[];
  addressInfo: {
    city: string;
    region: string;
    description: string;
  };
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
}

export const citiesDataId: Record<string, CityPageData> = {
  "jakarta": {
    slug: "jakarta",
    cityName: "Jakarta",
    eyebrow: "Software House & Web Developer Jakarta",
    title: "Jasa Pembuatan Website & Software House Profesional di Jakarta",
    subtitle: "Partner transformasi digital bagi korporat, B2B, manufaktur, dan startup di wilayah Jakarta & sekitarnya dengan standar engineering modern, reliabel, dan full source code.",
    heroIllustration: "/illustrations/local-city-sketch.png",
    metaTitle: "Software House Jakarta & Jasa Pembuatan Website Terbaik | Gilabs",
    metaDescription: "Jasa pembuatan website Jakarta, software house Jakarta untuk custom ERP, CRM, dan aplikasi mobile enterprise. Konsultasi tatap muka & online terpercaya.",
    keywords: [
      "software house jakarta",
      "jasa pembuatan website jakarta",
      "web developer jakarta",
      "jasa pembuatan aplikasi jakarta",
      "software house terdekat jakarta",
      "custom software jakarta"
    ],
    localOverviewTitle: "Solusi Teknologi untuk Dinamika Bisnis Jakarta",
    localOverviewText: "Sebagai pusat bisnis dan perekonomian nasional, perusahaan di Jakarta membutuhkan sistem digital yang tangguh, aman dari lonjakan beban, dan siap bersaing di pasar global. Gilabs menghadirkan solusi software kustom tanpa biaya lisensi per user yang membebani.",
    localServices: [
      { title: "Website Company Profile Korporasi", description: "Membangun kredibilitas B2B untuk kantor pusat, kontraktor, dan perusahaan multinasional di Jakarta." },
      { title: "Sistem ERP & CRM Terintegrasi", description: "Otomasi rantai pasok distribusi, monitoring sales lapangan Jabodetabek, dan akuntansi terpusat." },
      { title: "Aplikasi Mobile iOS & Android", description: "Pengembangan aplikasi pelanggan dan aplikasi internal perusahaan dengan teknologi Flutter." }
    ],
    localAdvantagesTitle: "Mengapa Perusahaan di Jakarta Memilih Gilabs?",
    localAdvantages: [
      { title: "Efisiensi Biaya Signifikan", description: "Dapatkan kualitas engineering berstandar enterprise dengan struktur biaya yang jauh lebih kompetitif dibanding agency Jakarta." },
      { title: "Konsultasi Fleksibel (Online & On-Site)", description: "Tim Solution Architect kami siap meeting langsung di kantor Anda di kawasan Sudirman, SCBD, Kuningan, maupun via video call rutin." },
      { title: "100% Full Source Code Ownership", description: "Kepemilikan penuh tanpa vendor lock-in untuk kepastian investasi jangka panjang." }
    ],
    addressInfo: {
      city: "Jakarta",
      region: "DKI Jakarta, Indonesia",
      description: "Melayani seluruh area Jakarta Pusat, Selatan, Barat, Timur, Utara, dan kawasan industri Jabodetabek."
    },
    faqTitle: "FAQ Layanan Jakarta",
    faqs: [
      {
        question: "Apakah tim Gilabs bisa meeting langsung di kantor kami di Jakarta?",
        answer: "Bisa. Kami secara berkala menjadwalkan kunjungan tatap muka untuk sesi requirement gathering dan kick-off proyek di Jakarta."
      }
    ],
    ctaTitle: "Mulai Proyek Software Anda di Jakarta",
    ctaSubtitle: "Jadwalkan sesi konsultasi gratis bersama Solution Architect Gilabs sekarang.",
    ctaButton: "Hubungi Tim Jakarta via WhatsApp"
  },
  "semarang": {
    slug: "semarang",
    cityName: "Semarang",
    isHq: true,
    eyebrow: "Kantor Pusat Gilabs (Headquarters)",
    title: "Software House & Jasa Pembuatan Website Terbaik di Semarang",
    subtitle: "Pusat inovasi engineering PT Griya Innovations Labs. Melayani instansi, industri manufaktur, distributor, dan bisnis modern di Semarang & Jawa Tengah.",
    heroIllustration: "/illustrations/local-city-sketch.png",
    metaTitle: "Software House Semarang & Jasa Pembuatan Website Terbaik | Gilabs HQ",
    metaDescription: "Kantor pusat software house Semarang: PT Griya Innovations Labs. Jasa pembuatan website, custom ERP manufaktur, CRM, dan sistem informasi Jawa Tengah.",
    keywords: [
      "software house semarang",
      "jasa pembuatan website semarang",
      "web developer semarang",
      "jasa bikin web semarang",
      "jasa pembuatan aplikasi semarang",
      "software house jawa tengah"
    ],
    localOverviewTitle: "Pusat R&D dan Kantor Utama Gilabs di Semarang",
    localOverviewText: "Berkantor pusat di Semarang, PT Griya Innovations Labs telah dipercaya puluhan perusahaan lokal dan nasional dalam mendigitalisasi proses kerja manufaktur, koperasi, retail, dan korporasi.",
    localServices: [
      { title: "ERP Manufaktur & Pabrik Jawa Tengah", description: "Sistem tracking produksi lantai pabrik, inventory bahan baku, dan monitoring efisiensi mesin (OEE)." },
      { title: "Website Company Profile & Tender B2B", description: "Mendongkrak reputasi dan profil digital perusahaan manufaktur dan kontraktor di kawasan industri Semarang." },
      { title: "Sistem Informasi Koperasi & Kasir POS", description: "Digitalisasi koperasi simpan pinjam dan jaringan toko retail di seluruh wilayah Jawa Tengah." }
    ],
    localAdvantagesTitle: "Keunggulan Gilabs HQ Semarang",
    localAdvantages: [
      { title: "Pertemuan Tatap Muka Kapan Saja", description: "Kunjungi kantor kami di Semarang atau kami yang datang ke kantor/pabrik Anda untuk diskusi langsung." },
      { title: "Dukungan Teknis On-Site Cepat", description: "Tim support siap diterjunkan langsung ke lokasi operasional Anda untuk pelatihan staf dan troubleshooting." }
    ],
    addressInfo: {
      city: "Semarang",
      region: "Jawa Tengah, Indonesia",
      description: "Kantor Pusat PT Griya Innovations Labs di Semarang, melayani seluruh kawasan industri Simongan, Candi, Wijayakusuma, Kendal, Demak, dan sekitarnya."
    },
    faqTitle: "FAQ Layanan Semarang",
    faqs: [
      {
        question: "Bisa datang langsung ke kantor Gilabs di Semarang?",
        answer: "Sangat bisa. Silakan buat janji temu melalui WhatsApp untuk berdiskusi langsung di kantor kami bersama tim lead engineer."
      }
    ],
    ctaTitle: "Kunjungi Kantor Kami di Semarang",
    ctaSubtitle: "Mari berdiskusi langsung di Semarang untuk mewujudkan transformasi digital bisnis Anda.",
    ctaButton: "Jadwalkan Kunjungan via WhatsApp"
  },
  "surabaya": {
    slug: "surabaya",
    cityName: "Surabaya",
    eyebrow: "Software House & Web Developer Surabaya",
    title: "Jasa Pembuatan Website & Software House Terpercaya di Surabaya",
    subtitle: "Mendukung percepatan digitalisasi bisnis distributor, logistik pelabuhan, dan industri manufaktur di Surabaya, Sidoarjo, Gresik, dan Indonesia Timur.",
    heroIllustration: "/illustrations/local-city-sketch.png",
    metaTitle: "Software House Surabaya & Jasa Pembuatan Website Murah | Gilabs",
    metaDescription: "Jasa pembuatan website Surabaya, software house Surabaya untuk ERP logistik distributor, web e-commerce, dan aplikasi mobile Jawa Timur.",
    keywords: [
      "software house surabaya",
      "jasa pembuatan website surabaya",
      "web developer surabaya",
      "jasa pembuatan aplikasi surabaya",
      "software house jawa timur"
    ],
    localOverviewTitle: "Partner Digitalisasi Bisnis Jawa Timur",
    localOverviewText: "Surabaya sebagai hub perdagangan utama Indonesia Timur menuntut sistem rantai pasok dan pencatatan inventaris yang akurat. Gilabs menyediakan custom software yang terhubung langsung dengan alur logistik Anda.",
    localServices: [
      { title: "Software Distributor & Logistik", description: "Monitoring armada ekspedisi, multi-warehouse Surabaya-Gresik-Sidoarjo, dan order sales taking." },
      { title: "Website Company Profile & E-Commerce", description: "Etalase digital berkecepatan tinggi untuk menjangkau pembeli B2B dan ritel." }
    ],
    localAdvantagesTitle: "Mengapa Memilih Gilabs di Surabaya?",
    localAdvantages: [
      { title: "Sistem Terbukti untuk Distribusi Skala Besar", description: "Pengalaman dalam menangani transaksi jutaan item gudang tanpa downtime." }
    ],
    addressInfo: {
      city: "Surabaya",
      region: "Jawa Timur, Indonesia",
      description: "Melayani area Surabaya, Sidoarjo, Gresik, Mojokerto, Pasuruan, dan kota-kota di Jawa Timur."
    },
    faqTitle: "FAQ Layanan Surabaya",
    faqs: [
      {
        question: "Apakah sistem mendukung alur kerja distributor multi cabang?",
        answer: "Ya, sistem kami dirancang khusus untuk konsolidasi stok dan penjualan lintas cabang real-time."
      }
    ],
    ctaTitle: "Kembangkan Bisnis Anda di Surabaya",
    ctaSubtitle: "Konsultasikan kebutuhan software perusahaan Anda bersama tim Gilabs.",
    ctaButton: "Hubungi Tim Surabaya via WhatsApp"
  },
  "bandung": {
    slug: "bandung",
    cityName: "Bandung",
    eyebrow: "Software House & Web Developer Bandung",
    title: "Jasa Pembuatan Website & Custom Software Kreatif di Bandung",
    subtitle: "Membangun website modern, aplikasi mobile, dan sistem bisnis untuk industri kreatif, tekstil, pariwisata, dan instansi di Bandung Raya.",
    heroIllustration: "/illustrations/local-city-sketch.png",
    metaTitle: "Software House Bandung & Jasa Pembuatan Website | Gilabs",
    metaDescription: "Jasa pembuatan website Bandung, software house Bandung untuk aplikasi mobile, custom software pabrik tekstil, dan web e-commerce brand.",
    keywords: [
      "software house bandung",
      "jasa pembuatan website bandung",
      "web developer bandung",
      "jasa aplikasi mobile bandung"
    ],
    localOverviewTitle: "Inovasi Digital untuk Industri Bandung",
    localOverviewText: "Kombinasi desain UI/UX berkelas dan arsitektur backend tangguh untuk bisnis modern di Bandung.",
    localServices: [
      { title: "Website Brand & E-Commerce Kustom", description: "Toko online modern untuk brand fashion, kuliner, dan produk kreatif." },
      { title: "ERP Industri Tekstil & Manufaktur", description: "Sistem tracking bahan baku, proses celup/potong, dan inventaris garment." }
    ],
    localAdvantagesTitle: "Keunggulan Layanan Gilabs Bandung",
    localAdvantages: [
      { title: "Desain UI/UX Eksklusif", description: "Tampilan website yang modern, interaktif, dan berkelas estetika tinggi." }
    ],
    addressInfo: {
      city: "Bandung",
      region: "Jawa Barat, Indonesia",
      description: "Melayani Kota Bandung, Cimahi, Kabupaten Bandung Barat, dan kawasan industri sekitarnya."
    },
    faqTitle: "FAQ Layanan Bandung",
    faqs: [
      {
        question: "Apakah bisa membuat aplikasi custom untuk pabrik garmen?",
        answer: "Tentu. Kami memiliki modul khusus pelacakan batch produksi garmen dan manajemen bahan baku."
      }
    ],
    ctaTitle: "Mulai Digitalisasi Bisnis Anda di Bandung",
    ctaSubtitle: "Diskusikan proyek Anda bersama tim Gilabs secara gratis.",
    ctaButton: "Hubungi Kami via WhatsApp"
  },
  "yogyakarta": {
    slug: "yogyakarta",
    cityName: "Yogyakarta",
    eyebrow: "Software House & Web Developer Jogja",
    title: "Jasa Pembuatan Website & Software House di Yogyakarta",
    subtitle: "Partner teknologi terpercaya untuk instansi pendidikan, perhotelan, UMKM unggulan, dan startup di Yogyakarta.",
    heroIllustration: "/illustrations/local-city-sketch.png",
    metaTitle: "Software House Jogja & Jasa Pembuatan Website Yogyakarta | Gilabs",
    metaDescription: "Jasa pembuatan website Jogja, software house Yogyakarta untuk sistem informasi kampus, platform pariwisata, dan aplikasi mobile.",
    keywords: [
      "software house jogja",
      "software house yogyakarta",
      "jasa pembuatan website jogja",
      "web developer jogja",
      "jasa bikin web yogyakarta"
    ],
    localOverviewTitle: "Solusi Teknologi untuk Yogyakarta",
    localOverviewText: "Mendukung pertumbuhan ekosistem digital Yogyakarta dengan sistem informasi berkinerja tinggi.",
    localServices: [
      { title: "Sistem Informasi Akademik & Portal Kampus", description: "Platform manajemen data mahasiswa, magang, dan e-learning." },
      { title: "Website Hospitality & Reservasi", description: "Sistem booking kamar dan paket wisata terintegrasi payment gateway." }
    ],
    localAdvantagesTitle: "Mengapa Bermitra dengan Gilabs di Jogja?",
    localAdvantages: [
      { title: "Akses Dekat dari Semarang", description: "Hanya 2 jam perjalanan untuk koordinasi tatap muka dan pelatihan langsung." }
    ],
    addressInfo: {
      city: "Yogyakarta",
      region: "DI Yogyakarta, Indonesia",
      description: "Melayani Kota Jogja, Sleman, Bantul, Kulon Progo, dan Gunungkidul."
    },
    faqTitle: "FAQ Layanan Yogyakarta",
    faqs: [
      {
        question: "Apakah melayani pembuatan sistem untuk instansi pendidikan?",
        answer: "Ya, kami berpengalaman membangun portal magang (Sitama) dan platform asesmen edukasi berbasis AI."
      }
    ],
    ctaTitle: "Wujudkan Sistem Digital Anda di Yogyakarta",
    ctaSubtitle: "Hubungi tim engineering Gilabs untuk konsultasi solusi.",
    ctaButton: "Konsultasi Jogja via WhatsApp"
  }
};
