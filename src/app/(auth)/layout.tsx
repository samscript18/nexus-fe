import { Navbar } from "@/src/components";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen bg-[#000] flex items-center justify-center z-[4] pb-[60px] pt-[60px]">
        <div
          className="relative w-[96vw] max-w-[400px] py-8 px-8 md:px-14 bg-[#004080] overflow-hidden rounded-sm z-[4]"
          style={{
            background:
              "radial-gradient(circle, rgba(76,164,207,1) 35%, rgba(135,148,180,1) 100%)",
          }}
        >
          {children}
        </div>
      </section>
    </>
  );
}
