import { webDevelopmentId } from "./webDevelopment.id";
import { webDevelopmentEn } from "./webDevelopment.en";
import { companyProfileId } from "./companyProfile.id";
import { companyProfileEn } from "./companyProfile.en";
import { landingPageId } from "./landingPage.id";
import { landingPageEn } from "./landingPage.en";
import { ecommerceId } from "./ecommerce.id";
import { ecommerceEn } from "./ecommerce.en";
import { softwareHouseId } from "./softwareHouse.id";
import { softwareHouseEn } from "./softwareHouse.en";
import { customSoftwareId } from "./customSoftware.id";
import { customSoftwareEn } from "./customSoftware.en";
import { mobileAppsId } from "./mobileApps.id";
import { mobileAppsEn } from "./mobileApps.en";
import { erpCrmId } from "./erpCrm.id";
import { erpCrmEn } from "./erpCrm.en";
import { posSystemId } from "./posSystem.id";
import { posSystemEn } from "./posSystem.en";
import type { ServicePageData } from "./types";

export * from "./types";

export type ServiceKey =
  | "web-development"
  | "company-profile"
  | "landing-page"
  | "ecommerce"
  | "software-house"
  | "custom-software"
  | "mobile-apps"
  | "erp-crm"
  | "pos-system";

export const serviceSlugPairMap: Record<ServiceKey, { id: string; en: string }> = {
  "web-development": {
    id: webDevelopmentId.slug,
    en: webDevelopmentEn.slug,
  },
  "company-profile": {
    id: companyProfileId.slug,
    en: companyProfileEn.slug,
  },
  "landing-page": {
    id: landingPageId.slug,
    en: landingPageEn.slug,
  },
  "ecommerce": {
    id: ecommerceId.slug,
    en: ecommerceEn.slug,
  },
  "software-house": {
    id: softwareHouseId.slug,
    en: softwareHouseEn.slug,
  },
  "custom-software": {
    id: customSoftwareId.slug,
    en: customSoftwareEn.slug,
  },
  "mobile-apps": {
    id: mobileAppsId.slug,
    en: mobileAppsEn.slug,
  },
  "erp-crm": {
    id: erpCrmId.slug,
    en: erpCrmEn.slug,
  },
  "pos-system": {
    id: posSystemId.slug,
    en: posSystemEn.slug,
  },
};

export const servicesMapId: Record<string, ServicePageData> = {
  [webDevelopmentId.slug]: webDevelopmentId,
  [companyProfileId.slug]: companyProfileId,
  [landingPageId.slug]: landingPageId,
  [ecommerceId.slug]: ecommerceId,
  [softwareHouseId.slug]: softwareHouseId,
  [customSoftwareId.slug]: customSoftwareId,
  [mobileAppsId.slug]: mobileAppsId,
  [erpCrmId.slug]: erpCrmId,
  [posSystemId.slug]: posSystemId,
};

export const servicesMapEn: Record<string, ServicePageData> = {
  [webDevelopmentEn.slug]: webDevelopmentEn,
  [companyProfileEn.slug]: companyProfileEn,
  [landingPageEn.slug]: landingPageEn,
  [ecommerceEn.slug]: ecommerceEn,
  [softwareHouseEn.slug]: softwareHouseEn,
  [customSoftwareEn.slug]: customSoftwareEn,
  [mobileAppsEn.slug]: mobileAppsEn,
  [erpCrmEn.slug]: erpCrmEn,
  [posSystemEn.slug]: posSystemEn,
};

// Legacy array for backward compatibility
export const serviceSlugs = Object.keys(servicesMapId);
export const serviceSlugsId = Object.keys(servicesMapId);
export const serviceSlugsEn = Object.keys(servicesMapEn);

export function getServiceKey(slug: string): ServiceKey | null {
  for (const [key, pair] of Object.entries(serviceSlugPairMap)) {
    if (pair.id === slug || pair.en === slug) {
      return key as ServiceKey;
    }
  }
  return null;
}

export function getAlternateServiceSlug(slug: string, targetLang: "en" | "id"): string | null {
  for (const pair of Object.values(serviceSlugPairMap)) {
    if (pair.id === slug || pair.en === slug) {
      return targetLang === "en" ? pair.en : pair.id;
    }
  }
  return null;
}

export function getServiceData(slug: string, lang: "en" | "id"): ServicePageData | null {
  const map = lang === "en" ? servicesMapEn : servicesMapId;
  if (map[slug]) return map[slug];

  // Cross-lookup fallback: if requested with alternate slug
  const altSlug = getAlternateServiceSlug(slug, lang);
  if (altSlug && map[altSlug]) return map[altSlug];

  return null;
}

export function getAllServices(lang: "en" | "id"): ServicePageData[] {
  const map = lang === "en" ? servicesMapEn : servicesMapId;
  return Object.values(map);
}
