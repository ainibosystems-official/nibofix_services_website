// lib/pricingConfig.ts

export type ServiceCategory = "repair" | "cleaning";

/* =========================
   DISCOUNT RULE
========================= */
export type DiscountRule = {
   sourceServiceId: string | string[];
   minQuantityM2?: number;
   minQuantityPcs?: number;
   percent: number;
};

/* =========================
   SERVICE
========================= */
export type Service = {
   id: string;
   category: ServiceCategory;

   pricePerUnit: number;
   unitKey: "m2" | "pcs" | "lm";

   // ALL cleaning services MUST have this
   discountRule?: DiscountRule;

   // Optional flags for future UI handling
   isModifier?: boolean;

   // 👇 NEW: visual grouping (UI only)
   group?: string;
};
export type DiscountHint = {
  sourceServiceId: string | string[];
  unit: "m2" | "pcs" | null;
  minQuantity: number | null;
  percent: number;
};

/* =========================
   DISCOUNT RULES
========================= */

const DISCOUNT_FROM_ANY_PAINTING_TO_PREP: DiscountRule = {
   sourceServiceId: [
      "painting_one_no_material",
      "painting_one_with_material",
      "painting_multi_no_material",
      "painting_multi_with_material",
   ],
   minQuantityM2: 10,
   percent: 10,
};

const DISCOUNT_FROM_ANY_FLOORING: DiscountRule = {
   sourceServiceId: [
      "floor_laminate",
      "floor_carpet",
      "floor_pvc",
   ],
   minQuantityM2: 10,
   percent: 10,
};

const DISCOUNT_FROM_BED_TO_SMALL_ASSEMBLY: DiscountRule = {
   sourceServiceId: "assembly_bed",
   minQuantityPcs: 1,
   percent: 10,
};

const DISCOUNT_FROM_TABLE_TO_CHAIR: DiscountRule = {
   sourceServiceId: "assembly_table",
   minQuantityPcs: 1,
   percent: 10,
};

const DISCOUNT_FROM_KITCHEN_SET_TO_ADDONS: DiscountRule = {
   sourceServiceId: "assembly_kitchen_set",
   minQuantityPcs: 1,
   percent: 10,
};

const DISCOUNT_FROM_ANY_ASSEMBLY_TO_REMOVAL: DiscountRule = {
   sourceServiceId: [
      "assembly_bed",
      "assembly_nightstand",
      "assembly_dresser",
      "assembly_desk",
      "assembly_table",
      "assembly_chair",
      "assembly_wardrobe_small",
      "assembly_wardrobe_medium",
      "assembly_wardrobe_large",
      "assembly_kitchen_set",
      "assembly_kitchen_cabinet",
      "assembly_kitchen_extra_cabinet",
   ],
   minQuantityPcs: 1,
   percent: 10,
};

const DISCOUNT_OVER_10_M2: DiscountRule = {
   sourceServiceId: [
      "painting_one_no_material",
      "painting_one_with_material",
      "painting_multi_no_material",
      "painting_multi_with_material",
      "prep_priming_no_material",
      "prep_priming_with_material",
      "prep_wallpaper_removal",
      "prep_old_paint_removal",
      "floor_laminate",
      "floor_carpet",
      "floor_pvc",
      "floor_old_removal",
   ],
   minQuantityM2: 10,
   percent: 10,
};

const DISCOUNT_SELF_OVER_LIMIT_10_PERCENT: DiscountRule = {
   sourceServiceId: [
      "painting_one_no_material",
      "painting_one_with_material",
      "painting_multi_no_material",
      "painting_multi_with_material",
      "prep_priming_no_material",
      "prep_priming_with_material",
      "prep_wallpaper_removal",
      "prep_old_paint_removal",
      "floor_laminate",
      "floor_carpet",
      "floor_pvc",
      "floor_old_removal",
      "assembly_bed",
      "assembly_nightstand",
      "assembly_dresser",
      "assembly_desk",
      "assembly_table",
      "assembly_chair",
      "assembly_wardrobe_small",
      "assembly_wardrobe_medium",
      "assembly_wardrobe_large",
      "assembly_kitchen_set",
      "assembly_kitchen_cabinet",
      "assembly_kitchen_extra_cabinet",
      "assembly_old_furniture_removal",
      "assembly_carry_out",
      "sofa_2_seats",
      "sofa_3_seats",
      "sofa_corner_small",
      "sofa_corner_large",
      "mattress_single_one_side",
      "mattress_single_two_side",
      "mattress_double_one_side",
      "mattress_double_two_side",
      "carpet_cleaning",
   ],
   minQuantityM2: 10,
   minQuantityPcs: 1,
   percent: 10,
};

const DISCOUNT_SELF_OVER_LIMIT_10_PERCENT_CARPETS: DiscountRule = {
   sourceServiceId: [
      "painting_one_no_material",
      "painting_one_with_material",
      "painting_multi_no_material",
      "painting_multi_with_material",
      "prep_priming_no_material",
      "prep_priming_with_material",
      "prep_wallpaper_removal",
      "prep_old_paint_removal",
      "floor_laminate",
      "floor_carpet",
      "floor_pvc",
      "floor_old_removal",
      "assembly_bed",
      "assembly_nightstand",
      "assembly_dresser",
      "assembly_desk",
      "assembly_table",
      "assembly_chair",
      "assembly_wardrobe_small",
      "assembly_wardrobe_medium",
      "assembly_wardrobe_large",
      "assembly_kitchen_set",
      "assembly_kitchen_cabinet",
      "assembly_kitchen_extra_cabinet",
      "assembly_old_furniture_removal",
      "assembly_carry_out",
      "sofa_2_seats",
      "sofa_3_seats",
      "sofa_corner_small",
      "sofa_corner_large",
      "mattress_single_one_side",
      "mattress_single_two_side",
      "mattress_double_one_side",
      "mattress_double_two_side",
   ],
   minQuantityM2: 10,
   minQuantityPcs: 1,
   percent: 10,
};


const DISCOUNT_SOFA_SELF_20_PERCENT: DiscountRule = {
   sourceServiceId: [
      "sofa_2_seats",
      "sofa_3_seats",
      "sofa_corner_small",
      "sofa_corner_large",
   ],
   minQuantityPcs: 1,
   percent: 20,
};

/* =========================
   SERVICES CONFIG
========================= */
export const services: Service[] = [
   /* ==================================================
      REPAIR — PAINTING (WALLS & CEILINGS)
   ================================================== */

   { id: "painting_one_no_material", category: "repair", pricePerUnit: 4.4, unitKey: "m2", group: "painting" },
   { id: "painting_one_with_material", category: "repair", pricePerUnit: 6.8, unitKey: "m2", group: "painting" },

   { id: "painting_multi_no_material", category: "repair", pricePerUnit: 5.6, unitKey: "m2", group: "painting" },
   { id: "painting_multi_with_material", category: "repair", pricePerUnit: 8.2, unitKey: "m2", group: "painting" },

   /* ==================================================
      REPAIR — PREPARATION
   ================================================== */

   { id: "prep_priming_no_material", category: "repair", pricePerUnit: 1.2, unitKey: "m2", discountRule: DISCOUNT_FROM_ANY_PAINTING_TO_PREP, group: "preparation" },
   { id: "prep_priming_with_material", category: "repair", pricePerUnit: 1.7, unitKey: "m2", discountRule: DISCOUNT_FROM_ANY_PAINTING_TO_PREP, group: "preparation" },
   { id: "prep_wallpaper_removal", category: "repair", pricePerUnit: 2.4, unitKey: "m2", discountRule: DISCOUNT_FROM_ANY_PAINTING_TO_PREP, group: "preparation" },
   { id: "prep_old_paint_removal", category: "repair", pricePerUnit: 2.2, unitKey: "m2", discountRule: DISCOUNT_FROM_ANY_PAINTING_TO_PREP, group: "preparation" },
   { id: "prep_extra_plastering", category: "repair", pricePerUnit: 3.9, unitKey: "m2", discountRule: DISCOUNT_FROM_ANY_PAINTING_TO_PREP, group: "preparation" },


   /* ==================================================
      REPAIR — FLOORING (LABOR ONLY)
   ================================================== */

   { id: "floor_laminate", category: "repair", pricePerUnit: 6.6, unitKey: "m2", group: "flooring" },
   { id: "floor_carpet", category: "repair", pricePerUnit: 6.6, unitKey: "m2", group: "flooring" },
   { id: "floor_pvc", category: "repair", pricePerUnit: 6.0, unitKey: "m2", group: "flooring" },

   { id: "floor_old_removal", category: "repair", pricePerUnit: 2.0, unitKey: "m2", discountRule: DISCOUNT_FROM_ANY_FLOORING, group: "flooring" },
   { id: "floor_leveling", category: "repair", pricePerUnit: 4.5, unitKey: "m2", discountRule: DISCOUNT_FROM_ANY_FLOORING, group: "flooring" },
   { id: "floor_underlay", category: "repair", pricePerUnit: 1.0, unitKey: "m2", discountRule: DISCOUNT_FROM_ANY_FLOORING, group: "flooring" },
   { id: "floor_skirting", category: "repair", pricePerUnit: 2.5, unitKey: "lm", discountRule: DISCOUNT_FROM_ANY_FLOORING, group: "flooring" },
   { id: "floor_transition_strip", category: "repair", pricePerUnit: 5.0, unitKey: "pcs", discountRule: DISCOUNT_FROM_ANY_FLOORING, group: "flooring" },


   /* ==================================================
      REPAIR — FURNITURE ASSEMBLY (LABOR ONLY)
   ================================================== */

   { id: "assembly_bed", category: "repair", pricePerUnit: 25, unitKey: "pcs", group: "assembly" },

   { id: "assembly_nightstand", category: "repair", pricePerUnit: 10, unitKey: "pcs", discountRule: DISCOUNT_FROM_BED_TO_SMALL_ASSEMBLY, group: "assembly" },
   { id: "assembly_dresser", category: "repair", pricePerUnit: 20, unitKey: "pcs", discountRule: DISCOUNT_FROM_BED_TO_SMALL_ASSEMBLY, group: "assembly" },
   { id: "assembly_desk", category: "repair", pricePerUnit: 20, unitKey: "pcs", discountRule: DISCOUNT_FROM_BED_TO_SMALL_ASSEMBLY, group: "assembly" },

   { id: "assembly_table", category: "repair", pricePerUnit: 20, unitKey: "pcs", group: "assembly" },

   { id: "assembly_chair", category: "repair", pricePerUnit: 7, unitKey: "pcs", discountRule: DISCOUNT_FROM_TABLE_TO_CHAIR, group: "assembly" },

   { id: "assembly_wardrobe_small", category: "repair", pricePerUnit: 40, unitKey: "pcs", group: "assembly" },
   { id: "assembly_wardrobe_medium", category: "repair", pricePerUnit: 60, unitKey: "pcs", group: "assembly" },
   { id: "assembly_wardrobe_large", category: "repair", pricePerUnit: 80, unitKey: "pcs", group: "assembly" },

   { id: "assembly_kitchen_set", category: "repair", pricePerUnit: 140, unitKey: "pcs", group: "assembly" },

   { id: "assembly_kitchen_cabinet", category: "repair", pricePerUnit: 25, unitKey: "pcs", discountRule: DISCOUNT_FROM_KITCHEN_SET_TO_ADDONS, group: "assembly" },
   { id: "assembly_kitchen_extra_cabinet", category: "repair", pricePerUnit: 20, unitKey: "pcs", discountRule: DISCOUNT_FROM_KITCHEN_SET_TO_ADDONS, group: "assembly" },
   { id: "assembly_wall_mount", category: "repair", pricePerUnit: 10, unitKey: "pcs", discountRule: DISCOUNT_FROM_KITCHEN_SET_TO_ADDONS, group: "assembly" },

   { id: "assembly_old_furniture_removal", category: "repair", pricePerUnit: 15, unitKey: "pcs", discountRule: DISCOUNT_FROM_ANY_ASSEMBLY_TO_REMOVAL, group: "assembly" },
   { id: "assembly_carry_out", category: "repair", pricePerUnit: 10, unitKey: "pcs", discountRule: DISCOUNT_FROM_ANY_ASSEMBLY_TO_REMOVAL, group: "assembly" },

   /* ==================================================
      CLEANING — UPHOLSTERED FURNITURE
   ================================================== */

   { id: "sofa_2_seats", category: "cleaning", pricePerUnit: 30, unitKey: "pcs", discountRule: DISCOUNT_OVER_10_M2, group: "furniture_cleaning" },
   { id: "sofa_3_seats", category: "cleaning", pricePerUnit: 40, unitKey: "pcs", discountRule: DISCOUNT_OVER_10_M2, group: "furniture_cleaning" },
   { id: "sofa_corner_small", category: "cleaning", pricePerUnit: 50, unitKey: "pcs", discountRule: DISCOUNT_OVER_10_M2, group: "furniture_cleaning" },
   { id: "sofa_corner_large", category: "cleaning", pricePerUnit: 60, unitKey: "pcs", discountRule: DISCOUNT_OVER_10_M2, group: "furniture_cleaning" },
   { id: "armchair", category: "cleaning", pricePerUnit: 15, unitKey: "pcs", discountRule: DISCOUNT_SOFA_SELF_20_PERCENT, group: "furniture_cleaning" },
   { id: "pouf", category: "cleaning", pricePerUnit: 8, unitKey: "pcs", discountRule: DISCOUNT_SOFA_SELF_20_PERCENT, group: "furniture_cleaning" },

   /* ==================================================
      CLEANING — MATTRESSES
   ================================================== */

   { id: "mattress_single_one_side", category: "cleaning", pricePerUnit: 20, unitKey: "pcs", discountRule: DISCOUNT_OVER_10_M2, group: "mattress_cleaning" },
   { id: "mattress_single_two_side", category: "cleaning", pricePerUnit: 30, unitKey: "pcs", discountRule: DISCOUNT_OVER_10_M2, group: "mattress_cleaning" },
   { id: "mattress_double_one_side", category: "cleaning", pricePerUnit: 30, unitKey: "pcs", discountRule: DISCOUNT_OVER_10_M2, group: "mattress_cleaning" },
   { id: "mattress_double_two_side", category: "cleaning", pricePerUnit: 45, unitKey: "pcs", discountRule: DISCOUNT_OVER_10_M2, group: "mattress_cleaning" },

   /* ==================================================
      CLEANING — CARPETS & RUGS
   ================================================== */

   { id: "carpet_cleaning", category: "cleaning", pricePerUnit: 3.5, unitKey: "m2", discountRule: DISCOUNT_SELF_OVER_LIMIT_10_PERCENT_CARPETS, group: "carpet_cleaning" },

   /* ==================================================
      CLEANING — WINDOWS & BALCONIES
   ================================================== */

   { id: "window_single", category: "cleaning", pricePerUnit: 6, unitKey: "pcs", discountRule: DISCOUNT_SELF_OVER_LIMIT_10_PERCENT, group: "windows_balcony" },
   { id: "window_double", category: "cleaning", pricePerUnit: 10, unitKey: "pcs", discountRule: DISCOUNT_SELF_OVER_LIMIT_10_PERCENT, group: "windows_balcony" },
   { id: "window_french", category: "cleaning", pricePerUnit: 12, unitKey: "pcs", discountRule: DISCOUNT_SELF_OVER_LIMIT_10_PERCENT, group: "windows_balcony" },
   { id: "balcony_door", category: "cleaning", pricePerUnit: 10, unitKey: "pcs", discountRule: DISCOUNT_SELF_OVER_LIMIT_10_PERCENT, group: "windows_balcony" },
   { id: "balcony", category: "cleaning", pricePerUnit: 15, unitKey: "pcs", discountRule: DISCOUNT_SELF_OVER_LIMIT_10_PERCENT, group: "windows_balcony" },
   { id: "balcony_large", category: "cleaning", pricePerUnit: 20, unitKey: "pcs", discountRule: DISCOUNT_SELF_OVER_LIMIT_10_PERCENT, group: "windows_balcony" },

   /* ==================================================
      CLEANING — APARTMENT DEEP CLEANING
   ================================================== */

   { id: "apartment_cleaning", category: "cleaning", pricePerUnit: 4.5, unitKey: "m2", group: "apartment_cleaning" },

   /* ==================================================
      CLEANING — MODIFIERS (NO DISCOUNTS)
   ================================================== */

   { id: "modifier_heavy_dirt", category: "cleaning", pricePerUnit: 20, unitKey: "pcs", isModifier: true, group: "cleaning_modifiers" },
   { id: "modifier_pet_hair", category: "cleaning", pricePerUnit: 20, unitKey: "pcs", isModifier: true, group: "cleaning_modifiers" },
   { id: "modifier_disinfection", category: "cleaning", pricePerUnit: 5, unitKey: "pcs", isModifier: true, group: "cleaning_modifiers" },
];
