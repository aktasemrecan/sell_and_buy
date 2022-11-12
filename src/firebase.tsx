// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  
import { getStorage } from "firebase/storage";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5BYupvMs66t5XKC20IWmNYmfGLgu-6Nc",
  authDomain: "sell-and-buy-e6833.firebaseapp.com",
  projectId: "sell-and-buy-e6833",
  storageBucket: "sell-and-buy-e6833.appspot.com",
  messagingSenderId: "403413435709",
  appId: "1:403413435709:web:fedf6a48f5e76584f83154"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);