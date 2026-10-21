export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export const faqData: Record<string, FAQData> = {
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about partnering with Gilabs",
    items: [
      {
        question: "How do you handle data security and compliance?",
        answer: "We implement secure development practices, role-based access, and audit logging. Our infrastructure uses isolation techniques, and we ensure data agreements (NDA) are in place. Our processes align with ISO practices and GDPR awareness to ensure enterprise-grade security.",
      },
      {
        question: "Who owns the source code and infrastructure?",
        answer: "The client retains full ownership of the source code and design assets. We provide full repository access and offer independent hosting options to ensure no proprietary lock-in. Comprehensive documentation is always provided for independent maintenance.",
      },
      {
        question: "How do you ensure long-term maintainability?",
        answer: "We follow clean architecture principles, strict documentation standards, and rigorous code review processes. By adhering to version control best practices and providing structured handovers, we ensure your system remains manageable long after launch.",
      },
      {
        question: "What happens if the project scope changes?",
        answer: "We use a structured change request process that includes impact analysis for both timeline and cost. This transparent adjustment ensures no surprise billing and maintains governance throughout the project's evolution.",
      },
      {
        question: "Do you work with internal IT teams?",
        answer: "Yes, we frequently collaborate with in-house tech teams. We coordinate through shared repositories, technical alignment meetings, and clear API/integration documentation to ensure seamless partnership.",
      },
      {
        question: "What is your delivery model?",
        answer: "We offer fixed-scope options with milestone-based execution. We provide weekly deployed builds and clear reporting to ensure predictability and transparency in every phase of development.",
      },
      {
        question: "What kind of support do you provide post-launch?",
        answer: "We offer SLA-based support options, including proactive monitoring, performance optimization, security patching, and upgrade roadmap planning to ensure your product remains competitive and secure.",
      },
      {
        question: "How do you handle revisions and pricing transparency?",
        answer: "Revisions are included in the agreed package and explicitly detailed in the upfront contract. Pricing is 100% transparent with zero hidden fees or surprise billings during project execution.",
      },
      {
        question: "How does Gilabs utilize AI in design and software engineering?",
        answer: "We leverage AI thoughtfully to accelerate research, concept exploration, and wireframing. However, all UI/UX architecture, brand-tailored aesthetics, and production code are manually crafted and curated by our professional engineers and designers—ensuring original, high-performance output tailored to your specific business.",
      },
      {
        question: "What is the communication and collaboration process during the project?",
        answer: "We provide a responsive, single point of contact with clear milestone tracking. Clients are actively involved at every stage—from discovery and wireframes to iterative builds and final user acceptance testing—ensuring fast feedback loops without bureaucratic friction.",
      },
    ],
  },
  id: {
    title: "Pertanyaan yang Sering Diajukan",
    subtitle: "Semua yang perlu Anda ketahui tentang bermitra dengan Gilabs",
    items: [
      {
        question: "Bagaimana Anda menangani keamanan data dan kepatuhan?",
        answer: "Kami menerapkan praktik pengembangan yang aman, akses berbasis peran, dan audit logging. Infrastruktur kami menggunakan teknik isolasi, dan kami memastikan adanya dokumen hukum yang jelas (NDA). Proses kami selaras dengan praktik ISO dan kesadaran GDPR untuk menjamin keamanan kelas enterprise.",
      },
      {
        question: "Siapa pemilik source code dan infrastrukturnya?",
        answer: "Klien memegang kepemilikan penuh atas source code dan aset desain. Kami memberikan akses repositori penuh dan menawarkan opsi hosting independen untuk memastikan tidak ada ketergantungan vendor (no lock-in). Dokumentasi lengkap selalu disediakan untuk pemeliharaan mandiri.",
      },
      {
        question: "Bagaimana Anda menjamin pemeliharaan jangka panjang?",
        answer: "Kami mengikuti prinsip clean architecture, standar dokumentasi yang ketat, dan proses code review yang teliti. Dengan mematuhi best practice kontrol versi dan menyediakan serah terima yang terstruktur, kami memastikan sistem Anda tetap mudah dikelola dalam jangka panjang.",
      },
      {
        question: "Apa yang terjadi jika lingkup (scope) proyek berubah?",
        answer: "Kami menggunakan proses permintaan perubahan (change request) yang terstruktur, mencakup analisis dampak terhadap linimasa dan biaya. Penyesuaian transparan ini memastikan tidak ada tagihan tak terduga dan menjaga tata kelola proyek tetap terjaga.",
      },
      {
        question: "Apakah Anda bekerja dengan tim IT internal?",
        answer: "Ya, kami sering berkolaborasi dengan tim teknis internal klien. Kami berkoordinasi melalui repositori bersama, rapat penyelarasan teknis, serta koordinasi API dan integrasi untuk memastikan kemitraan yang mulus.",
      },
      {
        question: "Apa model pengiriman (delivery model) Anda?",
        answer: "Kami menawarkan opsi lingkup tetap (fixed scope) dengan eksekusi berbasis milestone. Kami menyediakan build yang dideploy mingguan dan pelaporan yang jelas untuk memastikan prediktabilitas dan transparansi.",
      },
      {
        question: "Dukungan apa yang Anda berikan setelah peluncuran?",
        answer: "Kami menawarkan opsi dukungan berbasis SLA, termasuk pemantauan proaktif, optimasi performa, penambalan keamanan (security patching), dan perencanaan peta jalan (roadmap) pembaruan.",
      },
      {
        question: "Bagaimana kebijakan revisi dan transparansi harga di Gilabs?",
        answer: "Revisi sudah termasuk di dalam paket yang disepakati dan tertulis jelas di dalam kontrak kerja sejak awal. Penetapan harga 100% transparan tanpa biaya tersembunyi (zero hidden fees) atau biaya siluman di tengah proyek.",
      },
      {
        question: "Bagaimana Gilabs memanfaatkan AI dalam proses desain dan pengembangan?",
        answer: "Kami memanfaatkan AI secara bijak untuk mempercepat riset, eksplorasi konsep, dan wireframing. Namun seluruh antarmuka (UI/UX), estetika visual sesuai brand, arsitektur sistem, dan baris kode tetap dirancang dan dikurasi manual oleh engineer & desainer profesional kami—bukan hasil generate asal jadi.",
      },
      {
        question: "Bagaimana alur komunikasi dan keterlibatan klien selama pengerjaan proyek?",
        answer: "Kami menerapkan komunikasi satu pintu yang responsif (fast response) dengan pelaporan progres jelas di setiap milestone. Klien dilibatkan secara kolaboratif mulai dari riset kebutuhan, wireframe, pengembangan bertahap, hingga testing akhir tanpa birokrasi berbelit.",
      },
    ],
  },
};
