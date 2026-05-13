import AreasFAQ from "@/components/areas-we-serve/AreasFAQ";
import AreasFinalCTA from "@/components/areas-we-serve/AreasFinalCTA";
import AreaHero from "@/components/areas-we-serve/AreasHero";
import CoverageMapSection from "@/components/areas-we-serve/CoverageMapSection";
import FeaturedCities from "@/components/areas-we-serve/FeaturedCities";
import KathmanduCoverage from "@/components/areas-we-serve/KathmanduCoverage";
import NationwideCoverageStrip from "@/components/areas-we-serve/NationwideCoverageStrip";
import QuickContactCards from "@/components/areas-we-serve/QuickContactCards";

const AreasWeServePage = () => {
  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-background/80 font-sans">
      <AreaHero />
      <QuickContactCards />
      <CoverageMapSection />
      <FeaturedCities />
      <KathmanduCoverage />
      <NationwideCoverageStrip />
      <AreasFAQ />
      <AreasFinalCTA />
    </div>
  )
}

export default AreasWeServePage;