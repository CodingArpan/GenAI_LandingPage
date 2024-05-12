import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
const Bethepart = () => {
  return (
    <div className="w-full max-w-7xl m-auto p-5 flex flex-col justify-center items-center gap-3 py-20">
      <p className="text-3xl md:text-5xl text-white font-bold">Be part of the future of </p>
      <p className="text-3xl md:text-5xl text-white font-bold">AI tools </p>
      <div className="relative -top-3">
        <Image
          src="/svgs/Vector.svg"
          alt="brainwave"
          width={300}
          height={100}
        />
      </div>
      <p className="text-lg w-full max-w-2xl text-center text-gray-300">
        Unleash the power of AI within Brainwave. Upgrade your productivity with
        Brainwave, the open AI chat app.
      </p>
      <div className="btn flex flex-row justify-center items-center gap-5 bg-[#706BFF] py-4 px-5 rounded-full font-medium my-16">
        <p className="">Start your free trial</p>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Bethepart;
