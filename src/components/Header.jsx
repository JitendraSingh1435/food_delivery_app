import React from "react";
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";
import { MdAdd, MdLogout} from "react-icons/md";

import logo from "../images/logo.png";
import cart from "../images/cart.png";
import profile from "../images/profilegreen.png";

// Imports for google authentication-----------
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase.config"
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { useState } from "react";

const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();


  const [{user}, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () =>{
    if(!user){
      const {user : {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
      // console.log(response);
      dispatch({
       type: actionType.SET_USER,
        user : providerData[0]   
      })

      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }else{
      setIsMenu(!isMenu);
    }

  }

  return (
    <header className="fixed z-50 w-screen bg-green-100 p-1 px-5">
      {/* Desktop & Tablets */}
      <div className="hidden md:flex w-full h-full p-1 items-center justify-between">
        <Link to={'/'} className="flex items-center gap-1">
          <div>
            <img src={logo} className="w-20 object-cover" alt="logo" />
          </div>
          <div className=" flex items-center justify-center">
            <p className="text-lime-600 text-3xl font-bold"> eat</p>
            <p className="text-headingColor text-4xl font-bold">.it </p>
            {/* <p className="text-headingColor text-3xl font-bold"> t </p> */}
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-lime-700 duration-100 transition-all ease-in-out cursor-pointer font-semibold">Home</li>
            <li className="text-base text-textColor hover:text-lime-700 duration-100 transition-all ease-in-out cursor-pointer font-semibold">Menu</li>
            <li className="text-base text-textColor hover:text-lime-700 duration-100 transition-all ease-in-out cursor-pointer font-semibold">About Us</li>
            <li className="text-base text-textColor hover:text-lime-700 duration-100 transition-all ease-in-out cursor-pointer font-semibold">Services</li>
            <li className="text-base text-textColor hover:text-lime-700 duration-100 transition-all ease-in-out cursor-pointer font-semibold">Orders</li>
          </ul>

          <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.6}}
            className="relative flex items-center justify-center cursor-pointer"
          >
            <img src={cart} alt="cartIcon" className="w-6 object-cover"/>
            <div className="w-4 h-4  rounded-full bg-lime-600 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-xs text-white">2</p>
            </div>
          </motion.div>

          <div className="relative">
            <motion.img
              whileHover={{scale: 1.2}}
              whileTap={{scale: 0.6}}
              src={user ? user.photoURL : profile} 
              alt="profile" 
              className="flex items-center justify-center w-12 h-12 border-r-zinc-900 border-solid border-10 cursor-pointer rounded-full"
              onClick={login}
            />

            {
              isMenu && (
                
            <motion.div
              initial={{opacity: 0, scale: 0.6}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0.6}}
              className="w-40 bg-green-400 shadow-xl rounded-lg flex flex-col absolute right-0 top-16"
            >
            {
              user && user.email === "jitendrasingh14355@gmail.com" && (
                <Link to={"/"}>
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover: bg-green-200 transition-all duration-100 ease-in-out text-textColor text-textbase text-base"> New Item <MdAdd/> </p>
                </Link>
              )
            }
            <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover: bg-green-200 transition-all duration-100 ease-in-out text-textColor text-textbase text-base"> Logout <MdLogout/> </p>
          </motion.div>
              )
            }

          </div>

        </div>
        
      </div>





      {/* mobiles */}
      <div className="flex md:hidden w-full h-full p-4"></div>
    </header>
  );
};

export default Header;
