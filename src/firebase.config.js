
import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBjUly9sQkcp3Fmvcc10t3MWzTKNYLTbsI",
    authDomain: "fooddeliveryapp-90f24.firebaseapp.com",  
    databaseURL: "https://fooddeliveryapp-90f24-default-rtdb.firebaseio.com",
    projectId: "fooddeliveryapp-90f24",
    storageBucket: "fooddeliveryapp-90f24.appspot.com",
    messagingSenderId: "1075137215904",
    appId: "1:1075137215904:web:c983ee3d4c7f9a9b3a78c5"
  };

  const app = getApps.length > 0 ? getApps() : initializeApp(firebaseConfig);

  const firebase = getFirestore(app);
  const storage = getStorage(app);

  export {app, firebase, storage};


  