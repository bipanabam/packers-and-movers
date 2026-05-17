import { ServiceDataType } from "@/types/service";

export const serviceData: Record<
  string,
  ServiceDataType
> = {
  "house-shifting": {
    slug: "house-shifting",

    category: "residential",

    title:
      "House Shifting Services in Kathmandu",

    shortTitle: "House Shifting",

    heroTitle:
      "Safe & Reliable House Shifting in Kathmandu",

    heroDescription:
      "Professional house shifting service for apartments, flats and family homes with secure packing and transportation.",

    heroImage:
      "/assets/services/house-shifting.png",

    seoTitle:
      "House Shifting Services in Kathmandu | Packers & Movers",

    seoDescription:
      "Affordable and professional house shifting services in Kathmandu with packing, loading, transportation and furniture setup.",

    intro: {
      title:
        "Complete House Relocation Solution",

      description:
        "We provide professional apartment and residential relocation with trained movers, premium packing materials and secure transportation.",
    },

    highlights: [
      "Same-Day Moving",
      "Furniture Protection",
      "Packing Included",
    ],

    included: [
      {
        title: "Packing Materials",
        icon: "Package",
      },

      {
        title: "Furniture Wrapping",
        icon: "Sofa",
      },

      {
        title: "Loading & Unloading",
        icon: "Truck",
      },
    ],

    process: [
      {
        step: "Request Quote",
        description:
          "Share your moving details.",
      },

      {
        step: "Packing & Loading",
        description:
          "Professional wrapping and handling.",
      },

      {
        step: "Transportation",
        description:
          "Safe transportation across Nepal.",
      },
    ],

    pricing: [
      {
        title: "1 BHK Apartment",

        price: "NPR 6,000+",

        description:
          "Suitable for studio and 1BHK apartments.",
      },

      {
        title: "2 BHK Apartment",

        price: "NPR 12,000+",

        description:
          "Complete family relocation package.",

        highlighted: true,
      },
    ],

    faqs: [
      {
        question:
          "Do you provide same-day house shifting?",

        answer:
          "Yes. Same-day house shifting is available based on truck availability.",
      },
    ],

    testimonials: [
      {
        name: "Rajesh KC",

        review:
          "Smooth relocation from Baneshwor to Lalitpur.",

        location: "Kathmandu",
      },
    ],

    recentMoves: [
      {
        title:
          "2BHK Apartment Shift in Baneshwor",

        image:
          "/assets/gallery/house-shifting-1.jpeg",

        location: "Kathmandu",
      },
    ],

    areas: [
      "Kathmandu",
      "Lalitpur",
      "Bhaktapur",
      "Pokhara",
    ],

    stats: [
      {
        value: "1200+",
        label: "Moves Completed",
      },

      {
        value: "4.9★",
        label: "Customer Rating",
      },
    ],

    whyChoose: [
      {
        title: "Trained Movers",

        description:
          "Experienced relocation professionals.",

        icon: "Users",
      },
    ],

    gallery: [
      {
        image:
          "/assets/gallery/house-shifting-2.jpeg",

        alt:
          "House shifting service in Kathmandu",
      },
    ],

    specializedSections: {
      fragileHandling: true,
    },
  },

  "bike-transport": {
    slug: "bike-transport",

    category: "vehicle",

    title:
      "Bike Transport Services in Nepal",

    shortTitle: "Bike Transport",

    heroTitle:
      "Safe Bike Transport Across Nepal",

    heroDescription:
      "Secure motorcycle and scooter transportation with scratch protection and professional loading.",

    heroImage:
      "/assets/services/bike-transport.jpeg",

    seoTitle:
      "Bike Transport Service in Nepal",

    seoDescription:
      "Professional bike transport services across Nepal with safe loading and secure delivery.",

    intro: {
      title:
        "Professional Two-Wheeler Transportation",

      description:
        "We safely transport motorcycles and scooters with secure locking and protective wrapping.",
    },

    highlights: [
      "Scratch Protection",
      "Door Pickup",
      "Secure Locking",
    ],

    included: [
      {
        title: "Wheel Locking",

        icon: "Bike",
      },

      {
        title: "Protective Wrapping",

        icon: "Shield",
      },
    ],

    process: [],

    pricing: [],

    faqs: [],

    testimonials: [],

    recentMoves: [],

    areas: [],

    stats: [],

    whyChoose: [],

    gallery: [],

    specializedSections: {
      vehicleTypes: true,

      vehicleProtection: true,
    },

    vehicleTypes: [
      {
        title: "Scooters",

        description:
          "Safe transportation for scooters and electric bikes.",
      },

      {
        title: "Sports Bikes",

        description:
          "Specialized handling for premium motorcycles.",
      },
    ],

    vehicleProtection: [
      {
        title: "Multi-Layer Wrapping",

        description:
          "Protection against scratches and dust.",
      },

      {
        title: "Secure Wheel Locking",

        description:
          "Stability during long-distance transport.",
      },
    ],
  },
};