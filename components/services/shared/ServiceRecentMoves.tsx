import Image from "next/image";

import { ServiceDataType } from "@/types/service";

const ServiceRecentMoves = ({
  data,
}: {
  data: ServiceDataType;
}) => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-10 lg:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Recent Moves
          </span>
          <h2 className="mt-5 font-inter text-3xl font-semibold tracking-tight md:text-4xl">
            Recent {data.shortTitle} Moving Projects
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {data.recentMoves.map((move) => (
            <article
              key={move.title}
              className="overflow-hidden rounded-4xl border border-primary/10 bg-white shadow-sm"
            >
              <div className="relative h-64">
                <Image
                  src={move.image}
                  alt={move.title}
                  fill
                  loading="eager"
                  sizes="(max-width:1024px)100vw,50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-semibold">
                  {move.title}
                </h3>

                <p className="mt-2 text-sm text-foreground/60">
                  {move.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceRecentMoves;