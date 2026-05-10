import Hero from "@/components/about/Hero";
import WhoWeAre from "@/components/about/WhoWeAre";
import TrustStrip from "@/components/about/TrustStrip";
import OurTeam from "@/components/about/OurTeam";
import OurMission from "@/components/about/OurMission";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import HowWeWork from "@/components/about/HowWeWork";
import AboutCTA from "@/components/about/AboutCTA";
import CustomerReview from "@/components/CustomerReview";
import Commitment from "@/components/about/Commitment";


const AboutPage = () => {
  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-background/80 font-sans">
      {/* Hero */}
      <Hero />
      <div className="px-5 md:px-10">
        <WhoWeAre />
      </div>
      <TrustStrip />
      <OurTeam />
      <OurMission />
      <WhyChooseUs />
      <HowWeWork />
      <Commitment />
      <CustomerReview />
      {/* CTA */}
      <AboutCTA />
    </div>
  )
}

export default AboutPage;