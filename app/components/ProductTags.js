import { products as allProducts } from "../data/products";

// Brands HH Traders distributes. Every other brand is sold wholesale.
export const DISTRIBUTOR_CATEGORIES = [
  "Castrol",
  "Hagan",
  "Pak Suzuki",
  "Zix Filter",
];

export function getRole(category) {
  return DISTRIBUTOR_CATEGORIES.includes(category) ? "Distributor" : "Wholesale";
}

const fuelStyles = {
  Petrol: "border-emerald-300 bg-emerald-50 text-emerald-700",
  Diesel: "border-amber-300 bg-amber-50 text-amber-800",
  "Petrol & Diesel": "border-indigo-300 bg-indigo-50 text-indigo-700",
  Motorcycle: "border-sky-300 bg-sky-50 text-sky-700",
  Coolant: "border-cyan-300 bg-cyan-50 text-cyan-700",
  Transmission: "border-violet-300 bg-violet-50 text-violet-700",
};

// Petrol / Diesel / Motorcycle / Coolant / Transmission badge for a product
export function ProductTags({ product }) {
  if (!product?.fuel) return null;

  return (
    <div className="mt-3">
      <span
        className={`inline-block rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${
          fuelStyles[product.fuel] ||
          "border-[#E4DCC8] bg-white text-[#5C574B]"
        }`}
      >
        {product.fuel}
      </span>
    </div>
  );
}

// "Distributor" or "Wholesale" tag for a brand
export function RoleTag({ category, className = "" }) {
  const role = getRole(category);
  const isDistributor = role === "Distributor";

  return (
    <span
      className={`inline-block rounded-xl border px-4 py-3 text-sm font-semibold uppercase tracking-wider ${
        isDistributor
          ? "border-[#B5541F] bg-[#B5541F] text-[#F5F1E8]"
          : "border-[#B5541F]/40 bg-[#B5541F]/5 text-[#B5541F]"
      } ${className}`}
    >
      {role}
    </span>
  );
}

// Filter chips (e.g. Delo / Havoline, Petrol / Diesel Engine Oil, Transmission...)
export function GroupChips({ category, value, onChange }) {
  const groups = [
    ...new Set(
      allProducts
        .filter((p) => p.category === category && p.group)
        .map((p) => p.group)
    ),
  ];

  if (groups.length < 2) return null;

  return (
    <div className="mt-5 flex flex-wrap justify-center gap-3">
      {["All", ...groups].map((g) => (
        <button
          key={g}
          type="button"
          onClick={() => onChange(g)}
          className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
            value === g
              ? "border-[#B5541F] bg-[#B5541F] text-[#F5F1E8]"
              : "border-[#E4DCC8] bg-white text-[#5C574B] hover:border-[#B5541F] hover:text-[#B5541F]"
          }`}
        >
          {g}
        </button>
      ))}
    </div>
  );
}
