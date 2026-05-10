import Hero from "@/components/about/Hero";
import WhoWeAre from "@/components/about/WhoWeAre";
import TrustStrip from "@/components/about/TrustStrip";


const AboutPage = () => {
  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-background/80 font-sans mb-10">
      {/* Hero */}
      <Hero />
      <div className="px-5 md:px-10">
        <WhoWeAre />
      </div>
      <TrustStrip />
    </div>
  )
}

export default AboutPage;