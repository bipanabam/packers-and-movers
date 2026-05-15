import { notFound } from "next/navigation";

import { cityData } from "@/constants/city-data";
import CityHero from "@/components/city/CityHero";
import CityServices from "@/components/city/CityServices";
import CityAreas from "@/components/city/CityAreas";
import CityRoutes from "@/components/city/CityRoutes";
import CityMapSection from "@/components/city/CityMapSection";
import CityWhyChooseUs from "@/components/city/CityWhyChooseUs";
import CityProcess from "@/components/city/CityProcess";
import CityPricing from "@/components/city/CityPricing";
import CityGallery from "@/components/city/CityGallery";
import CityTestimonials from "@/components/city/CityTestimonials";
import CityCTA from "@/components/city/CityCTA";
import CityFAQ from "@/components/city/CityFAQ";
import CityLandmarks from "@/components/city/CityLandmarks";
import CityStickyCTA from "@/components/city/CityStickyCTA";
import CityTrustStats from "@/components/city/CityTrustStats";
import CitySEOIntro from "@/components/areas-we-serve/CitySEOIntro";
import CityMovingChallenges from "@/components/city/CityMovingChallenges";

type PageProps = {
  params: Promise<{
    city: string;
  }>;
};

export async function generateStaticParams() {
  return [
    { city: "kathmandu-packers-movers" },
    { city: "lalitpur-packers-movers" },
    { city: "pokhara-packers-movers" },
    { city: "bhaktapur-packers-movers" },
  ];
}

export async function generateMetadata({
  params,
}: PageProps) {
  const { city } = await params;

  const normalized =
    city.replace("-packers-movers", "");

  const data = cityData[normalized];

  if (!data) {
    return {};
  }

  return {
    title: `Packers and Movers in ${data.city} | House Shifting Services in Nepal`,
    description: data.heroDescription,
  };
}

const CityPage = async ({
  params,
}: PageProps) => {
  const { city } = await params;

  const normalized =
    city.replace("-packers-movers", "");

  const data = cityData[normalized];

  if (!data) {
    notFound();
  }

  return (
    <main className="flex flex-col">
      <CityHero data={data} />
      <CityTrustStats />
      <CityWhyChooseUs city={data.city} />
      <CitySEOIntro data={data} />
      <CityServices data={data} />
      <CityAreas data={data} />
      <CityRoutes data={data} />
      <CityMovingChallenges city={data.city} />
      <CityProcess />
      <CityPricing data={data} />
      <CityGallery data={data} />
      <CityTestimonials data={data} />
      <CityLandmarks data={data} />
      <CityMapSection data={data} />
      <CityFAQ data={data} />
      <CityCTA city={data.city} />
      <CityStickyCTA />
    </main>
  );
};

export default CityPage;