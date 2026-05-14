import { notFound } from "next/navigation";

import { cityData } from "@/constants/city-data";
import CityHero from "@/components/city/CityHero";
import CityServices from "@/components/city/CityServices";
import CityAreas from "@/components/city/CityAreas";
import CityRoutes from "@/components/city/CityRoutes";
import CityMapSection from "@/components/city/CityMapSection";
import CityWhyChooseUs from "@/components/city/CityWhyChooseUs";
import CityProcess from "@/components/city/CityProcess";

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
      <CityWhyChooseUs city={data.city} />
      <CityServices data={data} />
      <CityAreas data={data} />
      <CityRoutes data={data} />
      <CityProcess />
      <CityMapSection data={data} />
    </main>
  );
};

export default CityPage;