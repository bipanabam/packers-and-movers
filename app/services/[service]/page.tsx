import { notFound } from "next/navigation";

import { serviceData } from "@/constants/service-data";

import ServiceHero from "@/components/services/shared/ServiceHero";

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

    </main>
  );
};

export default ServicePage;