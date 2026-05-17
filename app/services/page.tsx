import ServiceAreas from "@/components/service/ServiceAreas";
import ServiceCTA from "@/components/service/ServiceCTA";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceGrid from "@/components/service/ServiceGrid";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceHighlights from "@/components/service/ServiceHighlights";
import ServiceIncluded from "@/components/service/ServiceIncluded";
import ServicePricing from "@/components/service/ServicePricing";
import ServiceProcess from "@/components/service/ServiceProcess";
import ServiceTestimonials from "@/components/service/ServiceTestimonials";
import ServiceWhyChooseUs from "@/components/service/ServiceWhyChooseUs";

const ServicePage = () => {
  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-background/80 font-sans">
        <ServiceHero />
        <ServiceHighlights />
        <ServiceGrid />
        <ServiceWhyChooseUs />
        <ServiceProcess />
        <ServicePricing />
        <ServiceIncluded />
        <ServiceAreas />
        <ServiceTestimonials />
        <ServiceFAQ />
        <ServiceCTA />
    </div>
  )
}

export default ServicePage;