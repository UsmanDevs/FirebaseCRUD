import { useContext} from "react";
import { createContext } from "react";
import PropTypes from "prop-types"; 
import {initializeApp} from 'firebase/app'
import {getFirestore , collection , addDoc , getDocs} from 'firebase/firestore'
import { getStorage , ref , uploadBytes , getDownloadURL} from 'firebase/storage'

const FirebaseContext =  createContext(null)
export const useFirebase = ()=> useContext(FirebaseContext)



const firebaseConfig = {
    apiKey: "AIzaSyARqXyb3OccdHsVg-hdf6I1-fM9n1QliqE",
    authDomain: "practice-cf9f1.firebaseapp.com",
    projectId: "practice-cf9f1",
    storageBucket: "practice-cf9f1.appspot.com",
    messagingSenderId: "1015561007966",
    appId: "1:1015561007966:web:700ec0a3471485e71015cf"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const firebaseStore = getFirestore(firebaseApp)
  const Storage = getStorage(firebaseApp)


export const FirebaseProvider = (props) =>{
                    
    const handleCreateNewListing = async(name , isbn , price , cover)=>{
        const imageRef =  ref(Storage , `uploads/images/${Date.now()}-${cover.name}`)
        const uploadResult = await uploadBytes(imageRef , cover)
        console.log(uploadResult)
        const databaseResults =  await addDoc(collection(firebaseStore , 'books'), {
            name,
            isbn,
            price,
            imageURL: uploadResult.ref.fullPath  
        })
        console.log(databaseResults)
    }
    const getList = ()=>{
        return getDocs(collection(firebaseStore, 'books'))
    }

    const getImageURL = (path)=>{
        return getDownloadURL(ref(Storage, path))
    }

    return (
        <FirebaseContext.Provider value={{handleCreateNewListing , getList , getImageURL}}>{props.children}</FirebaseContext.Provider>
    )
}
FirebaseProvider.propTypes = {
    children: PropTypes.node.isRequired
};