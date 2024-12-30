import CategorySection from "@/src/components/HomeSection/CategorySection";
import ExtraSectionOne from "@/src/components/HomeSection/ExtraSectionOne";
import HeroSection from "@/src/components/HomeSection/HeroSection";
import ProductSection from "@/src/components/HomeSection/ProductSection";
import AllProducts from "@/src/components/Products/AllProducts";

const HomePage = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <div className="md:h-[50vh] border rounded-md justify-center items-center overflow-hidden">
        <HeroSection autoSlide={true} autoSlideInterval={3500} />
      </div>
      {/* Category */}
      <CategorySection />
      {/* home product */}
      <ProductSection />
      {/* Extra section1 */}
      <ExtraSectionOne />
    </div>
  );
};

export default HomePage;
