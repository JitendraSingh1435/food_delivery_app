import React from "react";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import profile from "../images/profilegreen.png";
const Header = () => {
  return (
    <header className="fixed z-50 w-screen bg-gray-300 p-1 px-5">
      {/* Desktop & Tablets */}
      <div className="hidden md:flex w-full h-full p-1 items-center justify-between">
        <div className="flex items-center gap-1">
          <div>
            <img src={logo} className="w-20 object-cover" alt="logo" />
          </div>
          <div className=" flex items-center justify-center">
            <p className="text-lime-600 text-3xl font-bold"> eat</p>
            <p className="text-headingColor text-4xl font-bold">.it </p>
            {/* <p className="text-headingColor text-3xl font-bold"> t </p> */}
          </div>
        </div>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-lime-700 duration-100 transition-all ease-in-out cursor-pointer font-semibold">Home</li>
            <li className="text-base text-textColor hover:text-lime-700 duration-100 transition-all ease-in-out cursor-pointer font-semibold">Menu</li>
            <li className="text-base text-textColor hover:text-lime-700 duration-100 transition-all ease-in-out cursor-pointer font-semibold">About Us</li>
            <li className="text-base text-textColor hover:text-lime-700 duration-100 transition-all ease-in-out cursor-pointer font-semibold">Services</li>
            <li className="text-base text-textColor hover:text-lime-700 duration-100 transition-all ease-in-out cursor-pointer font-semibold">Orders</li>
          </ul>

          <div className="relative flex items-center justify-center ">
            <img src={cart} alt="cartIcon" className="w-6 object-cover"/>
            <div className="w-4 h-4  rounded-full bg-lime-600 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-xs text-white">2</p>
            </div>
          </div>

          <div className="flex items-center justify-center w-12 h-12 border-lime-600 border-solid border-10">
            <img src={profile} alt="" className="rounded-full"/>
          </div>

        </div>
        
      </div>





      {/* mobiles */}
      <div className="flex md:hidden w-full h-full p-4"></div>
    </header>
  );
};

export default Header;
