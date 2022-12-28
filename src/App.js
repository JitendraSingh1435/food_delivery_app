import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header, MainContainer, CreateContainer } from "./components";
import { AnimatePresence } from "framer-motion";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";

const App = () => {
  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      // console.log(data);
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data 
      })
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-green-100">
        <Header />

        <main className="mt-16 md:mt-36 px-4 md:px-12 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
