import Image from "next/image";
import { FaUserPlus, FaLinkedin } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
const Workflow = () => {
  return (
    <div className="w-full max-w-7xl m-auto flex flex-col justify-center items-center gap-10 py-20 px-5 overflow-visible">
      <div className="text-center text-4xl md:text-5xl font-semibold bg-gradient-to-br from-white to-gray-700 bg-clip-text text-transparent">
        <p className="">Revolutionalize your</p>
        <p className="">workflow</p>
      </div>
      <p className="text-xl text-center w-full max-w-xl text-gray-200">
        Generate highly personalized icebreakers and complete sequences based on
        your prospects information.
      </p>
      <div className="relative grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 justify-center items-center gap-10 lg:gap-20 max-w-5xl py-10">
        <div className="bg-gradient-to-b from-gray-600 to-[#0B092C] rounded-xl p-[1px]">
          <div className="flex flex-col gap-10 p-10 bg-[#0B092C]  rounded-xl">
            <p className="text-3xl font-semibold">
              Generate AI apps without any extra effort
            </p>
            <p className="text-gray-300">
              Our world-class market making services are proven to help local
              and emerging exchanges win traders and gain market-leading
              positions of up to 90% market dominance.
            </p>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet with the one and only ai apps that you
              like lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="relative h-max -top-60">
          <div className="absolute z-30 scale-100 top-16 bg-gradient-to-b from-gray-600 to-[#0B092C] rounded-xl p-[1px]">
            <div className="flex flex-col gap-5 p-10 bg-[#0B092C]  rounded-xl">
              <div className="relative flex flex-row justify-start items-start gap-12">
                <div className="flex flex-row justify-center items-center gap-5">
                  <div className="">
                    <Image
                      src="/images/profile.png"
                      width={100}
                      height={100}
                      alt="name"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <p className="font-semibold text-gray-200 text-xl">
                      George repliner
                    </p>
                    <p className="text-gray-600">500+ connections</p>
                    <div className="flex flex-row justify-center items-center gap-2 bg-[#7845D5] py-2 px-4 rounded-full font-semibold">
                      <FaUserPlus />
                      <p className="">Connect</p>
                    </div>
                  </div>
                </div>
                <div className="absolute linkedin text-[#0A66C2] bg-gray-50 text-4xl rounded-lg -top-5 -right-5">
                  <BsLinkedin />
                </div>
              </div>
              <div className="bg-gradient-to-b from-gray-600 to-[#0B092C] rounded-xl p-[1px]">
                <div className="flex flex-col gap-2 p-4 bg-[#191732] rounded-xl">
                  <p className="text-xl font-semibold text-gray-200">About</p>
                  <p className="text-gray-500 text-lg">
                    Let’s generate you an AI app{" "}
                    <span className="underline"> see more...</span>
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-gray-600 to-[#0B092C] rounded-xl p-[1px]">
                <div className="flex flex-row justify-start items-start gap-3 p-4 bg-[#191732] rounded-xl">
                  <div className="w-14 h-14">
                    <Image
                      src="/images/logoVector.png"
                      width={100}
                      height={100}
                      alt="ai"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-lg">
                    <p className="text-xl font-semibold text-gray-200">
                      Aisickle
                    </p>
                    <p className="text-gray-500">Head of development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute z-20 scale-95 top-8 bg-gradient-to-b from-gray-600 to-[#0B092C] rounded-xl p-[1px]">
            <div className="flex flex-col gap-5 p-10 bg-[#0B092C]  rounded-xl">
              <div className="relative flex flex-row justify-start items-start gap-12">
                <div className="flex flex-row justify-center items-center gap-5">
                  <div className="">
                    <Image
                      src="/images/profile.png"
                      width={100}
                      height={100}
                      alt="name"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <p className="font-semibold text-gray-200 text-xl">
                      George repliner
                    </p>
                    <p className="text-gray-600">500+ connections</p>
                    <div className="flex flex-row justify-center items-center gap-2 bg-[#7845D5] py-2 px-4 rounded-full font-semibold">
                      <FaUserPlus />
                      <p className="">Connect</p>
                    </div>
                  </div>
                </div>
                <div className="absolute linkedin text-[#0A66C2] bg-gray-50 text-4xl rounded-lg -top-5 -right-5">
                  <BsLinkedin />
                </div>
              </div>
              <div className="bg-gradient-to-b from-gray-600 to-[#0B092C] rounded-xl p-[1px]">
                <div className="flex flex-col gap-2 p-4 bg-[#191732] rounded-xl">
                  <p className="text-xl font-semibold text-gray-200">About</p>
                  <p className="text-gray-500 text-lg">
                    Let’s generate you an AI app{" "}
                    <span className="underline"> see more...</span>
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-gray-600 to-[#0B092C] rounded-xl p-[1px]">
                <div className="flex flex-row justify-start items-start gap-3 p-4 bg-[#191732] rounded-xl">
                  <div className="w-14 h-14">
                    <Image
                      src="/images/logoVector.png"
                      width={100}
                      height={100}
                      alt="ai"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-lg">
                    <p className="text-xl font-semibold text-gray-200">
                      Aisickle
                    </p>
                    <p className="text-gray-500">Head of development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute z-10 scale-90 top-0 bg-gradient-to-b from-gray-600 to-[#0B092C] rounded-xl p-[1px]">
            <div className="flex flex-col gap-5 p-10 bg-[#0B092C]  rounded-xl">
              <div className="relative flex flex-row justify-start items-start gap-12">
                <div className="flex flex-row justify-center items-center gap-5">
                  <div className="">
                    <Image
                      src="/images/profile.png"
                      width={100}
                      height={100}
                      alt="name"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <p className="font-semibold text-gray-200 text-xl">
                      George repliner
                    </p>
                    <p className="text-gray-600">500+ connections</p>
                    <div className="flex flex-row justify-center items-center gap-2 bg-[#7845D5] py-2 px-4 rounded-full font-semibold">
                      <FaUserPlus />
                      <p className="">Connect</p>
                    </div>
                  </div>
                </div>
                <div className="absolute linkedin text-[#0A66C2] bg-gray-50 text-4xl rounded-lg -top-5 -right-5">
                  <BsLinkedin />
                </div>
              </div>
              <div className="bg-gradient-to-b from-gray-600 to-[#0B092C] rounded-xl p-[1px]">
                <div className="flex flex-col gap-2 p-4 bg-[#191732] rounded-xl">
                  <p className="text-xl font-semibold text-gray-200">About</p>
                  <p className="text-gray-500 text-lg">
                    Let’s generate you an AI app{" "}
                    <span className="underline"> see more...</span>
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-gray-600 to-[#0B092C] rounded-xl p-[1px]">
                <div className="flex flex-row justify-start items-start gap-3 p-4 bg-[#191732] rounded-xl">
                  <div className="w-14 h-14">
                    <Image
                      src="/images/logoVector.png"
                      width={100}
                      height={100}
                      alt="ai"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-lg">
                    <p className="text-xl font-semibold text-gray-200">
                      Aisickle
                    </p>
                    <p className="text-gray-500">Head of development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
