"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const categories = [
  { id: 1, name: "All", slug: "all" },
  { id: 2, name: "House Shifting", slug: "house_shifting" },
  { id: 3, name: "Office Relocation", slug: "office_relocation" },
  { id: 4, name: "Packing Services", slug: "packing_services" },
  { id: 5, name: "Bike Transport", slug: "bike_transport" },
  { id: 6, name: "Car Transport", slug: "car_transport" },
];


const GalleryFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category") || "all";

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value || "all");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mx-auto mt-8 flex max-w-6xl flex-wrap items-center justify-center gap-3 px-6">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
            selectedCategory === category.slug
              ? "bg-primary text-white shadow-lg"
              : "border border-primary/10 bg-white text-foreground/70 hover:border-primary/30 hover:bg-primary/5"
          }`}
          onClick={() => handleChange(category.slug)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilters;