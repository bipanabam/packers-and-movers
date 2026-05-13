import BeforeAfter from "@/components/gallery/BeforeAfter";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import GalleryFilters from "@/components/gallery/GalleryFilters";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryIntro from "@/components/gallery/GalleryIntro";
import GalleryTestimonial from "@/components/gallery/GalleryTestimonial";
import WorkProcess from "@/components/gallery/WorkProcess";


const GalleryPage = () => {
  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-background/80 font-sans">
      <GalleryHero />
      <GalleryFilters />
      <GalleryGrid />
      <BeforeAfter />
      <WorkProcess />
      <GalleryTestimonial />
      <GalleryCTA />
    </div>
  )
}

export default GalleryPage;