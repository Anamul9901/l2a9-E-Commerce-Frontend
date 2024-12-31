import SidebarWithSuspense from "@/src/components/UI/dashboard/Sidebar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row w-full">
  {/* Sidebar */}
  <div className="md:w-1/4 w-full">
    <SidebarWithSuspense />
  </div>

  {/* Main Content */}
  <div className="flex justify-center w-full pl-[100px] md:pl-[10px] mt-4 md:mt-0">
    {children}
  </div>
</div>

  );
};

export default layout;
