import React from 'react'
import Delivery from "../images/delivery.png";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="py-3 flex-1 flex flex-col items-start justify-start gap-6">
        <div className="flex items-center gap-2 justify-center bg-green-300 px-2 py-1 rounded-full">
          <p className="text-base text-green-700 font-semibold my-1 mx-1">
            Bike Delivery 
          </p>
          <div className="w-7 h-7 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img 
              className="w-full h-full object-contain" 
              src={Delivery} 
              alt="bike"/>
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[5rem] font-bold tracking-wide text-headingColor">
           The Fastest Delivery in <span className="text-green-500 text-[2.5rem]  lg:text-[4.5rem]"> Your City. </span>
        </p>

        <p className="text-base text-textColor  md:text-left text-center md:w-[80%]">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque animi esse pariatur laboriosam minima cumque, illum fugiat! Rem sint cumque architecto, velit delectus sunt ipsum culpa voluptate reprehenderit. Fuga, quia?
        </p>

        <button
          type = "button"
          className=" bg-gradient-to-br from-green-400 to-green-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          <span className="md:text-lg font-semibold"> Order Now </span>
          
        </button>

      </div>

      <div className="py-2 bg-green-300 flex-1"></div>
    </div>
  )
}

export default Home