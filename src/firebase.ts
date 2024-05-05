import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc02mJ1CJ-qv_oT8EUKmOPk-i7xGFRvfc",
  authDomain: "e-commerce-c5320.firebaseapp.com",
  projectId: "e-commerce-c5320",
  storageBucket: "e-commerce-c5320.appspot.com",
  messagingSenderId: "780832215151",
  appId: "1:780832215151:web:3ab8c16d739cb20b5f7d9a",
  measurementId: "G-BWPX1Z22LN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
