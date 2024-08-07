// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Para utilizar db(firestore) especifico
import  { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsL_fqeqECtxQlszwKBQdQ8oFzu7q7dMQ",
  authDomain: "ecommerce-example-9dd03.firebaseapp.com",
  projectId: "ecommerce-example-9dd03",
  storageBucket: "ecommerce-example-9dd03.appspot.com",
  messagingSenderId: "617189954691",
  appId: "1:617189954691:web:facf13246b24b9c052b7b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);