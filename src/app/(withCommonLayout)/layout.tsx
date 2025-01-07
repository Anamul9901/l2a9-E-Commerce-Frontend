import Footer from "@/src/components/Footer/Footer";
import { Navbar } from "@/src/components/UI/navbar";
import { SearchNavbar } from "@/src/components/UI/SearchNavber";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className=" flex flex-col h-screen">
      <div className="max-h-[10px] hidden md:block">
      <Navbar />
      </div>
      <main>
        <SearchNavbar />
        <div className="container mx-auto md:px-4 px-2 flex-grow">
          {children}
        </div>
      </main>
      <Footer />
    </div>
    </div>
  );
};

export default layout;
