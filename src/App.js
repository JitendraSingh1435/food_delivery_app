import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header, MainContainer, CreateContainer } from "./components";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence >
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
