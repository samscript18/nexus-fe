import Image from "next/image";
import visionImg from "@/public/Image.svg";
import { Button } from "./Button";

const Vision = () => {
  return (
    <div id="vision" className="py-8 px-[1rem] lg:px-[4rem] md:px-[2rem]">
      <h1 className="md:text-5xl text-4xl text-white font-extrabold text-center uppercase py-4">
        The Vision
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 lg:gap-[100px] md:gap-[30px]">
        <Image
          src={visionImg}
          alt="about-img"
          className="w-full md:w-[355px] md:h-[300px] lg:w-[492px] lg:h-[400px]"
        />
        <p className="text-white text-[1.15rem] md:text-[1.2rem] lg:leading-[50px] md:leading-[40px] leading-[30px] mt-4 md:mt-0">
          The pace of change in our world is unprecedented.
          <span className="lg:ml-12"> Technological </span>
          advancements,<span className="lg:mx-12">evolving</span> societal
          norms, and new ways of thinking are reshaping our reality. Change
          comes with uncertainty and with uncertainty, opportunity.  It is in
          these moments of transition that the seeds of greatness are sown.
        </p>
      </div>
      <div
        className="w-full flex flex-col justify-center
      items-center md:text-center mt-6 md:mt-10"
      >
        <p className="text-white text-[1.15rem] md:text-[1.2rem] lg:leading-[50px] md:leading-[40px] leading-[30px] pb-6 md:max-w-[900px]">
          The future is a promise – a promise of progress, betterment and a
          brighter world. Each one of us has a role to play in shaping it. Let
          us not fear the future but welcome it with open arms. Let us be the
          pioneers, trailblazers and visionaries who turn potential into
          reality.
        </p>
        <Button className="bg-[#004080] text-white" />
      </div>
    </div>
  );
};
export default Vision;
