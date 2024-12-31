import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <div className="min-h-[95vh]">{children}</div>;
};

export default layout;
