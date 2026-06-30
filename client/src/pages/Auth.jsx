import React from "react";
import { FaRobot } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { motion } from "motion/react";
import {FcGoogle} from "react-icons/fc";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import { serverUrl } from "../App";
const Auth = () => {
  
  const handleGoogleAuth = async ()=>{
   
    try{
const response = await signInWithPopup(auth, provider);
let user = response.user;
let name = user.displayName;
let email = user.email;
const result = await axios.post(serverUrl+"/api/auth/google",
  {name,email},{withCredentials:true});
  console.log(result.data);
    } catch(error){
console.log(error)
    }
  }
  
  
  
  return (
    <div className="w-full min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20">
      <motion.div 
      initial={{opacity: 0, y: -40}} 
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1.05 , delay: 0.2, ease: "easeInOut"}} 
      className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 flex flex-col items-center gap-6">

        <div className="flex items-center justify-center mb-1 gap-2">
          <div className="bg-black text-white p-2 rounded-lg">
            <FaRobot size={18} />
          </div>

          <h2 className="font-semibold text-lg">
            AI Interview Preparation
          </h2>
        </div>

        <h1 className="text-2xl font-semibold text-center  leading-snug mb-6">
          Continue With
          <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full inline-flex items-center gap-1 ml-2">
            <IoSparkles size={16} />
            AI Smart Interview Preparation
          </span>
        </h1>
        <p className="text-gray text-center text-sm md:text-base leading-relaxed mb-3">
          Sign in to start Ai-powered mock interview,
           track your progress, and unlock detailed performance insights. 
        </p>
        <motion.button
       onClick={handleGoogleAuth}
       whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className=" w-full bg-black text-white  py-3 rounded-full font-semibold hover:bg-gray-800 
        transition-colors duration-300 shadow-md gap-2 flex items-center justify-center"
        >
          <FcGoogle size={22} />
          Continue with Google
        </motion.button>

      </motion.div>
    </div>
  );
};

export default Auth;