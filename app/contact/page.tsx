import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import { contactFaq } from "@/constants/faq";
import ContactCTA from "@/components/contact/ContactCTA";
import Hero from "@/components/contact/Hero";
import QuickContactCards from "@/components/contact/QuickContactCards";
import UrgentMovingStrip from "@/components/contact/UrgentMovingStrip";
import MapSection from "@/components/contact/MapSection";
import MessageSection from "@/components/contact/MessageSection";

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-background/80 font-sans px-5 md:px-10">
        {/* Hero */}
        <Hero />
        <QuickContactCards />
        <UrgentMovingStrip />
        {/* Send a Message */}
        <MessageSection />
        <MapSection />
        <FrequentlyAskedQuestions  variant="compact" items={contactFaq} />
        <ContactCTA />
    </div>
  )
}

export default ContactPage;