// lib/usePricing.ts

import { useEffect, useMemo, useState } from "react";
import { Service } from "./pricingConfig";
import { DiscountHint } from "@/lib/pricingConfig";


const STORAGE_KEY = "repaircare_pricing";

export function usePricing(services: Service[]) {
  const [mounted, setMounted] = useState(false);
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  /* =========================
     MOUNT + RESTORE STATE
  ========================= */
  useEffect(() => {
    setMounted(true);

    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      setQuantities(JSON.parse(saved));
    }
  }, []);

  /* =========================
     PERSIST STATE
  ========================= */
  useEffect(() => {
    if (mounted) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(quantities));
    }
  }, [quantities, mounted]);

  /* =========================
     SET QUANTITY
  ========================= */
  const setQuantity = (id: string, value: string) => {
    const clean = value.replace(/^0+(?=\d)/, "");
    const qty = Number(clean);

    setQuantities((prev) => ({
      ...prev,
      [id]: isNaN(qty) || qty <= 0 ? 0 : qty,
    }));
  };

  /* =========================
     CALCULATION
  ========================= */
  const calculation = useMemo(() => {
    if (!mounted) {
      return { total: 0, discountsApplied: {}, discountInfo: {} };
    }

    let total = 0;

    // Applied discounts (for UI: "–20% discount applied")
    const discountsApplied: Record<string, number> = {};

    // Informational discounts (for UI: "By buying min. 10 m²...")
    const discountInfo: Record<string, DiscountHint> = {};

    services.forEach((service) => {
      const quantity = quantities[service.id] || 0;
      if (quantity <= 0) return;

      let price = service.pricePerUnit * quantity;

      /* ===== DISCOUNT LOGIC ===== */
      if (service.discountRule) {
        const {
          sourceServiceId,
          minQuantityM2,
          minQuantityPcs,
          percent,
        } = service.discountRule;

        const sourceIds = Array.isArray(sourceServiceId)
          ? sourceServiceId
          : [sourceServiceId];

        const hasTrigger = sourceIds.some((id) => {
          const qty = quantities[id] || 0;
          const sourceService = services.find((s) => s.id === id);
          if (!sourceService) return false;

          if (sourceService.unitKey === "m2" && minQuantityM2 !== undefined) {
            return qty >= minQuantityM2;
          }

          if (sourceService.unitKey === "pcs" && minQuantityPcs !== undefined) {
            return qty >= minQuantityPcs;
          }

          return false;
        });

        if (hasTrigger) {
          price *= 1 - percent / 100;
          discountsApplied[service.id] = percent;
        } else {
          const unit =
            minQuantityM2
              ? "m2"
              : minQuantityPcs
                ? "pcs"
                : null;

          const minQuantity =
            minQuantityM2 ??
            minQuantityPcs ??
            null;

          discountInfo[service.id] = {
            sourceServiceId,
            unit,
            minQuantity,
            percent,
          };
        }

      }

      total += price;
    });

    return {
      total,
      discountsApplied,
      discountInfo,
    };
  }, [quantities, services, mounted]);

  return {
    mounted,
    quantities,
    setQuantity,
    total: calculation.total,
    discountsApplied: calculation.discountsApplied,
    discountInfo: calculation.discountInfo,
  };
}
