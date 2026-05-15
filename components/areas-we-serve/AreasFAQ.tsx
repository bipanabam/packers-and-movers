import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";

import { areaWeServeFaq } from "@/constants/faq";

const AreasFAQ = () => {
  return (
    <FrequentlyAskedQuestions
      variant="compact"
      items={areaWeServeFaq}
    />
  );
};

export default AreasFAQ;