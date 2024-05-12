import Image from "next/image";
import { FaUserPlus, FaLinkedin } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
const Unleashpower = () => {
  return (
    <div className="w-full max-w-7xl m-auto flex flex-col justify-center items-center gap-10 py-20 px-5 overflow-visible">
      <div className="text-center text-5xl md:text-7xl font-semibold bg-gradient-to-br from-white to-gray-700 bg-clip-text text-transparent">
        <p className="">Unleash the</p>
        <p className="">power of AI</p>
      </div>
      <p className="text-lg lg:text-2xl text-center w-full max-w-3xl text-gray-200">
        Automatically generate high-quality sequences uniquely crafted for your
        value proposition and your target prospects.
      </p>

      <div className="bg-gradient-to-b from-gray-600 to-[#0B092C] rounded-xl p-[1px] my-10">
        <div className="flex flex-col gap-10 px-5 py-10 bg-[#0B092C]  rounded-xl max-w-6xl">
          <p className="text-4xl font-extrabold  bg-gradient-to-br from-white to-gray-800 bg-clip-text text-transparent">
            Results from outreach
          </p>

          <div className="flex flex-col md:flex-row items-start justify-start md:items-center gap-10 ">
            <div className="py-5 px-10 bg-red-500/40 border-2 border-red-600 shadow-2xl shadow-red-500/50 rounded-xl">
              <p className="text-2xl font-bold  bg-gradient-to-br from-white to-slate-600 bg-clip-text text-transparent">
                without AI
              </p>
            </div>
            <p className="text-4xl font-semibold  bg-gradient-to-br from-white to-gray-800 bg-clip-text text-transparent">
              5% reply rate
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start justify-start md:items-center gap-10">
            <div className="py-5 px-10 bg-blue-500/40 border-2 border-blue-600 shadow-2xl shadow-blue-500/50 rounded-xl w-full">
              <p className="text-2xl font-bold  bg-gradient-to-br from-white to-slate-600 bg-clip-text text-transparent w-full md:w-96">
                with AI
              </p>
            </div>
            <p className="text-4xl font-semibold  bg-gradient-to-br from-white to-gray-800 bg-clip-text text-transparent w-full">
              15% reply rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unleashpower;
