import Image from "next/image";

import { CityDataType } from "@/types/city";

const CityServices = ({
  data,
}: {
  data: CityDataType;
}) => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-inter text-3xl font-semibold tracking-tight md:text-4xl text-center">
          Moving Services in {data.city}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {data.services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm"
            >
              <div className="relative h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width:768px)100vw,25vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityServices;