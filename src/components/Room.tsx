import Image from "next/image";
import roomImg from "@/public/roomImg.jpg";
import img from "@/public/Text Container.png";

const Room = () => {
  return (
    <div id="room" className="py-8 px-[1rem] lg:px-[4rem] md:px-[2rem]">
      <h1 className="md:text-5xl text-4xl text-white font-extrabold text-center uppercase py-4">
        Who is in the Room?
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-start mt-12 lg:gap-[100px] md:gap-[30px]">
        <Image
          src={roomImg}
          alt="room-img"
          className="w-full h-[450px] object-contain lg:object-contain md:h-[750px] lg:w-[606px] lg:h-full"
        />
        <div className="lg:max-w-[550px] w-full mt-6 md:mt-0">
          <p className="text-white text-[1.15rem] md:text-[1.2rem] leading-[30px] lg:leading-[50px] md:leading-[40px] pb-6">
            NEXUS is filled with individuals who have{" "}
            <span className="md:mx-8">redefined </span> possibilities.
            Individuals whose lives push the frontiers of innovation, leveraging
            their expertise to drive meaningful change. Their leadership blends
            wisdom and courage to face the insurmountable. As pioneers with a
            compassionate spirit, they have forged for those, walking in their
            footprints, an unending influence.
          </p>
          <Image
            src={img}
            alt="room-text-img"
            className="w-[548px] md:w-full md:h-[235px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Room;
