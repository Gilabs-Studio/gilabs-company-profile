import { citiesDataId, type CityPageData } from "./cities.id";
import { citiesDataEn } from "./cities.en";

export { citiesDataId, citiesDataEn, type CityPageData };

export const citySlugs = ["jakarta", "semarang", "surabaya", "bandung", "yogyakarta"];

export function getCityData(slug: string, lang: "en" | "id"): CityPageData | null {
  const map = lang === "en" ? citiesDataEn : citiesDataId;
  return map[slug] || null;
}
