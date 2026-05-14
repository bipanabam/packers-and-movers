import { CityDataType } from "@/types/city";

export const cityData: Record<string, CityDataType> = {
  kathmandu: {
    slug: "kathmandu-packers-movers",

    city: "Kathmandu",

    province: "Bagmati Province",

    heroTitle:
      "Trusted Packers and Movers in Kathmandu",

    heroDescription:
      "Professional house shifting, office relocation, furniture moving, and packing services across Kathmandu Valley with same-day availability.",

    heroImage:
      "/assets/cities/kathmandu-hero.jpeg",

    areas: [
      "Baneshwor",
      "Koteshwor",
      "Kalanki",
      "Maharajgunj",
      "New Road",
      "Thamel",
      "Gongabu",
      "Boudha",
    ],

    routes: [
      {
        from: "Kathmandu",
        to: "Pokhara",
        duration: "1 Day",
      },
      {
        from: "Kathmandu",
        to: "Chitwan",
        duration: "Same Day",
      },
      {
        from: "Kathmandu",
        to: "Butwal",
        duration: "1-2 Days",
      },
    ],

    landmarks: [
      "Boudhanath",
      "Pashupatinath",
      "Durbar Marg",
      "Tribhuvan Airport",
      "New Road",
    ],

    office: {
      address: "Baneshwor, Kathmandu"
    },

    services: [
      {
        title: "House Shifting",
        description:
          "Apartment and residential moving services across Kathmandu Valley.",
        image:
          "/assets/services/house-shifting.png",
      },
      {
        title: "Office Relocation",
        description:
          "Professional office moving with minimal business downtime.",
        image:
          "/assets/services/office-relocation.jpeg",
      },
    ],

    gallery: [
      {
        image:
          "/assets/gallery/kathmandu-1.jpg",
        alt:
          "Apartment shifting in Baneshwor Kathmandu",
      },
      {
        image:
          "/assets/gallery/kathmandu-2.jpg",
        alt:
          "Office relocation in New Baneshwor",
      },
    ],

    testimonials: [
      {
        name: "Suman KC",
        text:
          "Very professional movers. Smooth shifting from Baneshwor to Lalitpur.",
        area: "Baneshwor",
      },
    ],

    faqs: [
      {
        question:
          "Do you provide same-day shifting in Kathmandu?",
        answer:
          "Yes, we provide same-day moving services based on availability.",
      },
      {
        question:
          "How much does house shifting cost in Kathmandu?",
        answer:
          "Pricing depends on floor access, distance, packing, and truck size.",
      },
    ],

    coordinates: {
      lat: 27.7172,
      lng: 85.324,
    },

    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31397712412!2d85.3261328!3d27.708960349999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1778693323637!5m2!1sen!2snp",
  },
};
