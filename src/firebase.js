// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7zKHLSEiGaLAOjvOcwd_xSukzQBXywIc",
  authDomain: "therapeou-15fe6.firebaseapp.com",
  projectId: "therapeou-15fe6",
  storageBucket: "therapeou-15fe6.appspot.com",
  messagingSenderId: "375146381044",
  appId: "1:375146381044:web:dcd9921f2a3a715abee8a1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const storage = getStorage();

export const db = getFirestore();
