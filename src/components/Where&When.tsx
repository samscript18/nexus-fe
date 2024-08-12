import Link from "next/link";
import { Button } from "./Button";

const Where = () => {
  return (
    <div
      id="where"
      className="py-8 px-[1rem] lg:px-[8rem] md:px-[2rem] bg-[#004080]"
    >
      <h1 className="md:text-5xl text-4xl text-white font-bold text-center uppercase py-4">
        Where & When?
      </h1>
      <div
        className="w-full flex flex-col justify-center
      items-center text-center mt-8"
      >
        <p className="text-white text-[1.15rem] md:text-[1.3rem] leading-[30px] lg:leading-[50px] md:leading-[40px] pb-6">
          NEXUS  is starting with the Brown roof city of Ibadan. Join us as we,
          in coming years, traverse continents, spreading the gospel of the
          future and empowering young men and women to take action.
        </p>
        <Link href={"/register"}>
          <Button className="bg-white text-[#004080]" />
        </Link>
      </div>
    </div>
  );
};
export default Where;
