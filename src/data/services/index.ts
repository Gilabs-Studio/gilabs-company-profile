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

const servicesMapId: Record<string, ServicePageData> = {
  "jasa-pembuatan-website": webDevelopmentId,
  "jasa-web-company-profile": companyProfileId,
  "jasa-pembuatan-landing-page": landingPageId,
  "jasa-toko-online-ecommerce": ecommerceId,
  "software-house-indonesia": softwareHouseId,
  "jasa-pembuatan-custom-software": customSoftwareId,
  "jasa-pembuatan-aplikasi-mobile": mobileAppsId,
  "jasa-pembuatan-erp-crm": erpCrmId,
  "jasa-pembuatan-aplikasi-kasir-pos": posSystemId,
};

const servicesMapEn: Record<string, ServicePageData> = {
  "jasa-pembuatan-website": webDevelopmentEn,
  "jasa-web-company-profile": companyProfileEn,
  "jasa-pembuatan-landing-page": landingPageEn,
  "jasa-toko-online-ecommerce": ecommerceEn,
  "software-house-indonesia": softwareHouseEn,
  "jasa-pembuatan-custom-software": customSoftwareEn,
  "jasa-pembuatan-aplikasi-mobile": mobileAppsEn,
  "jasa-pembuatan-erp-crm": erpCrmEn,
  "jasa-pembuatan-aplikasi-kasir-pos": posSystemEn,
};

export const serviceSlugs = [
  "jasa-pembuatan-website",
  "jasa-web-company-profile",
  "jasa-pembuatan-landing-page",
  "jasa-toko-online-ecommerce",
  "software-house-indonesia",
  "jasa-pembuatan-custom-software",
  "jasa-pembuatan-aplikasi-mobile",
  "jasa-pembuatan-erp-crm",
  "jasa-pembuatan-aplikasi-kasir-pos",
];

export function getServiceData(slug: string, lang: "en" | "id"): ServicePageData | null {
  const map = lang === "en" ? servicesMapEn : servicesMapId;
  return map[slug] || null;
}

export function getAllServices(lang: "en" | "id"): ServicePageData[] {
  const map = lang === "en" ? servicesMapEn : servicesMapId;
  return Object.values(map);
}
