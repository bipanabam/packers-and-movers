import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";

const faq = [
  {
    id: 1,
    title: "Do you move outside Kathmandu?",
    description:
      "Yes. We provide nationwide moving services including Pokhara, Chitwan, Butwal, Dharan, Biratnagar and more.",
  },
  {
    id: 2,
    title: "Do you provide same-day shifting?",
    description:
      "Yes, depending on truck availability and location inside Kathmandu Valley.",
  },
  {
    id: 3,
    title: "Can I book intercity relocation?",
    description:
      "Yes. We handle long-distance house shifting and office relocation across Nepal.",
  },
];

const AreasFAQ = () => {
  return (
    <FrequentlyAskedQuestions
      variant="compact"
      items={faq}
    />
  );
};

export default AreasFAQ;