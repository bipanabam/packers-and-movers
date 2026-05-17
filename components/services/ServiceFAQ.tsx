import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";

import { serviceFaq } from "@/constants/faq";

const ServiceFAQ = () => {
  return (
    <FrequentlyAskedQuestions
      variant="compact"
      items={serviceFaq}
    />
  );
};

export default ServiceFAQ;