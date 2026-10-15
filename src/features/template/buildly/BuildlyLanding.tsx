import React, { useState } from "react";
import {
  ArrowRight,
  Shield,
  MapPin,
  Leaf,
  Home,
  Building2,
  Paintbrush,
  Compass,
  Star,
  Search,
  Menu,
  X,
  Instagram,
  Linkedin,
  Youtube,
  MessageSquare,
  Sparkles,
  Headphones,
} from "lucide-react";

interface BuildlyLandingProps {
  lang?: "id" | "en";
}

export default function BuildlyLanding({ lang = "id" }: BuildlyLandingProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const isEn = lang === "en";

  const texts = {
    brand: "buildly",
    nav: {
      beranda: isEn ? "Home" : "Beranda",
      proyek: isEn ? "Proyek" : "Proyek",
      layanan: isEn ? "Layanan" : "Layanan",
      tentang: isEn ? "Tentang" : "Tentang",
      karir: isEn ? "Karir" : "Karir",
      hubungiKami: isEn ? "Contact Us" : "Hubungi Kami",
    },
    hero: {
      line1Prefix: isEn ? "Build" : "Bangun",
      line1Suffix: isEn ? "future" : "masa depan",
      line2: isEn ? "with strong" : "dengan fondasi",
      line3: isEn ? "foundations" : "yang kuat",
      subtitle: isEn
        ? "Buildly is a property contractor and developer delivering modern, efficient, and trusted construction solutions for your home and business."
        : "Buildly adalah kontraktor dan pengembang properti yang menghadirkan solusi pembangunan modern, efisien, dan terpercaya untuk hunian dan bisnis Anda.",
      pill1Title: isEn ? "High Quality" : "Berkualitas",
      pill1Sub: isEn ? "Trusted" : "Terpercaya",
      pill2Title: isEn ? "On-Time" : "Tepat Waktu",
      pill2Sub: isEn ? "& Transparent" : "& Transparan",
      pill3Title: isEn ? "Sustainable" : "Berkelanjutan",
      pill3Sub: isEn ? "for the Future" : "untuk Masa Depan",
    },
    about: {
      badge: isEn ? "About Buildly" : "Tentang Buildly",
      title: isEn ? "From vision, into real space" : "Dari visi, menjadi ruang nyata",
      description: isEn
        ? "We build more than just structures. We create spaces to live, work, and grow with the highest quality standards, modern technology, and an experienced professional team."
        : "Kami membangun lebih dari sekadar bangunan. Kami menciptakan ruang hidup, bekerja, dan bertumbuh dengan standar kualitas tinggi, teknologi modern, serta tim profesional yang berpengalaman.",
      button: isEn ? "Learn more" : "Pelajari lebih lanjut",
      progressTag: isEn ? "Project in progress" : "Proyek dalam progres",
    },
    services: {
      badge: isEn ? "Our Services" : "Layanan Kami",
      titleLine1: isEn ? "Complete solutions for" : "Solusi lengkap untuk",
      titleLine2: isEn ? "all your property needs" : "setiap kebutuhan properti Anda",
      link: isEn ? "View all services" : "Lihat semua layanan",
      items: [
        {
          id: "konstruksi",
          title: isEn ? "Building Construction" : "Konstruksi Bangunan",
          description: isEn
            ? "Construction of residential homes, offices, commercial shophouses, and public facilities with premium standards."
            : "Pembangunan rumah, gedung kantor, ruko, dan fasilitas komersial dengan standar terbaik.",
          icon: Home,
        },
        {
          id: "pengembangan",
          title: isEn ? "Property Development" : "Pengembangan Properti",
          description: isEn
            ? "From initial planning to final handover, we manage every stage with professional diligence."
            : "Dari perencanaan hingga serah terima, kami mengelola setiap tahap dengan profesional.",
          icon: Building2,
        },
        {
          id: "renovasi",
          title: isEn ? "Renovation & Interior" : "Renovasi & Interior",
          description: isEn
            ? "Elevating functional value and aesthetic appeal with modern design and meticulous craftsmanship."
            : "Meningkatkan fungsi dan nilai properti Anda dengan desain modern dan pengerjaan rapi.",
          icon: Paintbrush,
        },
        {
          id: "konsultasi",
          title: isEn ? "Consultation & Planning" : "Konsultasi & Perencanaan",
          description: isEn
            ? "Precise architectural planning, budget transparency, and tailored solutions for your requirements."
            : "Solusi perencanaan yang tepat, efisien, dan sesuai dengan kebutuhan Anda.",
          icon: Compass,
        },
      ],
    },
    projects: {
      badge: isEn ? "Featured Projects" : "Proyek Pilihan",
      titleLine1: isEn ? "Tangible craft, for" : "Karya nyata, untuk",
      titleLine2: isEn ? "a better future" : "masa depan yang lebih baik",
      link: isEn ? "View all projects" : "Lihat semua proyek",
      items: [
        {
          id: "aurora",
          tag: "Residential",
          title: "The Aurora Residence",
          location: "Jakarta Selatan",
          image: "/templates/buildly/project-aurora.webp",
        },
        {
          id: "nusantara",
          tag: "Commercial",
          title: "Nusantara Office Park",
          location: "Jakarta Pusat",
          image: "/templates/buildly/project-nusantara.webp",
        },
        {
          id: "lakeside",
          tag: "Residential",
          title: "Lakeside Living",
          location: "Tangerang",
          image: "/templates/buildly/project-lakeside.webp",
        },
      ],
    },
    stats: {
      badge: isEn ? "Our Numbers" : "Angka Kami",
      titleLine1: isEn ? "With experience" : "Dengan pengalaman",
      titleLine2: isEn ? "and commitment, we continue" : "dan komitmen, kami terus",
      titleLine3: isEn ? "to build lasting trust." : "membangun kepercayaan.",
      metrics: [
        {
          value: "250+",
          label: isEn ? "Completed Projects" : "Proyek Selesai",
          sub: isEn ? "Through 2024" : "Hingga 2024",
        },
        {
          value: "15+",
          label: isEn ? "Years Experience" : "Tahun Pengalaman",
          sub: isEn ? "In Industry" : "Dalam Industri",
        },
        {
          value: "98%",
          label: isEn ? "Client Satisfaction" : "Kepuasan Klien",
          sub: isEn ? "From latest survey" : "Dari survei terbaru",
        },
      ],
    },
    testimonials: {
      badge: isEn ? "Testimonials" : "Testimoni",
      title: isEn ? "What do our clients say?" : "Apa kata klien kami?",
      link: isEn ? "View all testimonials" : "Lihat semua testimoni",
      items: [
        {
          id: "andi",
          quote:
            '"Buildly benar-benar profesional dari awal hingga akhir. Hasilnya sesuai harapan dan selesai tepat waktu."',
          name: "Andi Pratama",
          role: "Pemilik Rumah",
          avatar: "/templates/buildly/avatar-andi.webp",
        },
        {
          id: "sari",
          quote:
            '"Timnya sangat responsif dan detail dalam bekerja. Kami sangat puas dengan hasilnya."',
          name: "Sari Dewi",
          role: "Pengusaha",
          avatar: "/templates/buildly/avatar-sari.webp",
        },
        {
          id: "rizky",
          quote:
            '"Kualitas bangunan dan pelayanan yang diberikan sangat luar biasa. Recommended!"',
          name: "Rizky Aditya",
          role: "CEO Perusahaan",
          avatar: "/templates/buildly/avatar-rizky.webp",
        },
      ],
    },
    cta: {
      title: isEn ? "Ready to build your project?" : "Siap membangun proyek Anda?",
      subtitle: isEn
        ? "Contact us now for a complimentary consultation and realize your dream property together with Buildly."
        : "Hubungi kami sekarang untuk konsultasi gratis dan wujudkan properti impian Anda bersama Buildly.",
      button: isEn ? "Contact Us" : "Hubungi Kami",
      badgeTitle: isEn ? "Free consultation" : "Konsultasi gratis",
      badgeSub: isEn ? "No additional fees" : "Tanpa biaya tambahan",
    },
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      isEn
        ? "Hello Buildly, I would like to consult about construction and property development."
        : "Halo Buildly, saya ingin konsultasi mengenai rencana pembangunan proyek properti bersama Buildly."
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  return (
    <div
      className="min-h-screen text-[#0B0B0F] antialiased"
      style={{
        backgroundColor: "#F8F8FC",
        fontFamily:
          '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* 01. HEADER / NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100/90 transition-all">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 h-[72px] flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#beranda"
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
              style={{ backgroundColor: "#ECE8FF" }}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5B46E5"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="text-xl font-medium tracking-tight text-[#0B0B0F]">
              {texts.brand}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#beranda"
              className="text-sm font-medium text-[#475467] hover:text-[#0B0B0F] transition-colors cursor-pointer"
            >
              {texts.nav.beranda}
            </a>
            <a
              href="#proyek"
              className="text-sm font-medium text-[#475467] hover:text-[#0B0B0F] transition-colors cursor-pointer"
            >
              {texts.nav.proyek}
            </a>
            <a
              href="#layanan"
              className="text-sm font-medium text-[#475467] hover:text-[#0B0B0F] transition-colors cursor-pointer"
            >
              {texts.nav.layanan}
            </a>
            <a
              href="#tentang"
              className="text-sm font-medium text-[#475467] hover:text-[#0B0B0F] transition-colors cursor-pointer"
            >
              {texts.nav.tentang}
            </a>
            <a
              href="#karir"
              className="text-sm font-medium text-[#475467] hover:text-[#0B0B0F] transition-colors cursor-pointer"
            >
              {texts.nav.karir}
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setContactModalOpen(true)}
              className="w-9 h-9 rounded-full border border-slate-200/80 flex items-center justify-center text-[#475467] hover:text-[#0B0B0F] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={openWhatsApp}
              className="text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full text-white transition-all hover:opacity-90 active:scale-95 cursor-pointer shadow-xs"
              style={{ backgroundColor: "#0B0B0F" }}
            >
              {texts.nav.hubungiKami}
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-700 cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
            <a
              href="#beranda"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#475467] py-1"
            >
              {texts.nav.beranda}
            </a>
            <a
              href="#proyek"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#475467] py-1"
            >
              {texts.nav.proyek}
            </a>
            <a
              href="#layanan"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#475467] py-1"
            >
              {texts.nav.layanan}
            </a>
            <a
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#475467] py-1"
            >
              {texts.nav.tentang}
            </a>
            <a
              href="#karir"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#475467] py-1"
            >
              {texts.nav.karir}
            </a>
            <button
              type="button"
              onClick={openWhatsApp}
              className="w-full mt-2 text-xs font-medium py-2.5 rounded-full text-white bg-[#0B0B0F] text-center"
            >
              {texts.nav.hubungiKami}
            </button>
          </div>
        )}
      </header>

      {/* 02. HERO SECTION (FULL WINDOW VIEWPORT, PROPORTIONAL 1-BACKGROUND CANVAS) */}
      <section
        id="beranda"
        className="relative overflow-hidden flex items-center min-h-[calc(100vh-72px)]"
      >
        {/* Unified 3D Illustration Canvas - tightly anchored and filling right 58% */}
        <div
          className="absolute right-0 top-0 bottom-0 pointer-events-none z-0 hidden lg:flex items-center justify-end"
          style={{ width: "58%" }}
          aria-hidden="true"
        >
          <img
            src="/templates/buildly/hero-3d.webp"
            alt=""
            className="w-full max-h-[85vh] object-contain object-right"
          />
        </div>

        {/* Content Container Sitting on the Unified Background */}
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 w-full py-12 lg:py-16 relative z-10">
          <div className="max-w-[580px] lg:max-w-[620px]">
            {/* Main Headline with Inline Squircle Badge */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-medium text-[#0B0B0F] tracking-tight leading-[1.14]">
              <span>{texts.hero.line1Prefix}</span>{" "}
              <span
                className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl align-middle mx-1 shadow-xs"
                style={{ backgroundColor: "#ECE8FF" }}
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5B46E5"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </span>{" "}
              <span>{texts.hero.line1Suffix}</span>
              <br />
              <span>{texts.hero.line2}</span>
              <br />
              <span>{texts.hero.line3}</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-[#52525B] leading-relaxed max-w-[500px]">
              {texts.hero.subtitle}
            </p>

            {/* 3 Value Proposition Feature Badges (Pills) */}
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-3">
              {/* Badge 1 */}
              <div className="bg-white border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] rounded-full py-2.5 px-4 flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#ECE8FF", color: "#5B46E5" }}
                >
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <div className="leading-tight">
                  <span className="text-xs font-medium text-[#0B0B0F] block">
                    {texts.hero.pill1Title}
                  </span>
                  <span className="text-[10px] text-[#64748B] block">
                    {texts.hero.pill1Sub}
                  </span>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="bg-white border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] rounded-full py-2.5 px-4 flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#E0F2FE", color: "#0284C7" }}
                >
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="leading-tight">
                  <span className="text-xs font-medium text-[#0B0B0F] block">
                    {texts.hero.pill2Title}
                  </span>
                  <span className="text-[10px] text-[#64748B] block">
                    {texts.hero.pill2Sub}
                  </span>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="bg-white border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] rounded-full py-2.5 px-4 flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#DCFCE7", color: "#16A34A" }}
                >
                  <Leaf className="w-3.5 h-3.5" />
                </div>
                <div className="leading-tight">
                  <span className="text-xs font-medium text-[#0B0B0F] block">
                    {texts.hero.pill3Title}
                  </span>
                  <span className="text-[10px] text-[#64748B] block">
                    {texts.hero.pill3Sub}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Visual Fallback */}
          <div className="mt-10 block lg:hidden">
            <img
              src="/templates/buildly/hero-3d.webp"
              alt="Buildly 3D Construction Model"
              className="w-full max-w-lg mx-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* 03. ABOUT SECTION (FULL WINDOW FEEL, 100% BORDERLESS CARD) */}
      <section id="tentang" className="min-h-[calc(100vh-72px)] flex items-center py-20 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: 100% BORDERLESS 3D Architectural Model Card with Floating Pill */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full shadow-md">
              <img
                src="/templates/buildly/about-model.webp"
                alt="3D Architectural Neighborhood Model"
                className="w-full h-full object-cover"
              />

              {/* Top-Left Floating Badge: Proyek dalam progres */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-xs shadow-md rounded-full py-2 pl-4 pr-2 flex items-center gap-2.5">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: "#5B46E5" }}
                />
                <span className="text-xs font-medium text-[#0B0B0F]">
                  {texts.about.progressTag}
                </span>
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
                  style={{ backgroundColor: "#ECE8FF", color: "#5B46E5" }}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Right: Editorial Copywriting & Button */}
            <div className="lg:pl-6">
              <span
                className="text-xs font-semibold px-3.5 py-1.5 rounded-full inline-block mb-4"
                style={{ backgroundColor: "#ECE8FF", color: "#5B46E5" }}
              >
                {texts.about.badge}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium text-[#0B0B0F] tracking-tight leading-[1.15] mb-6">
                {texts.about.title}
              </h2>

              <p className="text-base sm:text-lg text-[#52525B] leading-relaxed mb-8 max-w-xl">
                {texts.about.description}
              </p>

              <button
                type="button"
                onClick={openWhatsApp}
                className="text-sm font-semibold px-7 py-3.5 rounded-full text-white inline-flex items-center gap-2.5 transition-all hover:opacity-90 active:scale-95 cursor-pointer shadow-xs"
                style={{ backgroundColor: "#0B0B0F" }}
              >
                <span>{texts.about.button}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 04. SERVICES SECTION (FULL WINDOW FEEL, PURE WHITE CARDS ON TINTED BG) */}
      <section id="layanan" className="min-h-screen flex flex-col justify-center py-20 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 lg:mb-14">
            <div>
              <span
                className="text-xs font-semibold px-3.5 py-1.5 rounded-full inline-block mb-3"
                style={{ backgroundColor: "#ECE8FF", color: "#5B46E5" }}
              >
                {texts.services.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#0B0B0F] tracking-tight leading-[1.15]">
                {texts.services.titleLine1}
                <br className="hidden sm:inline" />{" "}
                {texts.services.titleLine2}
              </h2>
            </div>

            <a
              href="#layanan"
              className="text-sm font-medium text-[#475467] hover:text-[#0B0B0F] flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>{texts.services.link}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {texts.services.items.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-7 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100/60 flex flex-col justify-between hover:border-purple-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: "#ECE8FF", color: "#5B46E5" }}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-medium text-[#0B0B0F] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-8">
                      {item.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={openWhatsApp}
                    aria-label={`Pilih layanan ${item.title}`}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-slate-700 hover:text-[#5B46E5] hover:bg-[#ECE8FF] transition-colors cursor-pointer mt-auto"
                    style={{ backgroundColor: "#F4F4F7" }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05. PROJECTS SECTION (FULL WINDOW FEEL, PURE WHITE CARDS ON TINTED BG) */}
      <section id="proyek" className="min-h-screen flex flex-col justify-center py-20 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 lg:mb-14">
            <div>
              <span
                className="text-xs font-semibold px-3.5 py-1.5 rounded-full inline-block mb-3"
                style={{ backgroundColor: "#ECE8FF", color: "#5B46E5" }}
              >
                {texts.projects.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#0B0B0F] tracking-tight leading-[1.15]">
                {texts.projects.titleLine1}
                <br className="hidden sm:inline" />{" "}
                {texts.projects.titleLine2}
              </h2>
            </div>

            <a
              href="#proyek"
              className="text-sm font-medium text-[#475467] hover:text-[#0B0B0F] flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>{texts.projects.link}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {texts.projects.items.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100/60 p-4 pb-5 hover:border-purple-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3.5 left-3.5">
                    <span
                      className="text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-xs"
                      style={{ backgroundColor: "#ECE8FF", color: "#5B46E5" }}
                    >
                      {proj.tag}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 px-1.5">
                  <div>
                    <h3 className="text-base font-medium text-[#0B0B0F] leading-tight">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-[#64748B] flex items-center gap-1 mt-1.5">
                      <MapPin className="w-3 h-3 text-[#64748B]" />
                      <span>{proj.location}</span>
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={openWhatsApp}
                    aria-label={`Detail ${proj.title}`}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-slate-700 hover:text-[#5B46E5] hover:bg-[#ECE8FF] transition-colors cursor-pointer shrink-0"
                    style={{ backgroundColor: "#F4F4F7" }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. STATS SECTION (GENEROUS PADDING CONTAINER) */}
      <section id="angka" className="py-16 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 w-full">
          <div
            className="rounded-3xl p-10 sm:p-14 lg:p-16 border border-[#ECE8FF] flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-14 shadow-xs"
            style={{ backgroundColor: "#F1EFF9" }}
          >
            <div className="max-w-md">
              <span
                className="text-xs font-semibold px-3.5 py-1.5 rounded-full inline-block mb-3.5"
                style={{ backgroundColor: "#ECE8FF", color: "#5B46E5" }}
              >
                {texts.stats.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-medium text-[#0B0B0F] tracking-tight leading-[1.2]">
                {texts.stats.titleLine1}
                <br className="hidden sm:inline" />{" "}
                {texts.stats.titleLine2}
                <br className="hidden sm:inline" />{" "}
                {texts.stats.titleLine3}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-10 flex-1 max-w-xl">
              {texts.stats.metrics.map((metric, idx) => (
                <React.Fragment key={metric.label}>
                  <div className="space-y-1.5">
                    <div className="text-4xl sm:text-5xl lg:text-[52px] font-medium text-[#0B0B0F] tracking-tight leading-none">
                      {metric.value}
                    </div>
                    <div className="text-sm font-medium text-[#0B0B0F]">
                      {metric.label}
                    </div>
                    <div className="text-xs text-[#64748B]">
                      {metric.sub}
                    </div>
                  </div>

                  {idx < texts.stats.metrics.length - 1 && (
                    <div className="hidden sm:block w-px h-20 bg-slate-200/90" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07. TESTIMONIALS SECTION (FULL WINDOW FEEL, PURE WHITE CARDS) */}
      <section id="testimoni" className="min-h-screen flex flex-col justify-center py-20 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 lg:mb-14">
            <div>
              <span
                className="text-xs font-semibold px-3.5 py-1.5 rounded-full inline-block mb-3"
                style={{ backgroundColor: "#ECE8FF", color: "#5B46E5" }}
              >
                {texts.testimonials.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#0B0B0F] tracking-tight leading-[1.15]">
                {texts.testimonials.title}
              </h2>
            </div>

            <a
              href="#testimoni"
              className="text-sm font-medium text-[#475467] hover:text-[#0B0B0F] flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>{texts.testimonials.link}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {texts.testimonials.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-7 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100/60 flex flex-col justify-between hover:border-purple-200 hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-sm sm:text-base text-[#475467] leading-relaxed mb-8 font-normal">
                  {item.quote}
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                    <div>
                      <div className="text-sm font-medium text-[#0B0B0F]">
                        {item.name}
                      </div>
                      <div className="text-xs text-[#64748B]">
                        {item.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-[#5B46E5]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#5B46E5] text-[#5B46E5]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. CTA SECTION (FULL CITY IMAGE ON LEFT, MATCHING REFERENCE) */}
      <section id="cta" className="py-12 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 w-full">
          <div
            className="rounded-3xl border border-[#ECE8FF] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between shadow-xs"
            style={{ backgroundColor: "#F1EFF9" }}
          >
            {/* Left: 3D Modern City Image - Full height from top to bottom on left */}
            <div className="relative w-full lg:absolute lg:left-0 lg:top-0 lg:bottom-0 lg:w-[37%] h-56 sm:h-64 lg:h-full overflow-hidden pointer-events-none z-0">
              <img
                src="/templates/buildly/cta-buildings.webp"
                alt="3D Cluster of modern buildings"
                className="w-full h-full object-cover object-left"
              />
            </div>

            {/* Spacer for desktop layout so content doesn't overlap the left city */}
            <div className="hidden lg:block lg:w-[36%] shrink-0" aria-hidden="true" />

            {/* Middle: Editorial Text & Action */}
            <div className="flex-1 py-7 lg:py-9 px-6 sm:px-8 lg:px-4 text-center lg:text-left z-10">
              <h2 className="text-xl sm:text-2xl lg:text-[25px] font-medium text-[#0B0B0F] tracking-tight leading-[1.25] mb-2.5">
                {isEn ? (
                  <>
                    Ready to build
                    <br className="hidden sm:inline" /> your project?
                  </>
                ) : (
                  <>
                    Siap membangun
                    <br className="hidden sm:inline" /> proyek Anda?
                  </>
                )}
              </h2>
              <p className="text-xs sm:text-[13px] text-[#475467] leading-relaxed mb-5 max-w-sm mx-auto lg:mx-0">
                {isEn ? (
                  <>
                    Contact us now for a complimentary consultation
                    <br className="hidden sm:inline" /> and realize your dream property together with Buildly.
                  </>
                ) : (
                  <>
                    Hubungi kami sekarang untuk konsultasi gratis
                    <br className="hidden sm:inline" /> dan wujudkan properti impian Anda bersama Buildly.
                  </>
                )}
              </p>
              <button
                type="button"
                onClick={openWhatsApp}
                className="text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full text-white inline-flex items-center gap-2 transition-all hover:opacity-90 active:scale-95 cursor-pointer shadow-xs bg-[#0B0B0F]"
              >
                <span>{texts.cta.button}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right: Floating Pill Badge with Headphones */}
            <div className="px-6 pb-6 lg:pb-0 lg:px-8 xl:px-12 lg:py-8 shrink-0 z-10 flex justify-center">
              <div className="bg-white rounded-full py-2.5 px-5 border border-purple-100 shadow-sm flex items-center gap-3 shrink-0">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#ECE8FF", color: "#5B46E5" }}
                >
                  <Headphones className="w-4 h-4" />
                </div>
                <div className="leading-tight text-left">
                  <span className="text-xs font-medium text-[#0B0B0F] block">
                    {texts.cta.badgeTitle}
                  </span>
                  <span className="text-[10px] text-[#64748B] block mt-0.5">
                    {texts.cta.badgeSub}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 09. FOOTER */}
      <footer className="border-t border-slate-200/60 py-10 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#ECE8FF" }}
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5B46E5"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="text-lg font-medium tracking-tight text-[#0B0B0F]">
              {texts.brand}
            </span>
          </div>

          <div className="flex items-center gap-7 text-sm text-[#64748B] font-medium">
            <a href="#beranda" className="hover:text-[#0B0B0F] transition-colors">
              {texts.nav.beranda}
            </a>
            <a href="#proyek" className="hover:text-[#0B0B0F] transition-colors">
              {texts.nav.proyek}
            </a>
            <a href="#layanan" className="hover:text-[#0B0B0F] transition-colors">
              {texts.nav.layanan}
            </a>
            <a href="#tentang" className="hover:text-[#0B0B0F] transition-colors">
              {texts.nav.tentang}
            </a>
            <a href="#karir" className="hover:text-[#0B0B0F] transition-colors">
              {texts.nav.karir}
            </a>
          </div>

          <div className="flex items-center gap-5 text-slate-700">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#5B46E5] transition-colors cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#5B46E5] transition-colors cursor-pointer"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-[#5B46E5] transition-colors cursor-pointer"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-[#5B46E5] transition-colors cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Contact Consultation Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-100 relative">
            <button
              type="button"
              onClick={() => setContactModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#ECE8FF", color: "#5B46E5" }}
              >
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-medium text-[#0B0B0F]">
                  {isEn ? "Contact Buildly" : "Konsultasi Bersama Buildly"}
                </h4>
                <p className="text-xs text-[#64748B]">
                  {isEn
                    ? "Direct communication via WhatsApp"
                    : "Terhubung langsung via WhatsApp"}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#475467] leading-relaxed mb-6">
              {isEn
                ? "Discuss your property construction, interior renovation, or architectural planning directly with our expert engineers."
                : "Diskusikan rencana pembangunan hunian, ruko, kantor, atau renovasi interior Anda bersama konsultan teknik kami tanpa biaya komitmen awal."}
            </p>

            <button
              type="button"
              onClick={openWhatsApp}
              className="w-full text-xs sm:text-sm font-semibold py-3 rounded-full text-white flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              style={{ backgroundColor: "#0B0B0F" }}
            >
              <span>{isEn ? "Open WhatsApp Chat" : "Mulai Chat WhatsApp"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
