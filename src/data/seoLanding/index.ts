export * from "./types";
export * from "./aplikasiCustom";
export * from "./sistemInformasi";
export * from "./websitePremium";
export * from "./websiteCorporate";
export * from "./websiteKlinik";
export * from "./softwareHouse";
export * from "./websiteKontraktorProperti";
export * from "./websiteUmkm";
export * from "./websiteTokoOnline";
export * from "./jasaWebsiteKota";

import { aplikasiCustomId, aplikasiCustomEn } from "./aplikasiCustom";
import { sistemInformasiId, sistemInformasiEn } from "./sistemInformasi";
import { websitePremiumId, websitePremiumEn } from "./websitePremium";
import { websiteCorporateId, websiteCorporateEn } from "./websiteCorporate";
import { websiteKlinikId, websiteKlinikEn } from "./websiteKlinik";
import { softwareHouseId, softwareHouseEn } from "./softwareHouse";
import { websiteKontraktorPropertiId, websiteKontraktorPropertiEn } from "./websiteKontraktorProperti";
import { websiteUmkmId, websiteUmkmEn } from "./websiteUmkm";
import { websiteTokoOnlineId, websiteTokoOnlineEn } from "./websiteTokoOnline";
import { getCityLandingData, targetCitiesList } from "./jasaWebsiteKota";
import type { SeoLandingPageData } from "./types";

export const seoPagesMap: Record<"id" | "en", Record<string, SeoLandingPageData>> = {
  id: {
    "aplikasi-custom": aplikasiCustomId,
    "sistem-informasi": sistemInformasiId,
    "website-premium": websitePremiumId,
    "website-corporate": websiteCorporateId,
    "website-klinik": websiteKlinikId,
    "software-house": softwareHouseId,
    "website-kontraktor-properti": websiteKontraktorPropertiId,
    "website-umkm": websiteUmkmId,
    "website-toko-online": websiteTokoOnlineId,
  },
  en: {
    "aplikasi-custom": aplikasiCustomEn,
    "sistem-informasi": sistemInformasiEn,
    "website-premium": websitePremiumEn,
    "website-corporate": websiteCorporateEn,
    "website-klinik": websiteKlinikEn,
    "software-house": softwareHouseEn,
    "website-kontraktor-properti": websiteKontraktorPropertiEn,
    "website-umkm": websiteUmkmEn,
    "website-toko-online": websiteTokoOnlineEn,
  }
};

export const staticSeoPagesMap = seoPagesMap.id;

export function getSeoLandingData(slug: string, lang: "id" | "en" = "id"): SeoLandingPageData | null {
  const map = seoPagesMap[lang];
  if (map && map[slug]) {
    return map[slug];
  }
  if (slug.startsWith("jasa-website-")) {
    const cityKey = slug.replace("jasa-website-", "");
    return getCityLandingData(cityKey, lang);
  }
  return null;
}
