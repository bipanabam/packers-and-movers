import Hero from "@/components/Hero";
import InstantQuoteForm from "@/components/InstantQuoteForm";
import { ClockFading } from "lucide-react";

export default function Home() {

  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-background/80 font-sans px-5 md:px-10 pt-16">
      <Hero />
      {/* Instant Quote Form */}
      <div className="bg-primary w-full rounded-2xl px-4 md:px-6 pt-6 pb-2 m-10">
        <div className="flex flex-col items-center gap-2 mb-4">
          <div className="flex gap-5 items-center justify-center">
            <div className="rounded-full p-3 bg-white text-primary">
              <ClockFading size={40} />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h2 className="text-xl md:text-3xl text-white font-semibold">
                Get an Instant Quote
              </h2>
              <p className="text-sm text-white/80 md:text-lg">
                Fast and quick
              </p>
            </div>
          </div>
          <InstantQuoteForm />
        </div>
      </div>
      {/* Moving Services */}
    </div>
  );
}
