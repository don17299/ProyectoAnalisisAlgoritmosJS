// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs,} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOz-DpUY-71wWrmE1shhNOXNpKmosEl2U",
  authDomain: "testpensamientocomputacional.firebaseapp.com",
  projectId: "testpensamientocomputacional",
  storageBucket: "testpensamientocomputacional.appspot.com",
  messagingSenderId: "226333567569",
  appId: "1:226333567569:web:0d387a52653a133536a670"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const db = getFirestore()

 export const saveUser= (userid,correct_tests,p_survey1,p_survey2,p_survey3)=>{
   addDoc(collection(db,"Users"),{userid,correct_tests,p_survey1,p_survey2,p_survey3}) 
 }

 export const getUsers=()=>getDocs(collection(db, "Users"));
 