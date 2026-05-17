import { notFound } from "next/navigation";

import { serviceData } from "@/constants/service-data";

import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceQuoteBar from "@/components/services/shared/ServiceQuoteBar";
import ServiceOverview from "@/components/services/shared/ServiceOverview";
import ServicePricing from "@/components/services/shared/ServicePricing";
import ServiceIncluded from "@/components/services/shared/ServiceIncluded";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceAreas from "@/components/services/shared/ServiceAreas";
import ServiceWhyChooseUs from "@/components/services/shared/ServiceWhyChooseUs";
import ServiceRecentMoves from "@/components/services/shared/ServiceRecentMoves";
import ServiceTestimonials from "@/components/services/shared/ServiceTestimonials";
import ServiceFAQ from "@/components/services/shared/ServiceFAQ";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import ServiceStickyCTA from "@/components/services/shared/ServiceStickyCTA";

type Props = {
  params: Promise<{
    service: string;
  }>;
};

const ServicePage = async ({
  params,
}: Props) => {
  const { service } = await params;

  const data = serviceData[service];

  if (!data) {
    notFound();
  }

  return (
    <main className="flex flex-col">
      <ServiceHero data={data} />
      <ServiceQuoteBar />
      <ServiceOverview data={data} />
      <ServiceIncluded />
      <ServiceProcess />
      <ServicePricing data={data} />
      <ServiceWhyChooseUs />
      <ServiceRecentMoves data={data} />
      <ServiceAreas service={data.shortTitle} description={data.heroDescription} />
      <ServiceTestimonials data={data} />
      <ServiceFAQ data={data} />
      <ServiceCTA />
      <ServiceStickyCTA />

    </main>
  );
};

export default ServicePage;