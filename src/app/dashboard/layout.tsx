import { Navbar } from "@/src/components";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function dashboardLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <div className="bg-[#eeedf6] w-full px-4 py-4 min-h-[86vh] h-fit overflow-x-hidden">
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
