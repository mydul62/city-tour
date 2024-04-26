// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3ELFWHek7idSoSBm4R9vXumAkgcmjnM4",
  authDomain: "tourist-auth.firebaseapp.com",
  projectId: "tourist-auth",
  storageBucket: "tourist-auth.appspot.com",
  messagingSenderId: "340360618934",
  appId: "1:340360618934:web:444d511fdb0804e8951717"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
