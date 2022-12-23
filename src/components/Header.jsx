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

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null
    })

  }

  return (
    <header className="fixed z-50 w-screen bg-green-100 p-0 px-2 md:p-6 md:px-12">
      {/* Desktop & Tablets */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={'/'} className="flex items-center gap-1">
          <div className="flex gap-0">
          <div>
            <img src={logo} className="w-16 p-1 object-cover" alt="logo" />
          </div>
          <div className=" flex items-center justify-center mt-3">
            <p className="text-lime-600 text-3xl font-bold"> eat</p>
            <p className="text-headingColor text-4xl font-bold">.it </p>
            {/* <p className="text-headingColor text-3xl font-bold"> t </p> */}
          </div>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial = {{opacity: 0, x: 200}}
            animate = {{ opacity: 1, x: 0 }}
            exit = {{ opacity: 0, x: 200}}
            className="flex items-center gap-8"
          >
            <li className="text-base text-textColor hover:text-lime-700 duration-100 transition-all ease-in-out cursor-pointer font-semibold">Home</li>
            <li className="text-base text-textColor hover:text-lime-700 duration-100 transition-all ease-in-out cursor-pointer font-semibold">Menu</li>
            <li className="text-base text-textColor hover:text-lime-700 duration-100 transition-all ease-in-out cursor-pointer font-semibold">About Us</li>
            <li className="text-base text-textColor hover:text-lime-700 duration-100 transition-all ease-in-out cursor-pointer font-semibold">Services</li>
            <li className="text-base text-textColor hover:text-lime-700 duration-100 transition-all ease-in-out cursor-pointer font-semibold">Orders</li>
          </motion.ul>

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
            <p
              className="px-4 py-2 flex items-center gap-3 cursor-pointer hover: bg-green-200 transition-all duration-100 ease-in-out text-textColor text-textbase text-base" 
              onClick = {logout}
            > 
              Logout <MdLogout/> 
            </p>
            

          </motion.div>
              )
            }

          </div>

        </div>
      </div>


      


      


      {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}


      {/* mobiles */}
      <div className="flex items-center justify-between md:hidden w-full h-full p-3 mt-2">

        <div className="relative flex items-center justify-center cursor-pointer mt-2">
            <img src={cart} alt="cartIcon" className="w-5 object-cover"/>
            <div className="w-4 h-4  rounded-full bg-lime-600 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-xs text-white">2</p>
            </div>
        </div>

        <Link to={'/'} className="flex items-center gap-1">
            <div className="flex gap-0">
              <div>
                <img src={logo} className="w-8 p-0 object-cover" alt="logo" />
              </div>
              <div className=" flex items-center justify-center mt-3">
                <p className="text-lime-600 text-2xl font-bold"> eat</p>
                <p className="text-headingColor text-2xl font-bold">.!t </p>
                {/* <p className="text-headingColor text-3xl font-bold"> t </p> */}
              </div>
            </div>
          </Link>

          <div className="relative">
            <motion.img
              whileHover={{scale: 1.2}}
              whileTap={{scale: 0.6}}
              src={user ? user.photoURL : profile} 
              alt="profile" 
              className="flex items-center justify-center w-9 h-9 mt-1 border-r-zinc-900 border-solid border-10 cursor-pointer rounded-full"
              onClick={login}
            />

            {
              isMenu && (
                
            <motion.div
              initial={{opacity: 0, scale: 0.6}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0.6}}
              className="w-40 bg-green-200 shadow-xl rounded-lg flex flex-col absolute right-0 top-16"
            >

            <ul className="flex flex-col px-4 py-2" >
              <li className="text-base text-textColor hover:font-extrabold duration-100 transition-all ease-in-out cursor-pointer font-medium py-2">Home</li>
              <li className="text-base text-textColor hover:font-extrabold duration-100 transition-all ease-in-out cursor-pointer font-medium py-2">Menu</li>
              <li className="text-base text-textColor hover:font-extrabold duration-100 transition-all ease-in-out cursor-pointer font-medium py-2">About Us</li>
              <li className="text-base text-textColor hover:font-extrabold duration-100 transition-all ease-in-out cursor-pointer font-medium py-2">Services</li>
              <li className="text-base text-textColor hover:font-extrabold duration-100 transition-all ease-in-out cursor-pointer font-medium py-2">Orders</li>
            </ul>

            <hr class="h-px border-0 dark:bg-gray-400"></hr>

            {
              user && user.email === "jitendrasingh14355@gmail.com" && (
                <Link to={"/"}>
                <p className="px-4 py-3 flex items-center gap-3 cursor-pointer hover: bg-green-200 transition-all duration-100 ease-in-out text-textColor text-textbase text-base font-semibold"> New Item <MdAdd/> </p>
                </Link>
              )
            }

              <motion.p
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.6}}
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center gap-3 bg-green-400 cursor-pointer hover:font-extrabold transition-all duration-100 ease-in-out text-textColor text-textbase text-base font-semibold" onClick = {logout}> Logout <MdLogout/> </motion.p>
              </motion.div>
              )
            }

          </div>


      </div>

      <hr class="my-1 h-px mt-0 md:mt-4 mx-2 md:mx-0 bg-green-400 border-0 dark:bg-slate-300"/>
      

    </header>
  );
};

export default Header;
