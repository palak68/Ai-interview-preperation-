// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-preperation-1fe58.firebaseapp.com",
  projectId: "ai-interview-preperation-1fe58",
  storageBucket: "ai-interview-preperation-1fe58.firebasestorage.app",
  messagingSenderId: "867380513564",
  appId: "1:867380513564:web:d846f04ef459fde5b288d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};