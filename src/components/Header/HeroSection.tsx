import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="relative py-10 px-5 mx-auto flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl space-y-10">
      <div className="relative flex flex-col justify-center lg:justify-start items-center lg:items-start gap-10">
        <div className=" bg-black rounded-full py-1 px-4 flex flex-row justify-center items-center gap-2">
          <p className="">AI generation</p>
          <FaArrowRight />
        </div>
        <div className="text-4xl md:text-6xl font-bold text-center lg:text-start">
          <p className="">Generate apps</p>
          <p className="">with ease</p>
        </div>
        <p className="text-base md:text-xl">Lorem ipsum dolor sit amet consectetur </p>
        <div className="btnIndigo py-4 px-5 flex justify-center items-center gap-2">
          <p className="">Start your free trial</p>
          <FaArrowRight />
        </div>
      </div>
      <div className="w-full lg:w-[600px] h-[500px] bg-white rounded-lg ">
        <div className="absolute w-full h-[500px] overflow-visible rounded-lg ">
          <Image
            src="/images/Hero_primary.png"
            fill
            className="object-cover lg:object-contain object-left-top w-full h-full rounded-lg"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
