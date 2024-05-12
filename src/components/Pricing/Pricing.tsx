import { FaCircleCheck } from "react-icons/fa6";
const Pricing = () => {
  return (
    <div className="w-full max-w-7xl m-auto p-5">
      <div className="text-center text-5xl md:text-6xl font-semibold bg-gradient-to-br from-white via-slate-100 to-black bg-clip-text text-transparent py-10">
        <p className="pb-10">Get everything to build your app</p>
      </div>

      <div className="pricing flex flex-col lg:flex-row justify-start items-center gap-10">
        <div className="basic flex flex-col justify-start items-start border border-gray-800 p-10 rounded-3xl text-gray-400 gap-10 w-full max-w-xl">
          <p className="text-white text-4xl">Basic</p>
          <p className="text-xl">AI chatbot, personalized recommendations</p>
          <p className="text-4xl text-white">$0</p>
          <div className="bg-gradient-to-b from-gray-600 to-gray-800 p-[1px] cursor-pointer rounded-lg w-full">
            <div className="bg-[#090725] rounded-lg w-full py-4 px-8  text-center text-white">
              get started
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-full">
            <div className="flex flex-row justify-start items-center gap-4 border-b border-gray-800 p-4 w-full">
              <FaCircleCheck className="text-[#7950FF] text-xl bg-[#ac93ff] rounded-full" />
              <p className="">Type of threat</p>
            </div>
            <div className="flex flex-row justify-start items-center gap-4 border-b border-gray-800 p-4 w-full">
              <FaCircleCheck className="text-[#7950FF] text-xl bg-[#ac93ff] rounded-full" />
              <p className="">Online presence</p>
            </div>
            <div className="flex flex-row justify-start items-center gap-4 border-b border-gray-800 p-4 w-full">
              <FaCircleCheck className="text-[#7950FF] text-xl bg-[#ac93ff] rounded-full" />
              <p className="">Across to all modules</p>
            </div>
            <div className="flex flex-row justify-start items-center gap-4 border-b border-gray-800 p-4 w-full">
              <FaCircleCheck className="text-[#7950FF] text-xl bg-[#ac93ff] rounded-full" />
              <p className="">Notability</p>
            </div>
          </div>
        </div>
        <div className="premium basic flex flex-col justify-start items-start border border-gray-800 p-10 py-14 rounded-3xl text-gray-400 gap-14 w-full max-w-xl">
          <p className="text-white text-4xl">Premium</p>
          <p className="text-xl">
            Advanced AI chatbot, priority support, analytics dashboard
          </p>
          <p className="text-4xl text-white">$9.99</p>
          <div className="bg-gradient-to-b from-gray-600 to-gray-800 p-[1px] cursor-pointer rounded-lg w-full">
            <div className="bg-[#090725] rounded-lg w-full py-4 px-8  text-center text-white bg-[#706BFF]/80">
              Get Started
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-full">
            <div className="flex flex-row justify-start items-center gap-4 border-b border-gray-800 p-4 w-full">
              <FaCircleCheck className="text-[#7950FF] text-xl bg-[#ac93ff] rounded-full" />
              <p className="">Type of threat</p>
            </div>
            <div className="flex flex-row justify-start items-center gap-4 border-b border-gray-800 p-4 w-full">
              <FaCircleCheck className="text-[#7950FF] text-xl bg-[#ac93ff] rounded-full" />
              <p className="">Online presence</p>
            </div>
            <div className="flex flex-row justify-start items-center gap-4 border-b border-gray-800 p-4 w-full">
              <FaCircleCheck className="text-[#7950FF] text-xl bg-[#ac93ff] rounded-full" />
              <p className="">Across to all modules</p>
            </div>
            <div className="flex flex-row justify-start items-center gap-4 border-b border-gray-800 p-4 w-full">
              <FaCircleCheck className="text-[#7950FF] text-xl bg-[#ac93ff] rounded-full" />
              <p className="">Notability</p>
            </div>
          </div>
        </div>
        <div className="premium basic flex flex-col justify-start items-start border border-gray-800 p-10 rounded-3xl text-gray-400 gap-10 w-full max-w-xl">
          <p className="text-white text-4xl">Enterprise</p>
          <p className="text-xl">AI chatbot, personalized recommendations</p>
          <p className="text-4xl text-white">$20.99</p>
          <div className="bg-gradient-to-b from-gray-600 to-gray-800 p-[1px] cursor-pointer rounded-lg w-full">
            <div className="bg-[#090725] rounded-lg w-full py-4 px-8  text-center text-white">
              get started
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-full">
            <div className="flex flex-row justify-start items-center gap-4 border-b border-gray-800 p-4 w-full">
              <FaCircleCheck className="text-[#7950FF] text-xl bg-[#ac93ff] rounded-full" />
              <p className="">Type of threat</p>
            </div>
            <div className="flex flex-row justify-start items-center gap-4 border-b border-gray-800 p-4 w-full">
              <FaCircleCheck className="text-[#7950FF] text-xl bg-[#ac93ff] rounded-full" />
              <p className="">Online presence</p>
            </div>
            <div className="flex flex-row justify-start items-center gap-4 border-b border-gray-800 p-4 w-full">
              <FaCircleCheck className="text-[#7950FF] text-xl bg-[#ac93ff] rounded-full" />
              <p className="">Across to all modules</p>
            </div>
            <div className="flex flex-row justify-start items-center gap-4 border-b border-gray-800 p-4 w-full">
              <FaCircleCheck className="text-[#7950FF] text-xl bg-[#ac93ff] rounded-full" />
              <p className="">Notability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
