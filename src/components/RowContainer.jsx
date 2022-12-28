import React, { useRef } from "react";
import F1 from "../images/f1.png";
import { GrAdd } from "react-icons/gr";
import { motion } from "framer-motion";
import { useEffect } from "react";

const RowContainer = ({ flag, data, scrollValue }) => {
  console.log(data);

  const rowContainer = useRef()

  useEffect(() => {
     rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue])

  return (
    <div
      ref={rowContainer}
      className={`w-full my-8 h-72 flex items-center ${
        flag ? "overflow-x-scroll scrollbar-none"  : "overflow-x-hidden flex-wrap"
      } bg-green-200 rounded-xl bg-gradient-to-b from-green-100 to-green-300 scroll-smooth `}
    >
      {data &&
        data.map((items) => (
            <div
              key={items.id}
              className="w-20 lg:w-190 min-w-[190px] h-40 lg:h-40 shadow-md order-last p-5 ml-5 md:ml-7 md:mr-5 mt-14 md:mt-20 bg-cardOverlay backdrop-blur-md rounded-2xl flex flex-col items-center justify-center drop-shadow-lg"
              >
              <div className="flex items-center justify-center fixed mb-24">
                <motion.img
                 whileHover={{ scale: 1.1 }}
                 className="w-28 lg:w-40 top-0 -mt-20 lg:-mt-24"
                  src={items?.imageURL}
                  alt="Icecream"
                />
              </div>
              <div className="flex items-center justify-center flex-col fixed mt-12">
                <p className="text-base lg:text-md font-semibold text-textColor -mt-3">
                  {items?.title}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                 <span className="text-lg text-green-600">$</span> {items?.price}
                </p>
                <motion.div
                 whileTap={{ scale: 0.5 }}
                  className="flex items-center justify-center mt-2 -mb-1 p-2 rounded-full bg-green-400 w-auto "
                >
                <GrAdd className="text-base" />
              </motion.div>
            </div>
          </div>
        ))}
        
    </div>
  );
};

export default RowContainer;
