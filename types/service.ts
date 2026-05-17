
export interface ServiceDataType {
  slug: string;

  category:
    | "residential"
    | "office"
    | "vehicle"
    | "packing";

  title: string;

  shortTitle: string;

  heroTitle: string;

  heroDescription: string;

  heroImage: string;

  seoTitle: string;

  seoDescription: string;

  intro: {
    title: string;
    description: string;
  };

  highlights: string[];

  included: {
    title: string;
    icon: string;
  }[];

  process: {
    step: string;
    description: string;
  }[];

  pricing: {
    title: string;
    price: string;
    features: string[];
    description: string;
    highlighted?: boolean;
  }[];

  faqs: {
    question: string;
    answer: string;
  }[];

  testimonials: {
    name: string;
    review: string;
    location: string;
  }[];

  recentMoves: {
    title: string;
    image: string;
    location: string;
  }[];

  areas: string[];

  stats: {
    value: string;
    label: string;
  }[];

  whyChoose: {
    title: string;
    description: string;
    icon: string;
  }[];

  gallery: {
    image: string;
    alt: string;
  }[];

  specializedSections?: {
    vehicleTypes?: boolean;

    vehicleProtection?: boolean;

    officeEquipment?: boolean;

    fragileHandling?: boolean;

    packingMaterials?: boolean;
  };

  vehicleTypes?: {
    title: string;
    description: string;
  }[];

  vehicleProtection?: {
    title: string;
    description: string;
  }[];

  officeEquipment?: {
    title: string;
    description: string;
  }[];
}