import type { ServicePageData } from "./types";

export const webDevelopmentId: ServicePageData = {
  slug: "jasa-pembuatan-website",
  category: "website",
  eyebrow: "Jasa Pembuatan Website",
  title: "Website yang Bikin Orang Percaya Sama Bisnis Kamu",
  subtitle: "Bukan sekadar website jadi. Kami bangun yang benar-benar dipakai, dilihat, dan dipercaya calon pelanggan.",
  heroIllustration: "/images/services/web-dev/hero-mockup.jpg",
  metaTitle: "Jasa Pembuatan Website Profesional & Terpercaya | Gilabs",
  metaDescription: "Bukan sekadar website jadi. Kami bangun website profesional berkecepatan tinggi yang benar-benar dipakai, dilihat, dan dipercaya calon pelanggan.",
  keywords: [
    "jasa pembuatan website",
    "jasa bikin website",
    "jasa buat web profesional",
    "pembuatan website bisnis",
    "website company profile",
    "landing page berkonversi",
    "web development indonesia"
  ],
  primaryCtaText: "Konsultasi Gratis Sekarang",
  secondaryCtaText: "Lihat Portofolio Kami",
  problemsTitle: "Website Kamu Sekarang Kayak Gimana?",
  problemsSubtitle: "Tiga hal ini yang paling sering bikin calon klien kabur duluan sebelum sempat kenal bisnismu.",
  problems: [
    {
      pain: "01. Lambat",
      solution: "Loading lebih dari 3 detik, orang udah keburu pindah ke kompetitor."
    },
    {
      pain: "02. Nggak Responsive",
      solution: "Buka di HP malah berantakan, padahal 80% pengunjung lewat mobile."
    },
    {
      pain: "03. Nggak Ada yang Convert",
      solution: "Ramai pengunjung tapi nol yang jadi pelanggan, ada yang salah di alurnya."
    }
  ],
  featuresTitle: "Kami Bangun dari Sisi Bisnis, Bukan Cuma Desain",
  featuresSubtitle: "Setiap section kami rancang buat jawab satu pertanyaan di kepala pengunjung: kenapa saya harus percaya sama bisnis ini?",
  features: [
    {
      title: "Desain yang Meyakinkan",
      description: "Tampilan bersih, fokus ke satu tujuan, nggak bikin bingung pengunjung."
    },
    {
      title: "Kecepatan Jadi Prioritas",
      description: "Loading di bawah 2 detik, teruji di Google PageSpeed."
    },
    {
      title: "SEO-Ready dari Awal",
      description: "Struktur sudah rapi buat mesin pencari sejak hari pertama online."
    }
  ],
  packagesTitle: "Investasi yang Jelas, Tanpa Biaya Tersembunyi",
  packagesSubtitle: "Pilihan paket fleksibel sesuai tahap pertumbuhan bisnis Anda.",
  packages: [
    {
      name: "BASIC",
      price: "Mulai Rp 5.000.000",
      description: "Cocok untuk UMKM yang baru mulai online",
      features: [
        "Landing page atau company profile sederhana",
        "Desain responsive",
        "Domain & hosting 1 tahun",
        "Revisi 2x"
      ]
    },
    {
      name: "STANDARD",
      price: "Mulai Rp 15.000.000",
      isPopular: true,
      description: "Untuk bisnis yang butuh kehadiran lebih lengkap",
      features: [
        "Website multi halaman (5-10 halaman)",
        "SEO on-page dasar",
        "Integrasi CMS, konten bisa kamu ubah sendiri",
        "Revisi 4x"
      ]
    },
    {
      name: "CUSTOM",
      price: "Hubungi Kami",
      description: "Untuk kebutuhan spesifik dan kompleks",
      features: [
        "Fitur sesuai kebutuhan bisnis",
        "Integrasi sistem pihak ketiga",
        "Skalabilitas jangka panjang",
        "Konsultasi dedicated"
      ]
    }
  ],
  techStackTitle: "Tech Stack Modern Berstandar Tinggi",
  techStackSubtitle: "Dibangun dengan arsitektur modern untuk kecepatan, keamanan, dan kehandalan.",
  techStack: [
    { name: "Next.js & Astro", category: "Frontend Framework", description: "Performa render instan, ramah SEO, dan efisiensi bandwidth." },
    { name: "Tailwind CSS", category: "Styling System", description: "Tampilan modern, rapi, dan konsisten di semua perangkat." },
    { name: "TypeScript", category: "Type Safety", description: "Kode bersih minim bug dan mudah dikembangkan jangka panjang." },
    { name: "Cloudflare CDN", category: "Infrastructure", description: "Distribusi konten global dengan proteksi keamanan DDoS tingkat lanjut." }
  ],
  faqTitle: "FAQ",
  faqSubtitle: "Pertanyaan yang sering ditanyakan seputar layanan pembuatan website kami.",
  faqs: [
    {
      question: "Berapa lama proses pengerjaan?",
      answer: "Rata-rata 2-4 minggu tergantung kompleksitas."
    },
    {
      question: "Apakah bisa request desain sendiri?",
      answer: "Bisa, kamu kirim referensi dan kami sesuaikan."
    },
    {
      question: "Setelah jadi, apakah ada garansi?",
      answer: "Ada garansi bug fixing 30 hari setelah website live."
    },
    {
      question: "Apakah harga sudah termasuk hosting?",
      answer: "Paket Basic dan Standard sudah termasuk domain dan hosting tahun pertama."
    }
  ],
  ctaTitle: "Website Kamu Bisa Online Minggu Depan",
  ctaSubtitle: "Nggak perlu mikir lama, konsultasi awal gratis dan nggak ada kewajiban lanjut.",
  ctaButton: "Mulai Konsultasi Gratis"
};
