"use client";

import Image from "next/image";
import { CityDataType } from "@/types/city";

const CityGallery = ({
  data,
}: {
  data: CityDataType;
}) => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="max-w-2xl">
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Local Work Gallery
          </span>

          <h2 className="mt-5 font-inter text-3xl font-semibold tracking-tight md:text-4xl">
            Real Moving Projects in {data.city}
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data.gallery.map((item, index) => (
            <div
              key={item.image}
              className={`group relative overflow-hidden rounded-4xl ${
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              }`}
            >
              <div className="relative h-75 md:h-full min-h-80">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent opacity-70" />

              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-sm leading-relaxed text-white/85">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityGallery;