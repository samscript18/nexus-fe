import Image from "next/image";
import { Button } from "./Button";
import nexus from "@/public/NEXUS.png";
import nexus_2 from "@/public/2024.png";
import img from "@/public/apple_vision.png";
import img_2 from "@/public/Group 5.png";

const Header = () => {
  return (
    <header className="pt-[8rem] md:pt-[12rem] lg:pt-[3.5rem] px-[1rem] md:px-[2rem] lg:px-[4rem] pb-[4rem]">
      <div className="flex justify-between items-end pt-6 md:pt-0">
        <div className="lg:max-w-[480px] md:max-w-[400px] w-full">
          <div className="flex md:hidden mb-4">
            <Image
              src={nexus}
              alt="NEXUS"
              className="w-[133px] h-[60px] md:w-[477px] md:h-[164px]"
            />
            <Image
              src={nexus_2}
              alt="2024"
              className="flex absolute top-[34%] right-[5%] md:hidden w-[104px] h-[60px]"
            />
          </div>
          <Image
            src={nexus}
            alt="NEXUS"
            className="hidden md:flex w-[133px] h-[60px] md:w-[477px] md:h-[164px]"
          />
          <h3 className="pt-[4rem] pb-6 text-[1.15rem] text-white leading-[30px]">
            NEXUS is a project of NEXT (New Evolutionaries, Xplorers, and
            Thinkers), on innovative EdTech startup poised to transform the
            educational landscape, serving as a conduit between industrial and
            intelligence ages.
          </h3>
          <Button className="bg-[#004080] text-white" />
        </div>
        <Image
          src={nexus_2}
          alt="2024"
          className="hidden md:flex md:mb-[5rem] lg:mb-[2rem] md:w-[250px] md:h-[138px] lg:w-[400px] lg:h-[180px]"
        />
      </div>
      <div className="absolute top-[27%] right-[32%] md:top-[42%] md:right-[26%] lg:top-[36%] lg:right-[36%]">
        <Image
          src={img}
          alt="google"
          className="w-[104px] h-[63px] md:w-[164px] md:h-[123px] lg:w-[300px] lg:h-[180px]"
        />
      </div>
      <div className="absolute top-[31%] right-[1%] md:top-[54%] md:right-[-1%] lg:top-[51%] lg:right-[2%]">
        <Image
          src={img_2}
          alt="three-thingy"
          className="w-[20px] h-[18px] md:w-[51px] md:h-[49px]"
        />
      </div>
    </header>
  );
};
export default Header;
