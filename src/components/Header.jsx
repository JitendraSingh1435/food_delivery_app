import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen bg-gray-300 p-1 px-5">
      {/* Desktop & Tablets */}
      <div className="hidden md:flex w-full h-full p-1">
        <div className="flex items-center gap-1">
          <img src={logo} className="w-20 object-cover" alt="logo" />
          <p className="text-lime-600 text-3xl font-bold"> eat</p>
          <p className="text-headingColor text-4xl font-bold"> .it </p>
          {/* <p className="text-headingColor text-3xl font-bold"> t </p> */}
        </div>

        <ul className="flex items-center gap-8 ml-auto">
          <li className="text-base text-textColor hover:text-lime-600 duration-100 transition-all ease-in-out cursor-pointer font-semibold">Home</li>
          <li className="text-base text-textColor hover:text-lime-600 duration-100 transition-all ease-in-out cursor-pointer font-semibold">Menu</li>
          <li className="text-base text-textColor hover:text-lime-600 duration-100 transition-all ease-in-out cursor-pointer font-semibold">About Us</li>
          <li className="text-base text-textColor hover:text-lime-600 duration-100 transition-all ease-in-out cursor-pointer font-semibold">Services</li>
          <li className="text-base text-textColor hover:text-lime-600 duration-100 transition-all ease-in-out cursor-pointer font-semibold">Orders</li>
        </ul>
      </div>

      {/* mobiles */}
      <div className="flex md:hidden w-full h-full p-4"></div>
    </header>
  );
};

export default Header;
