export interface RiskMitigationData {
  eyebrow: string;
  title: string;
  subtitle: string;
  sections: {
    title: string;
    description: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  }[];
}

export const riskMitigationData: Record<string, RiskMitigationData> = {
  en: {
    eyebrow: "Risk Mitigation",
    title: "Your Risk, Mitigated\nYour Control, Guaranteed",
    subtitle: "We don't just build software—we engineer systems with risk mitigation built in. Your business continuity, your data sovereignty, your strategic flexibility—all protected.",
    sections: [
      {
        title: "Vendor Risk Mitigation",
        description: "No vendor lock-in means no business continuity risk. You own the asset, not the dependency.",
        items: [
          {
            icon: "/icon/award.gif",
            title: "No Vendor Lock-in",
            description: "Your source code is yours from day one. Full documentation means you can take over anytime—no dependency on us.",
          },
          {
            icon: "/icon/locked.gif",
            title: "Source Code Escrow",
            description: "Enterprise clients can opt for escrow agreements. Your code is protected, even in unforeseen circumstances.",
          },
          {
            icon: "/icon/custom.gif",
            title: "Full Documentation",
            description: "We document everything—architecture, deployment, maintenance. Knowledge transfer is built into our process.",
          },
          {
            icon: "/icon/unlimited.gif",
            title: "Exit Strategy Clarity",
            description: "You're never trapped. We're a partner, not a dependency. Your software runs independently of us.",
          },
        ],
      },
      {
        title: "Technical Risk Mitigation",
        description: "Enterprise-grade architecture means scalability, security, and maintainability are built in, not bolted on.",
        items: [
          {
            icon: "/icon/scalable.gif",
            title: "Scalable Architecture",
            description: "Built to handle 10x growth. Modern stack means talent availability. Your system scales with your business.",
          },
          {
            icon: "/icon/artificial-intelligence.gif",
            title: "Open Standards",
            description: "We use open standards and modern frameworks. Integration risk is minimized—you're not locked into proprietary systems.",
          },
          {
            icon: "/icon/enterprise-development.gif",
            title: "Security by Design",
            description: "Security isn't an afterthought. We build with enterprise security practices from the ground up.",
          },
          {
            icon: "/icon/strategic-consulting.gif",
            title: "Maintainable Codebase",
            description: "Clean architecture, comprehensive documentation, and modern patterns mean your team can maintain and extend the system.",
          },
        ],
      },
      {
        title: "Financial Risk Mitigation",
        description: "Fixed scope, transparent pricing, and ownership model eliminate the financial risks of subscription-based software.",
        items: [
          {
            icon: "/icon/award.gif",
            title: "Fixed Scope & Cost",
            description: "No surprise billings. We define everything upfront. Your budget risk is controlled from day one.",
          },
          {
            icon: "/icon/unlimited.gif",
            title: "No Per-User Fees",
            description: "Unlimited users means growth doesn't penalize you. Scale from 10 to 10,000 without additional costs.",
          },
          {
            icon: "/icon/ownership.gif",
            title: "One-Time Investment",
            description: "Capitalize your software investment. No recurring liability. Your financial risk is eliminated after the initial investment.",
          },
          {
            icon: "/icon/custom.gif",
            title: "Predictable Maintenance",
            description: "Maintenance costs are transparent and predictable. No hidden fees, no price escalations.",
          },
        ],
      },
    ],
  },
  id: {
    eyebrow: "Mitigasi Risiko",
    title: "Risiko Anda, Dikurangi\nKontrol Anda, Dijamin",
    subtitle: "Kami tidak hanya membangun software—kami merancang sistem dengan mitigasi risiko yang terintegrasi. Kontinuitas bisnis Anda, kedaulatan data Anda, fleksibilitas strategis Anda—semua terlindungi.",
    sections: [
      {
        title: "Mitigasi Risiko Vendor",
        description: "Tidak ada vendor lock-in berarti tidak ada risiko kontinuitas bisnis. Anda memiliki aset, bukan dependensi.",
        items: [
          {
            icon: "/icon/award.gif",
            title: "Tanpa Vendor Lock-in",
            description: "Source code Anda adalah milik Anda sejak hari pertama. Dokumentasi lengkap berarti Anda dapat mengambil alih kapan saja—tanpa dependensi pada kami.",
          },
          {
            icon: "/icon/locked.gif",
            title: "Escrow Source Code",
            description: "Klien enterprise dapat memilih perjanjian escrow. Kode Anda terlindungi, bahkan dalam keadaan yang tidak terduga.",
          },
          {
            icon: "/icon/custom.gif",
            title: "Dokumentasi Lengkap",
            description: "Kami mendokumentasikan segalanya—arsitektur, deployment, maintenance. Transfer pengetahuan terintegrasi dalam proses kami.",
          },
          {
            icon: "/icon/unlimited.gif",
            title: "Kejelasan Strategi Keluar",
            description: "Anda tidak pernah terjebak. Kami adalah mitra, bukan dependensi. Software Anda berjalan independen dari kami.",
          },
        ],
      },
      {
        title: "Mitigasi Risiko Teknis",
        description: "Arsitektur enterprise-grade berarti skalabilitas, keamanan, dan maintainability terintegrasi, bukan ditambahkan kemudian.",
        items: [
          {
            icon: "/icon/scalable.gif",
            title: "Arsitektur Skalabel",
            description: "Dibangun untuk menangani pertumbuhan 10x. Stack modern berarti ketersediaan talenta. Sistem Anda berkembang dengan bisnis Anda.",
          },
          {
            icon: "/icon/artificial-intelligence.gif",
            title: "Standar Terbuka",
            description: "Kami menggunakan standar terbuka dan framework modern. Risiko integrasi diminimalkan—Anda tidak terkunci dalam sistem proprietary.",
          },
          {
            icon: "/icon/enterprise-development.gif",
            title: "Keamanan by Design",
            description: "Keamanan bukanlah pemikiran setelahnya. Kami membangun dengan praktik keamanan enterprise dari awal.",
          },
          {
            icon: "/icon/strategic-consulting.gif",
            title: "Codebase yang Maintainable",
            description: "Arsitektur bersih, dokumentasi komprehensif, dan pola modern berarti tim Anda dapat memelihara dan memperluas sistem.",
          },
        ],
      },
      {
        title: "Mitigasi Risiko Finansial",
        description: "Scope tetap, harga transparan, dan model kepemilikan menghilangkan risiko finansial dari software berbasis subscription.",
        items: [
          {
            icon: "/icon/award.gif",
            title: "Scope & Biaya Tetap",
            description: "Tidak ada tagihan mengejutkan. Kami mendefinisikan segalanya di muka. Risiko anggaran Anda terkontrol sejak hari pertama.",
          },
          {
            icon: "/icon/unlimited.gif",
            title: "Tanpa Biaya Per-User",
            description: "Unlimited users berarti pertumbuhan tidak menghukum Anda. Skala dari 10 hingga 10.000 tanpa biaya tambahan.",
          },
          {
            icon: "/icon/ownership.gif",
            title: "Investasi Satu Kali",
            description: "Kapitalisasi investasi software Anda. Tidak ada liabilitas berulang. Risiko finansial Anda dihilangkan setelah investasi awal.",
          },
          {
            icon: "/icon/custom.gif",
            title: "Maintenance yang Dapat Diprediksi",
            description: "Biaya maintenance transparan dan dapat diprediksi. Tidak ada biaya tersembunyi, tidak ada kenaikan harga.",
          },
        ],
      },
    ],
  },
};
