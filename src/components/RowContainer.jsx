import React, { useRef } from "react";
import F1 from "../images/f1.png";
import { GrAdd } from "react-icons/gr";
import { motion } from "framer-motion";
import { useEffect } from "react";
import NotFound from '../images/NotFound.svg';

const RowContainer = ({ flag, data, scrollValue }) => {
  console.log(data);

  const rowContainer = useRef()

  useEffect(() => {
     rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue])

  return (
    <div
      ref={rowContainer}
      className={`w-full my-14 h-auto flex items-center ${
        flag ? "overflow-x-scroll scrollbar-none"  : "overflow-x-hidden flex-wrap justify-center "
      } bg-green-200 rounded-xl bg-gradient-to-b from-green-300 to-green-100 scroll-smooth `}
    >
      {data && data.length > 0 ? 
        data.map((items) => (
            <div
              key={items.id}
              className="w-[270px] h-[200px] min-w-[190px] min-h-[170px] shadow-md order-last p-5 ml-5 md:ml-7 md:mr-5 mt-14 md:mt-28 mb-10 bg-cardOverlay backdrop-blur-md rounded-2xl flex flex-col items-center justify-center hover:drop-shadow-lg relative"
              >
              <motion.div whileHover={{ scale: 1.1 }} className="w-40 h-40 mb-48 drop-shadow-2xl">
                <img
                 className="w-full h-full object-contain"
                  src={items?.imageURL}
                  alt="Icecream"
                />
              </motion.div>
              <div className="flex items-center justify-center fixed mt-20 flex-col ">
                <p className="text-base lg:text-md font-semibold text-textColor">
                  {items?.title}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                 <span className="text-lg text-green-600">$</span> {items?.price}
                </p>
                <motion.div
                 whileTap={{ scale: 0.5 }}
                  className="flex items-center justify-center p-2 mt-2 rounded-full bg-green-400 w-auto "
                >
                <GrAdd className="text-base" />
              </motion.div>
            </div>
          </div>
        )) : 
        <div className="w-full flex items-center justify-center flex-col mt-10">
          <img className=" h-40" src={NotFound} alt="Not Found"/>
          <p className="mt-5 text-xl text-headingColor"> Items Not Available</p>
        </div>}
        
    </div>
  );
};

export default RowContainer;
