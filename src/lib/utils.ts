import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generate WhatsApp API link with pre-filled message template
 * @param template - The message template type
 * @param lang - Language ('en' or 'id')
 * @param planName - Optional plan/package name to include in the message
 * @returns WhatsApp API link with encoded message
 */
export function getWhatsAppLink(
  template: string,
  lang: "en" | "id" = "id",
  planName?: string,
): string {
  const phoneNumber = "6281367954062";
  const baseUrl = `https://wa.me/${phoneNumber}`;

  const templates: Record<string, Record<string, string>> = {
    navbar: {
      en: "Hello! I'm interested in getting started with your services. Can we discuss my project?",
      id: "Halo! Saya tertarik untuk memulai dengan layanan Anda. Bisakah kita diskusikan proyek saya?",
    },
    hero: {
      en: "Hello! I want to build my software. Can we discuss the details?",
      id: "Halo! Saya ingin membangun software saya. Bisakah kita diskusikan detailnya?",
    },
    about: {
      en: "Hello! I want to start my project with you. Let's discuss how we can work together.",
      id: "Halo! Saya ingin memulai proyek saya dengan Anda. Mari diskusikan bagaimana kita bisa bekerja sama.",
    },
    services: {
      en: "Hello! I'm interested in your services. Can you tell me more about what you offer?",
      id: "Halo! Saya tertarik dengan layanan Anda. Bisakah Anda memberi tahu saya lebih lanjut tentang apa yang Anda tawarkan?",
    },
    pricing: {
      en: "Hello! I'm interested in your pricing packages. Can we discuss which package would be best for my needs?",
      id: "Halo! Saya tertarik dengan paket harga Anda. Bisakah kita diskusikan paket mana yang terbaik untuk kebutuhan saya?",
    },
    footer: {
      en: "Hello! I'd like to talk about my project. When would be a good time to discuss?",
      id: "Halo! Saya ingin berbicara tentang proyek saya. Kapan waktu yang baik untuk berdiskusi?",
    },
    gallery: {
      en: "Hello! I'm interested in your services. Can we discuss how you can help with my project?",
      id: "Halo! Saya tertarik dengan layanan Anda. Bisakah kita diskusikan bagaimana Anda dapat membantu dengan proyek saya?",
    },
    fab: {
      en: "Hello! I would like to consult with Gilabs about software development.",
      id: "Halo! Saya ingin konsultasi dengan Gilabs mengenai pembuatan software.",
    },
    template: {
      en: "Hello! I'm interested in purchasing a software template from Gilabs. Can we discuss the details?",
      id: "Halo! Saya tertarik untuk membeli template software dari Gilabs. Bisakah kita diskusikan detailnya?",
    },
  };

  let message =
    templates[template]?.[lang] ||
    templates[template]?.["id"] ||
    "Halo! Saya tertarik dengan layanan Anda.";

  // If planName is provided and template is pricing, customize the message
  if (planName && template === "pricing") {
    if (lang === "en") {
      message = `Hello! I'm interested in the "${planName}" package. Can we discuss the details and pricing?`;
    } else {
      message = `Halo! Saya tertarik dengan paket "${planName}". Bisakah kita diskusikan detail dan harganya?`;
    }
  }

  // If planName is provided and template is template (SaaS template purchase)
  if (planName && template === "template") {
    if (lang === "en") {
      message = `Hello Gilabs! I'm interested in purchasing the template "${planName}". Can you guide me through the payment process and source code repository access?`;
    } else {
      message = `Halo Gilabs! Saya tertarik untuk membeli template "${planName}". Bagaimana prosedur pembayaran dan pengiriman akses source code-nya?`;
    }
  }

  const encodedMessage = encodeURIComponent(message);

  return `${baseUrl}?text=${encodedMessage}`;
}

export interface WebsiteOrderDetails {
  templateTitle: string;
  durationPlanName: string;
  durationYears: number;
  durationPriceIdr: number;
  domainName?: string;
  /** Add-on terpilih, sudah dalam bentuk label siap tampil (mis. "Halaman Tambahan x2") */
  addons: { label: string; subtotalIdr: number }[];
  addonPriceIdr: number;
  totalPriceIdr: number;
  customerName?: string;
  companyName?: string;
  customerEmail?: string;
  lang?: "en" | "id";
}

/**
 * Generate formatted WhatsApp checkout link for website template orders
 */
export function getWebsiteOrderWhatsAppLink(details: WebsiteOrderDetails): string {
  const phoneNumber = "6281367954062";
  const baseUrl = `https://wa.me/${phoneNumber}`;
  const isEn = details.lang === "en";
  const formatIdr = (val: number) => `Rp ${val.toLocaleString("id-ID")}`;
  const addonLines =
    details.addons.length > 0
      ? [
          `Add-on:`,
          ...details.addons.map((a) => `- ${a.label} (+${formatIdr(a.subtotalIdr)})`),
        ]
      : [`Add-on: Tidak ada`];

  const lines = isEn
    ? [
        `Halo Tim GiLabs, saya ingin memesan website:`,
        ``,
        `*FORM PEMESANAN WEBSITE*`,
        `Nama: ${details.customerName || "[Nama Anda]"}`,
        `Perusahaan: ${details.companyName || "-"}`,
        `Email: ${details.customerEmail || "-"}`,
        ``,
        `Template: ${details.templateTitle}`,
        `Paket Durasi: ${details.durationPlanName} (${details.durationYears} Year${details.durationYears > 1 ? "s" : ""})`,
        ...addonLines,
        `Total Investasi: Rp ${details.totalPriceIdr.toLocaleString("id-ID")}`,
        ``,
        `Catatan: Domain gratis dikonsultasikan saat aktivasi.`,
        `Mohon info invoice dan langkah aktivasinya. Terima kasih!`,
      ]
    : [
        `Halo Tim GiLabs, saya ingin memesan website:`,
        ``,
        `*FORM PEMESANAN WEBSITE*`,
        `Nama: ${details.customerName || "[Nama Anda]"}`,
        `Perusahaan: ${details.companyName || "-"}`,
        `Email: ${details.customerEmail || "-"}`,
        ``,
        `Template: ${details.templateTitle}`,
        `Paket Durasi: ${details.durationPlanName} (${details.durationYears} Tahun)`,
        ...addonLines,
        `Total Investasi: Rp ${details.totalPriceIdr.toLocaleString("id-ID")}`,
        ``,
        `Catatan: Domain gratis dikonsultasikan saat aktivasi.`,
        `Mohon info invoice dan langkah aktivasinya. Terima kasih!`,
      ];

  const message = lines.filter((line) => line !== null && line !== undefined).join("\n");
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

