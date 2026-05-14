export interface CityDataType {
  slug: string;
  city: string;
  province: string;

  heroTitle: string;
  heroDescription: string;
  heroImage: string;

  areas: string[];

  routes: {
    from: string;
    to: string;
    duration: string;
  }[];

  landmarks: string[];

  office: {
    address: string;
  };

  services: {
    title: string;
    description: string;
    image: string;
  }[];

  gallery: {
    image: string;
    alt: string;
  }[];

  testimonials: {
    name: string;
    text: string;
    area: string;
  }[];

  faqs: {
    question: string;
    answer: string;
  }[];

  coordinates: {
    lat: number;
    lng: number;
  };

  mapEmbed: string;
}