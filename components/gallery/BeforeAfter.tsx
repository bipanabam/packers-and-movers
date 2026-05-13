import Image from "next/image";

const BeforeAfter = () => {
  return (
    <section className="w-full bg-primary/5 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-inter text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Before and After Home Relocation Projects
          </h2>

          <p className="mt-4 text-base leading-relaxed text-foreground/60">
            See how our expert movers transform stressful relocation situations
            into organized and smooth moving experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-red-200 bg-white shadow-sm">
            <div className="relative h-125">
              <Image
                src="/assets/before-move.jpg"
                alt="Home before house shifting service in Kathmandu"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute left-5 top-5 rounded-full bg-red-600 px-4 py-1 text-sm font-medium text-white shadow-lg">
                Before Move
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-green-200 bg-white shadow-sm">
            <div className="relative h-125">
              <Image
                src="/assets/after-move.jpg"
                alt="Home after relocation service completed in Nepal"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute left-5 top-5 rounded-full bg-green-600 px-4 py-1 text-sm font-medium text-white shadow-lg">
                After Move
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;