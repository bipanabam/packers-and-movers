import Image from "next/image";
import { Package, Truck, ShieldCheck, Home } from "lucide-react";

const processItems = [
  {
    title: "Professional Packing",
    desc: "Multi-layer protection for fragile and valuable household items.",
    icon: Package,
    image: "/assets/process-packing.jpeg",
  },
  {
    title: "Secure Loading",
    desc: "Systematic loading methods to avoid movement during transportation.",
    icon: ShieldCheck,
    image: "/assets/process-loading-2.jpeg",
  },  
{
    title: "Safe Transportation",
    desc: "GPS-tracked vehicles driven by experienced transport professionals.",
    icon: Truck,
    image: "/assets/process-transport.jpeg",
  },
  {
    title: "Careful Unloading",
    desc: "Furniture placement and organized unloading at your destination.",
    icon: Home,
    image: "/assets/process-unloading.jpeg",
  },
];

const WorkProcess = () => {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-inter text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Our Professional House Shifting Process in Kathmandu
          </h2>

          <p className="mt-4 text-base leading-relaxed text-foreground/60">
            A reliable moving workflow designed for safe, efficient, and
            stress-free relocation experiences across Nepal.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    25vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                    {item.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;