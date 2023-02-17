import React from "react";
import Logo from "../assets/kodevslogo";
import { AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="mt-16 flex h-24 justify-between items-center max-w-[1280px] mx-auto  text-[#C3FF00] px-10">
      <Logo />
      <a className="hidden md:flex text-2xl" href="">
        {" <contact/> "}
      </a>
      <div className="items-center block md:hidden">
        <a href="">
          <AiOutlineMail size={40} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
