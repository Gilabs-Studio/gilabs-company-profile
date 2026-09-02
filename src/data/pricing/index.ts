import { pricingGuidesId, type PricingGuidePage } from "./pricingGuides.id";
import { pricingGuidesEn } from "./pricingGuides.en";

export { pricingGuidesId, pricingGuidesEn, type PricingGuidePage };

export const pricingSlugs = [
  "biaya-pembuatan-website",
  "biaya-buat-aplikasi-mobile",
  "estimasi-harga-software-custom"
];

export function getPricingData(slug: string, lang: "en" | "id"): PricingGuidePage | null {
  const map = lang === "en" ? pricingGuidesEn : pricingGuidesId;
  return map[slug] || null;
}
