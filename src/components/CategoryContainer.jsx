import React, { useEffect } from "react";
import { IoFastFood } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";
import { categories } from "../utils/data";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";


const CategoryContainer = () => {
  const [filter, setFilter] = useState("chicken");

  const [{foodItems}, dispatch] = useStateValue();

  return (
    <section className="w-full bg-green-100 my-16" id="category">
      <div className="w-full flex flex-col items-center justify-center">
        <p
          className="text-xl font-semibold relative capitalize text-headingColor before:absolute before:rounded-lg before:content-
                    none before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-green-400 to-green-600 transition-all ease-in-out duration-100 mr-auto"
        >
          Our Hot Dishes
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-10 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{scale: 0.50}}
                key={category.id}
                className={`group w-24 min-w-[94px] h-32 gap-3 ${filter === category.urlParamName ? "bg-green-500" : "bg-green-200"} duration-100 transition-all ease-in-out cursor-pointer drop-shadow-xl 
                rounded-xl flex items-center justify-center flex-col hover:bg-green-500`}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div className={`w-14 h-14 flex items-center ${filter === category.urlParamName ? "bg-green-200" : "bg-green-400"} group-hover:bg-green-200 justify-center rounded-full mt-4`}>
                  <IoFastFood className="text-[20px]" />
                </div>

                <p className={`text-base text-bold lg:text-md ${filter === category.urlParamName ? "text-green-200" : "text-green-600"} group-hover:text-green-200 mb-4`}>
                  {category?.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
            <RowContainer flag={false} data={foodItems?.filter(n => n.category == filter)}/>
        </div>

      </div>
    </section>
  );
};

export default CategoryContainer;
