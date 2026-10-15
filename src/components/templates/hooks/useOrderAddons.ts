import { useCallback, useEffect, useMemo, useState } from 'react';
import { templateAddons, getAddonTierInfo } from '../../../data/templatesData';
import type { AddonItem, AddonTier } from '../../../data/templatesData';

export type AddonQuantities = Partial<Record<AddonItem['id'], number>>;

export interface SelectedAddonLine {
  addon: AddonItem;
  qty: number;
  unitPrice: number;
  subtotal: number;
}

/**
 * Mengelola pilihan add-on pada halaman order.
 * Qty otomatis dibatasi ulang saat tier berubah (mis. ganti template).
 */
export function useOrderAddons(tier: AddonTier, lang: 'id' | 'en') {
  const [quantities, setQuantities] = useState<AddonQuantities>({});

  const addons = useMemo(
    () => templateAddons.map((addon) => ({ addon, ...getAddonTierInfo(addon, tier) })),
    [tier]
  );

  // Clamp qty bila tier berubah
  useEffect(() => {
    setQuantities((prev) => {
      const next: AddonQuantities = {};
      for (const { addon, maxQty, isAvailable } of addons) {
        const current = prev[addon.id] ?? 0;
        if (isAvailable && current > 0) next[addon.id] = Math.min(current, maxQty);
      }
      return next;
    });
  }, [addons]);

  const setQty = useCallback(
    (id: AddonItem['id'], qty: number) => {
      const info = addons.find((a) => a.addon.id === id);
      if (!info || !info.isAvailable) return;
      const clamped = Math.max(0, Math.min(qty, info.maxQty));
      setQuantities((prev) => ({ ...prev, [id]: clamped }));
    },
    [addons]
  );

  const selectedLines = useMemo<SelectedAddonLine[]>(
    () =>
      addons
        .filter(({ addon, isAvailable }) => isAvailable && (quantities[addon.id] ?? 0) > 0)
        .map(({ addon, price }) => {
          const qty = quantities[addon.id] ?? 0;
          const unitPrice = price ?? 0;
          return { addon, qty, unitPrice, subtotal: unitPrice * qty };
        }),
    [addons, quantities]
  );

  const addonTotal = useMemo(
    () => selectedLines.reduce((sum, line) => sum + line.subtotal, 0),
    [selectedLines]
  );

  const whatsappAddons = useMemo(
    () =>
      selectedLines.map((line) => ({
        label: `${line.addon.name[lang]} x${line.qty}`,
        subtotalIdr: line.subtotal,
      })),
    [selectedLines, lang]
  );

  return { addons, quantities, setQty, selectedLines, addonTotal, whatsappAddons };
}
