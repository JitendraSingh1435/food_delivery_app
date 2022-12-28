import { collection, doc, Firestore, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { firebase } from "../firebase.config"

// function to save the details of new items..
export const saveItems =  async (data) => {
        // setDoc() will create / update the value
    await setDoc(
        // doc() to cerate a new document                   // merge is used for later update like adding new field in it....
        doc(firebase, 'foodItems', `${Date.now()}`), data, {merge: true}
    );
}


//getall food items
export const getAllFoodItems = async (data) => {
                        // getDocs() hepls to get all the details from the firebase database.
    const items = await getDocs(
        query(collection(firebase, "foodItems"), orderBy("id", "desc"))
    );

    return items.docs.map((doc) => doc.data());
}