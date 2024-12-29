import ExtraSectionOne from "@/src/components/HomeSection/ExtraSectionOne";
import HeroSection from "@/src/components/HomeSection/HeroSection";
import ProductSection from "@/src/components/HomeSection/ProductSection";
import AllProducts from "@/src/components/Products/AllProducts";

const HomePage = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <HeroSection />
      {/* home product */}
      <ProductSection />
      {/* Extra section1 */}
      <ExtraSectionOne />
    </div>
  );
};

export default HomePage;
