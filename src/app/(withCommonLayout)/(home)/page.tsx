import ExtraSectionOne from "@/src/components/HomeSection/ExtraSectionOne";
import HeroSection from "@/src/components/HomeSection/HeroSection";
import AllProducts from "@/src/components/Products/AllProducts";

const HomePage = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <HeroSection />
      {/* All product */}
      <AllProducts />
      {/* Extra section1 */}
      <ExtraSectionOne />
    </div>
  );
};

export default HomePage;
