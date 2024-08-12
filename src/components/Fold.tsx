import Image from "next/image";
import img from "@/public/dot_1.png";
import img_2 from "@/public/dot_2.png";

interface Props {
  bg1: string;
  bg2: string;
  text: string;
}

const Fold = ({ bg1, bg2, text }: Props) => {
  return (
    <div
      className={`py-12 overflow-x-hidden ${
        text === "text-[#004080]" && "pt-[6rem]"
      }`}
    >
      <div
        className={`${bg1} p-4 w-[110vw] h-[68px] md:h-[80px] rotate-[4deg] -translate-x-8 md:-translate-x-10`}
      ></div>
      <div
        className={`${bg2} p-4 w-[110vw] rotate-[-4deg] -translate-y-14 md:-translate-y-20 -translate-x-8 md:-translate-x-10 flex`}
      >
        <div className="w-full flex justify-center items-center animate-marquee md:gap-4 gap-[2px]">
          {text === "text-white" ? (
            <Image
              src={img}
              alt="dot"
              className="md:w-[40px] md:h-[40px] w-[20px] h-[20px]"
            />
          ) : (
            <Image
              src={img_2}
              alt="dot"
              className="md:w-[40px] md:h-[40px] w-[20px] h-[20px]"
            />
          )}
          <h1
            className={`text-[.85rem] md:text-[2rem] lg:text-[2.5rem] ${text} text-center font-extrabold`}
          >
            NEXUS is starting with the Brown roof city of Ibadan{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Fold;
