import Image from "next/image";
import img from "@/public/Balls.png";
import { Button } from "./Button";

const Connection = () => {
  return (
    <div className="py-8 px-[1rem] md:px-[2rem] lg:px-[4rem]">
      <h1 className="md:text-5xl text-4xl text-[#004080] font-bold text-center uppercase py-4">
        The Connection
      </h1>
      <div className="flex md:flex-row flex-col-reverse justify-between items-start mt-4 md:mt-10 gap-10 md:gap-[60px] lg:gap-0">
        <Image src={img} alt="image" width={450} height={450} />
        <div className="lg:max-w-[500px] w-full text-center md:text-start">
          <p className="text-[1.5rem] font-bold mb-6 leading-[50px]">
            The fusion of possibilities that{" "}
            <span className="md:mx-12">can </span>
            birth extraordinary outcomes. It is{" "}
            <span className="md:mx-12">the</span> birthplace{" "}
            <span className="md:mx-12">of</span> creativity.
          </p>
          <Button className="bg-[#004080] text-white" />
        </div>
      </div>
    </div>
  );
};
export default Connection;
