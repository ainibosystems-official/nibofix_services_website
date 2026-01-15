// components/ServiceRow.tsx
import { eurToBgn } from "@/lib/currency";
import { DiscountHint } from "@/lib/pricingConfig";


type DiscountInfo = {
  sourceServiceId: string;
  minQuantity: number;
  percent: number;
};

type Props = {
  t: any;

  label: string;
  unit: string;
  pricePerUnit: number;
  quantity: number;

  isModifier?: boolean;

  // Discount states
  discountPercent?: number;
  discountInfo?: DiscountHint;
  disabled?: boolean;

  onChange: (value: string) => void;
};

export default function ServiceRow({
  t,
  label,
  unit,
  pricePerUnit,
  quantity,
  isModifier,
  discountPercent,
  discountInfo,
  disabled,
  onChange,
}: Props) {
  return (
    <div className="odd:bg-white even:bg-gray-50 border-b last:border-none">
      <div className="flex items-center justify-between gap-4 pb-4">
        {/* LEFT */}
        <div>
          <p className="font-medium text-gray-900">
            {label}
          </p>

          {/* PRICE */}
          {!isModifier && (
            <p className="text-sm text-gray-500">
              €{pricePerUnit.toFixed(2)} / {eurToBgn(pricePerUnit)} лв. / {unit}
            </p>

          )}

          {/* MODIFIER PRICE */}
          {isModifier && (
            <p className="text-sm text-gray-500">
              {pricePerUnit >= 1
                ? `+€${pricePerUnit}`
                : `+${pricePerUnit}%`}
            </p>
          )}

          {/* ✅ APPLIED DISCOUNT ONLY */}
          {discountPercent && (
            <p className="text-sm text-green-600 font-medium">
              –{discountPercent}% {t.appliedDiscount}
            </p>
          )}

        </div>

        {/* RIGHT */}
        {!isModifier ? (
          <input
            suppressHydrationWarning
            type="number"
            inputMode="numeric"
            min={0}
            value={quantity ?? 0}
            onChange={(e) => onChange(e.target.value)}
            className="
              w-12
              h-7
              rounded-md
              border
              px-2
              text-sm
              text-right
              [appearance:textfield]
              [&::-webkit-inner-spin-button]:appearance-none
              [&::-webkit-outer-spin-button]:appearance-none
            "
          />
        ) : (
          <input
            type="checkbox"
            checked={quantity > 0}
            disabled={disabled}
            onChange={(e) =>
              onChange(e.target.checked ? "1" : "0")
            }
            className="
    h-4 w-4
    accent-[#2e7d6f]
    disabled:opacity-40
    disabled:cursor-not-allowed
  "
          />

        )}
      </div>
    </div>
  );
}
