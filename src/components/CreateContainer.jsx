import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
} from "react-icons/md";
import { categories } from "../utils/data";
import D1 from "../images/d1.png";
import Loader from "./Loader";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase.config";
import { getAllFoodItems, saveItems } from "../utils/firebaseFunctions";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imgAsset, setImgAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alert, setAlert] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [{foodItems}, dispatch] = useStateValue();


  const uploadImage = (e) => {
    setIsLoading(true);
    const imgFile = e.target.files[0];
    console.log(imgFile);

                        // ref function to interact with firebase storage
                                  // folder location and file name in firebase storage below -> `Images/${Date.now()} - ${imgFile.name}`
    const storageRef = ref(storage,`Images/${Date.now()} - ${imgFile.name}`)
                      //uploadBytesResumable() function to upload the files to firebase cloud.
    const uploadTask = uploadBytesResumable(storageRef, imgFile);


    // on() method attaches one or more event handlers for the selected elements and child elements.
    // As of jQuery version 1.7, the on() method is the new replacement for the bind(), live() and delegate() methods. 
    //.on() will give 3 functions -> snapshot : on every single time when image is uploaded
    //                               error: show error
    //                               Conplete: everything is fine, get image url
    uploadTask.on('state_changed', (snapshot) => {
                              // this done by firebase documentation -> https://firebase.google.com/docs/reference/node/firebase.storage.UploadTask
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    }, 
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading try Again..");
        setAlert("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 1000);
    },
     () => {
      //You can get the download URL for a file by calling the getDownloadURL() method on a Cloud Storage reference.
      getDownloadURL(uploadTask.snapshot.ref).then(downlaodURL => {
        setImgAsset(downlaodURL);
        setIsLoading(false);
        setFields(true);
        setMsg("Image uploaded successfully");
        setAlert("success");
        setTimeout(() => {
          setFields(false);
        }, 1000);
      })
     }
    )
  };

  const deleteImg = () => {
    setIsLoading(true);             // imgAsset(image url) through this we can delete image from firebase.
    const deleteRef = ref(storage, imgAsset);
    deleteObject(deleteRef).then(() => {
      setImgAsset(null);
      setIsLoading(false);
      setFields(true);  
      setMsg("Image deleted successfully");
      setAlert("success");
      setTimeout(() => {
        setFields(false);
      }, 1000)
    })
  };

  const saveDetails = () => {
      setIsLoading(true);
      try{
        if(!title || !calories || !imgAsset || !price || !category){
          setFields(true);
          setMsg("Required fields can't be empty");
          setAlert("danger");
          setTimeout(() =>{
            setFields(false);
            setIsLoading(false);
          }, 1000);
        }else{
          const data = {
            id: `${Date.now()}`,
            title: title,
            imageURL: imgAsset,
            category: category,
            calories: calories,
            qty: 1,
            price: price
          }
          saveItems(data);
          setIsLoading(false);
          setFields(true);  
          setMsg("Data uploaded successfully");
          setAlert("success");
          clearData();
          setTimeout(() => {
            setFields(false);
          }, 1000)
        }
      }catch(error){
        console.log(error);
        setFields(true);
        setMsg("Error while loading: Try Again...");
        setAlert("danger");
        setTimeout(() =>{
          setFields(false);
          setIsLoading(false);
        }, 1000);
      }
  };

  const clearData = () => {
    setTitle("");
    setImgAsset(null);
    setCalories("");
    setPrice("");
    setCategory("Select Category");  

  }

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      // console.log(data);
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data 
      })
    });
  };

  return (
    <div className="w-full min-h-screen flex item-center justify-center">
      <div className="w-[90%] md:w-[75%] border p-16 rounded-xl bg-green-200 flex flex-col items-center justify-center gap-7">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alert === "danger"
                ? "bg-red-200 text-red-500"
                : " bg-emerald-200 text-emerald-500"
            }  `}
          >
            {msg}
          </motion.p>
        )}

        <div className="w-full py-2 border-b border-green-400 flex items-center gap-2 mt-10">
          <MdFastfood className="text-xl text-green-700" />
          <input
            className="w-full h-full text-sm bg-transparent outline-none border-none text-textColor"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give a title . . ."
          />
        </div>

        <div className="w-full bg-transparent">
          <select onChange={(e) => setCategory(e.target.value)} className="w-full outline-none bg-green-300 rounded-lg cursor cursor-pointer p-2 pl-4">
            <option value="other" className="bg-green-300 pr-2 hover:font-semibold">
              Select Category
            </option>
            {categories &&
              categories.map((items) => (
                <option
                  key={items.id}
                  value={items.urlParamName}
                  className="bg-green-300 text-base border-0 outline-none capitalize text-headingColor"
                >
                  {items.name}
                </option>
              ))}
          </select>
        </div>

        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-green-500 w-full h-225 md:h-420 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imgAsset ? (
                <>
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <MdCloudUpload className="text-green-400 text-3xl hover:text-green-600" />
                      <p className="text-green-500 text-sm hover:text-green-600">
                        Click here to upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      src={imgAsset}
                      alt="upload Image"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-green-300 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                      onClick={deleteImg}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-green-400 flex items-center gap-2">
            <MdFoodBank className="text-green-700 text-3xl " />
            <input
              type="text"
              required
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="Calories"
              className="w-full h-full text-sm bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>

          <div className="w-full py-2 border-b border-green-400 flex items-center gap-2">
            <MdAttachMoney className="text-green-700 text-3xl " />
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full h-full text-sm bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>

          <div className="flex items-center w-full">
            <button
              type="button"
              className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-green-400 px-12 py-2 rounded-lg text-lg text-white font-semibold"
              onClick={saveDetails}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
