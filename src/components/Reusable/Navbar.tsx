import { FaArrowRight } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="w-full relative z-50">
      <div className="w-full max-w-7xl m-auto flex flex-row justify-between items-center p-5 gap-2">
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="logo relative w-5 h-5">
            <Image
              src="/svgs/logo.svg"
              fill={true}
              className="object-cover"
              alt="Picture of the author"
            />
          </div>
          <div className="text-2xl">GenAI</div>
        </div>
        <input className="peer hidden" type="checkbox" name="menu" id="menu" />

        <div className="capitalize hidden opacity-0 peer-checked:flex peer-checked:opacity-100 lg:flex lg:opacity-100 flex-col lg:flex-row  justify-center items-center gap-5 absolute max-md:top-20 lg:top-0 lg:relative max-md:w-full max-md:left-0 max-md:bg-[#090725] max-md:p-10">
          <div className=" cursor-pointer p-3">Product</div>
          <div className=" cursor-pointer p-3">about us</div>
          <div className=" cursor-pointer p-3">pricing</div>
          <div className="uppercase cursor-pointer p-3">faq</div>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          <div className="btnIndigo capitalize flex flex-row justify-center items-center gap-2 px-5 py-4 max-md:py-2 ">
            <p className="text-xs lg:text-sm">get started</p>
            <FaArrowRight />
          </div>
          <label className="text-xl block lg:hidden" htmlFor="menu">
            <GiHamburgerMenu />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
