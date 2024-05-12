"use client";
import { FaArrowRight } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
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
        <input
          onChange={() => {
            setShowMenu((val) => {
              return !val;
            });
          }}
          className="peer hidden"
          type="checkbox"
          name="menu"
          id="menu"
        />

        <div className="capitalize hidden opacity-0 peer-checked:flex peer-checked:opacity-100 lg:flex lg:opacity-100 flex-col lg:flex-row  justify-center items-center gap-5 absolute max-md:top-20 lg:top-0 lg:relative max-md:w-full max-md:left-0 max-md:backdrop-blur-lg max-md:bg-[#090725]/80  max-md:p-10">
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

          {!showMenu && (
            <label
              className="text-xl block lg:hidden peer-checked:hidden"
              htmlFor="menu"
            >
              <GiHamburgerMenu />
            </label>
          )}
          {showMenu && (
            <label
              className="text-xl block lg:hidden peer-checked:hidden"
              htmlFor="menu"
            >
              <RxCross2 />
            </label>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
