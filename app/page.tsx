import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-background/80 font-sans px-5 md:px-10 pt-16">
      <Hero />

      <h1 className="text-4xl font-bold text-primary">
        Nepal Packers and Movers
      </h1>
    </div>
  );
}
