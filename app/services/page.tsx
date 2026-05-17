import ServiceAreas from "@/components/services/ServiceAreas";
import ServiceCTA from "@/components/services/ServiceCTA";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceHighlights from "@/components/services/ServiceHighlights";
import ServiceIncluded from "@/components/services/ServiceIncluded";
import ServicePricing from "@/components/services/ServicePricing";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import ServiceWhyChooseUs from "@/components/services/ServiceWhyChooseUs";

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