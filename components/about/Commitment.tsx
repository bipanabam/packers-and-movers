
import { BadgeCheck, ShieldCheck, HandHeart, Sparkles } from "lucide-react";

const commitments = [
  {
    icon: ShieldCheck,
    title: "No Damage Guaranteed",
    desc: "Every item is packed and transported with strict safety standards.",
  },
  {
    icon: HandHeart,
    title: "Handled With Care",
    desc: "Protection and careful handling at every step of your move.",
  },
];

const Commitment = () => {
  return (
    <section className="w-full mx-auto px-4 md:px-8 py-14 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 overflow-hidden rounded-4xl border border-primary/10 bg-linear-to-br from-background via-background to-primary/5 p-6 md:p-12">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/10 bg-secondary/10 px-4 py-2 text-xs font-medium text-secondary">
            <Sparkles size={16} />
            Our Promise To Every Customer
          </div>

          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl leading-tight">
            Our Commitment To Safe,
            <span className="text-primary"> Stress-Free Moving</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-foreground/70 md:text-base">
            With years of trusted relocation experience across Nepal, we are
            committed to delivering safe, transparent, and reliable moving
            services. Every move is backed by professional handling, timely
            support, and customer-first service standards.
          </p>

          {/* Features */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {commitments.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-primary/10 bg-white/80 p-4 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl"
                >
                    <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-primary/10 p-3 text-primary transition group-hover:bg-primary group-hover:text-white">
                        <Icon size={24} />
                        </div>

                        <div>
                        <h3 className="text-base font-semibold text-foreground">
                            {item.title}
                        </h3>
                        <p className="mt-1 text-xs leading-6 text-foreground/65">
                            {item.desc}
                        </p>
                        </div>
                    </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side Badge */}
        <div className="relative flex items-center justify-center">
          {/* Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-primary/30 blur-3xl" />

          {/* Outer Circle */}
          <div className="relative flex h-80 w-[320px] items-center justify-center rounded-full border-16 border-primary bg-primary shadow-2xl shadow-primary/20">
            {/* Inner Circle */}
            <div className="flex h-60 w-60 flex-col items-center justify-center rounded-full border-4 border-white/80 bg-primary text-center text-white">
              <p className="text-5xl font-bold tracking-tight">5+</p>
              <p className="mt-2 text-3xl font-semibold">Years</p>
              <p className="text-xl text-white/90">of Excellence</p>
            </div>

            {/* Floating Trusted Badge */}
            <div className="absolute bottom-8 flex items-center gap-2 rounded-full border border-white/20 bg-white px-5 py-2 text-sm font-semibold text-primary shadow-xl">
              <BadgeCheck size={18} />
              Trusted Service
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;