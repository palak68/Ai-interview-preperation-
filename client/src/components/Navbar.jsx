import React from "react";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { BsRobot, BsCoin } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../App";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";
import AuthModel from "./AuthModel";



function Navbar() {
  const { userData } = useSelector((state) => state.user);

  console.log(userData);
  const[showCreditPopup, setShowCreditsPopup] = useState(false);
  const[showUserPopup, setShowUserPopup] = useState(false);
  const[showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

const handleLogout = async () => {
try{
await axios.get(serverUrl+"/api/auth/logout",{withCredentials:true});
dispatch(setUserData(null));
setShowUserPopup(false);
setShowCreditsPopup(false);
navigate('/');
}catch(error){

}
}

  return (
    <div className="bg-[#f3f3f3] flex justify-center px-4 pt-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.05, delay: 0.2, ease: "easeInOut" }}
        className="w-full max-w-6xl bg-white p-4 rounded-[24px] shadow-sm border border-gray-200 flex items-center justify-between"
      >
       
        <div className="flex items-center cursor-pointer gap-3">
          <div className="bg-black text-white p-2 rounded-lg">
            <BsRobot size={18} />
          </div>

          <h1 className="font-semibold hidden md:block text-lg">
            AI Interview Preperation
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <button onClick={()=>{
              if(!userData){
                setShowAuth(true);
                return;
              }
              setShowCreditsPopup(!showCreditPopup); setShowUserPopup(false)}}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full
              text-md hover:bg-gray-200 transition"
            >
              <BsCoin size={20} />
              {userData?.user?.credits ?? 0}
            </button>
            {showCreditPopup && (
              <div className="absolute right-[-50px]  mt-3 w-64 bg-white shadow-xl
               border border-gray-200 rounded p-5 z-50">
              <p className="text-sm text-gray-600 mb-4">Need more credits to continue interview?</p>
              <button 
                onClick={() => navigate("/pricing")}
                className="w-full bg-black text-white py-2 rounded-lg text-sm"
              >
                Buy more credits
              </button>
            </div>)}
          </div>

          <div className="relative">
            <button onClick={()=>{
              if(!userData){
                setShowAuth(true);
                return;
              }
              setShowUserPopup(!showUserPopup); setShowCreditsPopup(false)}}
  className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center
   font-semibold"
>
  {userData?.user?.name
    ? userData.user.name.slice(0, 1).toUpperCase()
    : <FaUserAstronaut size={16} />}
</button>
{showUserPopup && (<div className="absolute right-0 mt-3 w-48 bg-white 
shadow-xl border border-gray-200 rounded p-4 z-50">
<p className="text-md  text-blue-500 font-medium mb-1">{userData?.user?.name}</p>

<button onClick={() => navigate("/history")} className="w-full text-bold
text-left text-sm py-2 hover:bg-gray-200">
  Interview History</button>
<button onClick={handleLogout} className="w-full text-left
 text-sm py-2 text-red-500  flex items-center gap-2">
  <HiOutlineLogout size={16} />
 Logout</button>

</div>)}
          </div>
        </div>
      </motion.div>
      {showAuth && <AuthModel onClose={()=>setShowAuth(false)}/>}

    </div>
  );
}

export default Navbar;