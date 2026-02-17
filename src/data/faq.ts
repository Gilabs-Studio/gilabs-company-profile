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
        question: "How do you handle time zone differences?",
        answer: "We are experienced in working with international clients across the US, Europe, and Australia. Our team operates with overlapping hours to ensure daily syncs, real-time collaboration, and smooth communication. We use async tools like Slack, Jira, and recorded Loom updates to keep progress moving 24/7.",
      },
      {
        question: "Do I own the Intellectual Property (IP)?",
        answer: "Yes, absolutely. Once the project is paid for, you own 100% of the source code, design assets, and intellectual property. We work as your technology partner, not a vendor holding your IP hostage.",
      },
      {
        question: "Can you handle enterprise-grade security and scalability?",
        answer: "Our team specializes in building high-performance, secure, and scalable systems. We follow industry best practices for data protection (SOC2 compliance readiness, GDPR), secure coding standards, and scalable cloud infrastructure (AWS/GCP) to support your growth from thousands to millions of users.",
      },
      {
        question: "What if I have an existing legacy system?",
        answer: "We excel at digital transformation. We can audit your existing legacy code, propose a modernization strategy (refactor vs. rewrite), and progressively migrate your system to modern technologies without disrupting your daily business operations.",
      },
      {
        question: "How does the engagement model work?",
        answer: "We offer flexible engagement models tailored to your needs: Dedicated Teams for long-term product development, Fixed Price for well-defined projects, or Staff Augmentation to extend your existing team. We'll help you choose the best model for your goals.",
      },
      {
        question: "What is your tech stack?",
        answer: "We use modern, battle-tested technologies including React/Next.js for frontend, Node.js/Go/Python for backend, and React Native/Flutter for mobile. We choose the right tools for the job to ensure performance, maintainability, and scalability.",
      },
    ],
  },
  id: {
    title: "Pertanyaan yang Sering Diajukan",
    subtitle: "Semua yang perlu Anda ketahui tentang bermitra dengan Gilabs",
    items: [
      {
        question: "Bagaimana Anda menangani perbedaan zona waktu?",
        answer: "Kami berpengalaman bekerja dengan klien internasional di AS, Eropa, dan Australia. Tim kami bekerja dengan jam overlapping untuk memastikan sinkronisasi harian, kolaborasi real-time, dan komunikasi yang lancar. Kami menggunakan alat asinkron seperti Slack, Jira, dan update Loom untuk menjaga progress berjalan 24/7.",
      },
      {
        question: "Apakah saya memiliki Hak Kekayaan Intelektual (IP)?",
        answer: "Ya, tentu saja. Setelah proyek lunas, Anda memiliki 100% source code, aset desain, dan hak kekayaan intelektual. Kami bekerja sebagai mitra teknologi Anda, bukan vendor yang menyandera IP Anda.",
      },
      {
        question: "Bisakah Anda menangani keamanan dan skalabilitas kelas enterprise?",
        answer: "Tim kami berspesialisasi dalam membangun sistem berkinerja tinggi, aman, dan scalable. Kami mengikuti standar industri terbaik untuk perlindungan data (kesiapan SOC2, GDPR), standar coding yang aman, dan infrastruktur cloud yang scalable (AWS/GCP) untuk mendukung pertumbuhan Anda dari ribuan hingga jutaan pengguna.",
      },
      {
        question: "Bagaimana jika saya memiliki sistem legacy yang sudah ada?",
        answer: "Kami ahli dalam transformasi digital. Kami dapat mengaudit kode legacy Anda, mengusulkan strategi modernisasi (refactor vs. rewrite), dan secara progresif memigrasikan sistem Anda ke teknologi modern tanpa mengganggu operasional bisnis sehari-hari Anda.",
      },
      {
        question: "Bagaimana model kerjasamanya?",
        answer: "Kami menawarkan model kerjasama fleksibel yang disesuaikan dengan kebutuhan Anda: Dedicated Team untuk pengembangan produk jangka panjang, Fixed Price untuk proyek yang terdefinisi dengan baik, atau Staff Augmentation untuk memperluas tim Anda yang sudah ada. Kami akan membantu Anda memilih model terbaik untuk tujuan Anda.",
      },
      {
        question: "Apa tech stack yang Anda gunakan?",
        answer: "Kami menggunakan teknologi modern yang teruji termasuk React/Next.js untuk frontend, Node.js/Go/Python untuk backend, dan React Native/Flutter untuk mobile. Kami memilih alat yang tepat untuk pekerjaan tersebut guna memastikan kinerja, maintainability, dan skalabilitas.",
      },
    ],
  },
};
