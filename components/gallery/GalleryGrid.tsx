"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { galleryItems } from "@/constants/gallery";

const GalleryGrid = () => {
  const searchParams = useSearchParams();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const selectedCategory =
    searchParams.get("category") || "all";

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <section className="w-full py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedImage(index)}
            className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden">
              <Image
                src={item.image}
                alt={`${item.title} - Professional packers and movers service in ${item.location}, Nepal`}
                fill
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

              {/* Category badge */}
              {/* <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
                {item.category.replace("_", " ")}
              </div> */}

              {/* Location chip */}
              <div className="absolute bottom-4 left-4 rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-xs text-white">
                {item.location}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="mt-16 text-center">
          <p className="text-foreground/60">
            No gallery items found for this category.
          </p>
        </div>
      )}

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          {/* Close */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-50 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
          >
            ✕
          </button>

          {/* Image */}
          <div className="relative h-[85vh] w-full max-w-6xl">
            <Image
              src={filteredItems[selectedImage].image}
              alt={filteredItems[selectedImage].title}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          {/* Description */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-2xl bg-black/50 px-5 py-3 text-center text-white backdrop-blur-md">
            <p className="text-sm font-medium">
              {filteredItems[selectedImage].title}
            </p>

            <p className="mt-1 text-xs text-white/70">
              {filteredItems[selectedImage].location}
            </p>
          </div>
          <button
            onClick={() =>
              setSelectedImage(
                selectedImage === 0
                  ? filteredItems.length - 1
                  : selectedImage - 1
              )
            }
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md hover:bg-white/20"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() =>
              setSelectedImage(
                selectedImage === filteredItems.length - 1
                  ? 0
                  : selectedImage + 1
              )
            }
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md hover:bg-white/20"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;