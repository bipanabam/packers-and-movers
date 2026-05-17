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
      "Professional house shifting service for apartments, flats and family homes with secure packing and transportation",

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
        features: [
          "2 Packing Staff",
          "1 Mini Truck",
          "Basic Packing Material",
        ],
      },

      {
        title: "2 BHK Apartment",
        price: "NPR 12,000+",
        description:
          "Complete family relocation package.",
         features: [
          "4 Packing Staff",
          "1 Large Truck",
          "Premium Packing Material",
        ],
        highlighted: true,
      },
      {
        title: "Custom Move",
        price: "Custom Quote",
        description:
          "Pay as you use the services.",
        features: [
          "IT Equipment Packing",
          "Furniture Dismantling",
          "Weekend Relocation",
        ],
      },
    ],

    faqs: [
      {
        question:
          "Do you provide same-day house shifting?",

        answer:
          "Yes. Same-day house shifting is available based on truck availability.",
      },
      {
        question: 
            "Do you move outside Kathmandu?",
        answer:
            "Yes. We provide nationwide moving services including Pokhara, Chitwan, Butwal, Dharan, Biratnagar and more.",
      },
      {
        question: 
            "How do you protect fragile items during moving?",
        answer:
            "Our trained movers use high-quality packing materials such as bubble wrap, foam sheets, stretch film, reinforced boxes, and protective blankets to safely transport fragile household and office items.",
      }
    ],

    testimonials: [
      {
        name: "Rajesh K.C.",
        review:
          "Very professional team. Shifted our house safely and on time. Highly recommend for stress-free moving.",
        location: "Kathmandu, Nepal",
      },
       {
        name: "Celna Mahrzn",
        review:
          "Really happy with their work. Everything was packed neatly and delivered on time without any damage.",
        location: "Kathmandu, Nepal",
      },
    ],

    recentMoves: [
      {
        title:
          "2BHK Apartment Shift in Sankhamul",

        image:
          "/assets/gallery/house-shifting-1.jpeg",

        location: "Sankhamul, Kathmandu",
      },
      {
        title:
           "Family Relocation Service in Koteshwor",

        image:
          "/assets/gallery/house-shifting-2.jpeg",

        location: "Koteshwor, Kathmandu",
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
      "Secure motorcycle and scooter transportation with scratch protection and professional loading",

    heroImage:
      "/assets/services/bike-transport.jpg",

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