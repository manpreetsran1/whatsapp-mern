// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvzjDLGVe9DN8rBC8M7mh3VPKV8F44UsI",
  authDomain: "whatsapp-clone-89841.firebaseapp.com",
  projectId: "whatsapp-clone-89841",
  storageBucket: "whatsapp-clone-89841.appspot.com",
  messagingSenderId: "1075833862214",
  appId: "1:1075833862214:web:ea09c1e572989c69063247",
  measurementId: "G-PWBFC1NL22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);