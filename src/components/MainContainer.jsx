import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";

const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const [scrollValue, setScrollValue] = useState();

  useEffect(() => {}, [scrollValue])

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />

      <section className="w-full bg-green-100 mt-16">
        <div className="w-full flex items-center justify-between">
          <p
            className="text-xl font-semibold relative capitalize text-headingColor before:absolute before:rounded-lg before:content-
          none before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-green-400 to-green-600 transition-all ease-in-out duration-100"
          >
            Our Fresh & Healthy Fruits
          </p>

          <div className="hidden md:flex items-center gap-3 ">
            <motion.div
              whileTap={{ scale: 0.25 }}
              className="w-8 h-8 rounded-lg bg-green-300 hover:bg-green-500 cursor-pointer transitransition-all duration-100 ease-in-out
              hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-350)}
            >
              <MdChevronLeft className="text-base" />
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.25 }}
              className="w-8 h-8 rounded-lg bg-green-300 hover:bg-green-500 cursor-pointer transitransition-all duration-100 ease-in-out
              hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(350)}

            >
              <MdChevronRight className="text-base" />
            </motion.div>
          </div>
        </div>

        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>
    </div>
  );
};

export default MainContainer;
