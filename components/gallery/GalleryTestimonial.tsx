import Image from "next/image";

const GalleryTestimonial = () => {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-4xl bg-primary shadow-2xl">
        <div className="grid items-center lg:grid-cols-2">
          <div className="p-10 md:p-14">
            <div className="flex gap-1 text-yellow-400 text-xl">
              ★★★★★
            </div>

            <blockquote className="mt-6 text-2xl font-semibold leading-relaxed text-white">
              “Very careful handling of furniture. No damage at all during our
              office relocation in Kathmandu.”
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white/20">
                <Image
                  src="/assets/customer-3.jpg"
                  alt="Customer review"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-semibold text-white">Rajesh K.C.</p>
                <p className="text-sm text-white/60">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>

          <div className="relative hidden h-full min-h-105 lg:block">
            <Image
              src="/assets/testimonial-truck.jpeg"
              alt="Moving truck for packers and movers services in Kathmandu"
              fill
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryTestimonial;