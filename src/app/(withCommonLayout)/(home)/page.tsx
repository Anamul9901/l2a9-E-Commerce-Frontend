"use client";
import CategorySection from "@/src/components/HomeSection/CategorySection";
import ExtraSectionOne from "@/src/components/HomeSection/ExtraSectionOne";
import HeroSection from "@/src/components/HomeSection/HeroSection";
import NewsletterSection from "@/src/components/HomeSection/NewsletterSection";
import ProductSection from "@/src/components/HomeSection/ProductSection";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isMounted, setIsMounted] = useState(false);
  // For hydration error handle
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <div className="md:h-[50vh] border rounded-md justify-center items-center overflow-hidden">
        <HeroSection autoSlide={true} autoSlideInterval={3500} />
      </div>
      <div className="mx-auto max-w-7xl md:px-4 px-2">
        {/* <HeroSection /> */}
        {/* Category */}
        <CategorySection />
        {/* home product */}
        <ProductSection />
        <NewsletterSection />
        {/* Extra section1 */}
        <ExtraSectionOne />
      </div>
    </div>
  );
};

export default HomePage;
