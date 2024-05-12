import { RxTwitterLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import Pricing from "../Pricing/Pricing";
const Footer = () => {
  const items = [
    "home",
    "Pricing",
    "FAQs",
    "changelog",
    "licence",
    "term",
    "conytact",
  ];
  return (
    <div className="w-full max-w-7xl m-auto p-5 py-10 ">
      <div className="socialmenus flex flex-row justify-center items-center gap-5 ">
        <div className="rounded-full p-4 border border-gray-600 bg-slate-300/10">
          <RxTwitterLogo className="text-2xl text-gray-200" />
        </div>
        <div className="rounded-full p-4 border border-gray-600 bg-slate-300/10">
          <FaInstagram className="text-2xl text-gray-200" />
        </div>
        <div className="rounded-full p-4 border border-gray-600 bg-slate-300/10">
          <FaDribbble className="text-2xl text-gray-200" />
        </div>
        <div className="rounded-full p-4 border border-gray-600 bg-slate-300/10">
          <MdOutlineEmail className="text-2xl text-gray-200" />
        </div>
      </div>

      <div className="w-full max-w-5xl h-[1px] bg-gray-800 my-10 mx-auto"></div>

      <div className="flex flex-row justify-center items-center gap-5 text-gray-400 flex-wrap">
        {items.map((item, index) => {
          return (
            <p key={index} className="p-2 capitalize">
              {item}
            </p>
          );
        })}
      </div>

      <p className="py-10 text-center w-full text-gray-500">© 2020 – 2022 1811 Labs. All rights reserved.</p>
    </div>
  );
};

export default Footer;
