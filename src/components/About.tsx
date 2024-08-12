import Image from "next/image";
import aboutImg from "@/public/aboutImg.png";

const About = () => {
  return (
    <section id="about">
      <h1 className="md:text-7xl text-5xl text-white font-bold text-center uppercase py-4">
        About
      </h1>
      <p className="pb-8 text-white text-[1.15rem] md:text-[1.2rem] leading-[30px]">
        NEXUS is a project of  NEXT (New Evolutionaries, Xplorers, and
        Thinkers),  an innovative EdTech startup poised to transform the
        educational landscape, serving as a conduit between the industrial and
        intelligence ages. Our mission is to revolutionize education, empowering
        the younger generation to become catalysts for change in Nigeria and
        across Africa. With a bold vision and a team of passionate individuals,
        NEXT is positioned as the next big disruptor, embodying the spirit of
        innovators set to make a lasting impact.
      </p>
      <p className="text-white text-[1.15rem] md:text-[1.2rem] leading-[30px]">
        Our team consist of young visionaries, including our founder, a
        final-year student from the University of Ibadan, who, alongside a team
        of daring young individuals, is committed to dreaming big and driving
        significant change. We believe in the power of technology, creativity,
        and forward-thinking pedagogy to ignite a revolution in learning that
        transcends boundaries and unlocks the full potential of the next
        generation.
      </p>
      <Image
        src={aboutImg}
        alt="about-img"
        className="h-[284px] md:h-[600px] py-12"
      />
    </section>
  );
};
export default About;
