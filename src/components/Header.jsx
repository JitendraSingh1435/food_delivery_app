import React from "react";

const Header = () => {
  return (
    <div className="fixed z-50 w-screen bg-blue-400 p-3 px-10">
      Food Delivery App
      {/* Desktop & Tablets */}
      <div className="hidden md:flex w-full h-full bg-red-700 p-4"> </div>


      {/* mobiles */}
      <div className="flex md:hidden w-full h-full bg-cyan-600 p-4"></div>

    </div>
  );
};

export default Header;
