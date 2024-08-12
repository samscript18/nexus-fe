import Image from "next/image";
import { Button } from "./Button";
import arrowImg from "@/public/Arrow hero.svg";
import logo from "@/public/Logo.png";

const CTA = () => {
  return (
    <div className="relative pt-4 md:pt-8 pb-[1rem] px-[1rem] lg:px-[4rem] md:px-[2rem]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-[100px] pb-[4rem]">
        <div className="lg:max-w-[640px] w-full text-center md:text-start">
          <h1 className="lg:text-7xl md:text-6xl text-4xl text-white font-bold lg:leading-[120px] md:leading-[80px]">
            We hope to see you there!
          </h1>
        </div>
        <Button className="bg-[#004080] text-white w-[200px]" />
        <div className="hidden md:flex absolute top-[25%] right-[35%] lg:top-[5%] lg:right-[33%] md:top-[12%] md:right-[25%]">
          <Image
            src={arrowImg}
            alt="arrow-img"
            className="w-[193px] h-[85px] md:w-[293px] md:h-[185px] lg:w-[481px] lg:h-[294px]"
          />
        </div>
      </div>
      <Image src={logo} alt="nexus-logo" width={1284} height={486} />
    </div>
  );
};
export default CTA;
