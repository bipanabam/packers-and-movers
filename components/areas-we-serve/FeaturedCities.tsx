import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const cities = [
  {
    name: "Kathmandu",
    slug: "/kathmandu-packers-movers",
    image: "/assets/cities/kathmandu.jpg",
    desc: "Our central operations hub serving the entire capital with house shifting and office relocations.",
  },
  {
    name: "Lalitpur",
    slug: "/lalitpur-packers-movers",
    image: "/assets/cities/lalitpur.jpg",
    desc: "Professional movers for Patan, Jawalakhel and Pulchowk.",
  },
  {
    name: "Bhaktapur",
    slug: "/bhaktapur-packers-movers",
    image: "/assets/cities/bhaktapur.jpg",
    desc: "Reliable and efficient packing and transportation services in Bhaktapur.",
  },
  {
    name: "Pokhara",
    slug: "/pokhara-packers-movers",
    image: "/assets/cities/pokhara.jpg",
    desc: "Primary Western hub for intercity relocations, hospitality sector moving, and lakeside logistics.",
  },
  {
    name: "Chitwan",
    slug: "/chitwan-packers-movers",
    image: "/assets/cities/chitwan.jpg",
    desc: "Comprehensive moving and packing solutions for Narayangarh, Bharatpur, and the industrial corridor.",
  },
  {
    name: "Butwal",
    slug: "/butwal-packers-movers",
    image: "/assets/cities/butwal.jpg",
    desc: "Connecting the Lumbini province with rapid transport and commercial office shifting experts.",
  },
];

const FeaturedCities = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <h2 className="mt-4 font-inter text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Featured Cities We Serve
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-foreground/60">
            Explore dedicated city moving services and local relocation support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={city.slug}
              className="group overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={city.image}
                  alt={`Packers and movers in ${city.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {city.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {city.desc}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-secondary">
                  View Services
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCities;

// import Link from "next/link";
// import Image from "next/image";
// import {
//   ArrowRight,
//   MapPin,
// } from "lucide-react";

// const featuredCities = [
//   {
//     name: "Kathmandu",
//     slug: "/kathmandu-packers-movers",
//     image: "/assets/cities/kathmandu.jpg",
//     desc: "Our central operations hub serving the entire capital with house shifting and office relocations.",
//     services: ["House Shifting", "Office Relocation", "Vehicle Transport"],
//     featured: true,
//   },
//   {
//     name: "Pokhara",
//     slug: "/pokhara-packers-movers",
//     image: "/assets/cities/pokhara.jpg",
//     desc: "Reliable intercity moving and hospitality relocation services across Pokhara.",
//     services: ["Apartment Moving", "Packing", "Intercity Delivery"],
//   },
//   {
//     name: "Chitwan",
//     slug: "/chitwan-packers-movers",
//     image: "/assets/cities/chitwan.jpg",
//     desc: "Comprehensive moving and packing solutions for Narayangarh, Bharatpur, and the industrial corridor.",
//     services: ["Commercial Moving", "Storage", "Household Shifting"],
//   },
//   {
//     name: "Lalitpur",
//     slug: "/lalitpur-packers-movers",
//     image: "/assets/cities/lalitpur.jpg",
//     desc: "Trusted movers serving Jawalakhel, Pulchowk and Patan areas.",
//     services: ["Local Shifting", "Office Setup"],
//   },
//   {
//     name: "Bhaktapur",
//     slug: "/bhaktapur-packers-movers",
//     image: "/assets/cities/bhaktapur.jpg",
//     desc: "Efficient packing and transportation services throughout Bhaktapur.",
//     services: ["Furniture Moving", "Safe Packing"],
//   },
//   {
//     name: "Butwal",
//     slug: "/butwal-packers-movers",
//     image: "/assets/cities/butwal.jpg",
//     desc: "Connecting the Lumbini province with rapid transport and commercial office shifting experts.",
//     services: ["Warehouse Moving", "Office Relocation"],
//   },
// ];

// const FeaturedCities = () => {
//   const featured = featuredCities.find((c) => c.featured);
//   const others = featuredCities.filter((c) => !c.featured);

//   return (
//     <section className="w-full py-20">
//       <div className="mx-auto max-w-7xl px-8 md:px-10">
//         {/* Heading */}
//         <div className="max-w-2xl">
//           <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
//             Service Cities
//           </span>

//           <h2 className="mt-4 font-inter text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
//             Packers and Movers Across Nepal
//           </h2>

//           <p className="mt-4 text-sm leading-relaxed text-foreground/60">
//             Explore our dedicated relocation and logistics services across major
//             cities of Nepal with trained movers and secure transportation.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
//           {/* Featured Card */}
//           {featured && (
//             <Link
//               href={featured.slug}
//               className="group relative overflow-hidden rounded-4xl min-h-130"
//             >
//               <Image
//                 src={featured.image}
//                 alt={`Packers and movers in ${featured.name}`}
//                 fill
//                 priority
//                 sizes="(max-width: 768px) 100vw, 25vw"
//                 className="object-cover transition duration-700 group-hover:scale-103"
//               />

//               <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

//               <div className="absolute bottom-0 p-8 md:p-10 text-white">
//                 <div className="flex items-center gap-2 text-sm text-white/80">
//                   <MapPin size={16} />
//                   Nepal Main Operations Hub
//                 </div>

//                 <h3 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
//                   Packers and Movers in {featured.name}
//                 </h3>

//                 <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-white/75">
//                   {featured.desc}
//                 </p>

//                 <div className="mt-6 flex flex-wrap gap-2">
//                   {featured.services.map((service) => (
//                     <div
//                       key={service}
//                       className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-sm"
//                     >
//                       {service}
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-secondary">
//                   Explore City Services
//                   <ArrowRight
//                     size={16}
//                     className="transition group-hover:translate-x-1"
//                   />
//                 </div>
//               </div>
//             </Link>
//           )}

//           {/* Smaller Cards */}
//           <div className="grid gap-6 sm:grid-cols-2">
//             {others.map((city) => (
//               <Link
//                 key={city.slug}
//                 href={city.slug}
//                 className="group relative overflow-hidden rounded-4xl min-h-62.5"
//               >
//                 <Image
//                   src={city.image}
//                   alt={`Packers and movers in ${city.name}`}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 25vw"
//                   className="object-cover transition duration-700 group-hover:scale-110"
//                 />

//                 <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

//                 <div className="absolute bottom-0 p-5 text-white">
//                   <h3 className="text-xl font-semibold">
//                     Packers and Movers in {city.name}
//                   </h3>

//                   <p className="mt-2 text-sm leading-relaxed text-white/75 line-clamp-2">
//                     {city.desc}
//                   </p>

//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {city.services.slice(0, 2).map((service) => (
//                       <div
//                         key={service}
//                         className="rounded-full bg-white/10 px-3 py-1 text-[11px] backdrop-blur-sm"
//                       >
//                         {service}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedCities;
