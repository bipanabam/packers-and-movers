"use client";
import { useRef, useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";


import { customerReviews } from "@/constants/reviews";

const CustomerReview = () => {
    const contentRef = useRef<HTMLElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

      useGSAP(() => {
        if (!contentRef.current) return;

        gsap.fromTo('.image-card div', 
            {xPercent: -100}, 
            {xPercent: 0, duration: 1, ease: 'power2.out'}
        )
        gsap.fromTo('.details p', {xPercent: 100},
            {xPercent: 0, ease: 'power1.out'}
        )
    }, [currentIndex]);

    const totalReviews = customerReviews.length;

    const goToSlide = (index: any) => {
        const newIndex = (index + totalReviews) % totalReviews;
        setCurrentIndex(newIndex);
    }

    const getReviewsAt = (indexOffset: any) => {
        return customerReviews[(currentIndex + indexOffset + totalReviews) %
            totalReviews
        ]
    }

    const currentReview = getReviewsAt(0);
    const prevReview = getReviewsAt(-1);
    const nextReview = getReviewsAt(1);
  return (
    <section 
     ref={contentRef}
     id="customer-reviews"  
     className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16"
     aria-label="Customer testimonials"
    >
        {/* Heading */}
        <div className="text-center mb-16">
            <h2 className="font-semibold font-inter text-3xl md:text-4xl tracking-tight text-foreground">
            What Our Customer Says
            </h2>
            <p className="mt-3 text-sm text-foreground/50 font-sans tracking-wide max-w-md mx-auto leading-relaxed">
            Real Review from our happy customer
            </p>
        </div>
        {/* Review Card */}
        <div className="flex flex-col lg:flex-row items-center md:items-start justify-center gap-8 md:gap-5">
            {/* Image */}
             <div className="image-card w-full md:flex-1 relative">
                <div className="relative w-full h-64 md:h-96 overflow-hidden bg-mutedPrimary/60 backdrop-blur-xl border border-mutedPrimary/40 shadow-2xl rounded-2xl">
                    <Image
                        src={currentReview.image}
                        alt={`${currentReview.name} - ${currentReview.moveType} in ${currentReview.address}`} 
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                        priority={currentIndex === 0}
                    />
                </div>
            </div>
            {/* Review */}
           <div className="flex-1 px-8">
                <div className="flex flex-col items-center justify-between">
                    <div className="border-l-3 border-primary/30 px-7">
                        <div className="details flex flex-col gap-7 justify-between">
                            <ul 
                            className="flex gap-1"
                            aria-label={`${currentReview.rating} out of 5 stars`} role="img"
                            >
                            {[...Array(5)].map((_, i) => (
                                <li key={i}>
                                <Star
                                    size={20}
                                    className={
                                    i < currentReview.rating
                                        ? "text-[#FFCE31]"
                                        : "text-foreground/30"
                                    }
                                    fill={
                                    i < currentReview.rating
                                        ? "#FFCE31"
                                        : "none"
                                    }
                                />
                                </li>
                            ))}
                            </ul>
                            <p className="text-lg font-medium text-foreground/50 italic">
                                "{currentReview.review}"
                            </p>
                            <p className="text-xs text-primary/60">{currentReview.moveType}</p>
                            <div className="flex flex-col gap-1">
                                <p className="text-xl text-foreground">{currentReview.name}</p>
                                <p className="text-xs text-foreground/40">{currentReview.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-7 text-primary">
                        <button 
                        className="bg-mutedPrimary rounded p-2 hover:cursor-pointer hover:scale-105 transition-transform"
                        aria-label="Previous review"
                        onClick={() => goToSlide(currentIndex - 1)}
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button 
                        className="bg-mutedPrimary rounded p-2 hover:cursor-pointer hover:scale-105 transition-transform"
                        aria-label="Next review"
                        onClick={() => goToSlide(currentIndex + 1)}
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
           </div>
        </div>
    </section>
  )
}

export default CustomerReview