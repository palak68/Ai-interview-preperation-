import React from "react";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { BsRobot, BsCoin } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";

function Navbar() {
  const { userData } = useSelector((state) => state.user);

  console.log(userData);

  return (
    <div className="bg-[#f3f3f3] flex justify-center px-4 pt-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.05, delay: 0.2, ease: "easeInOut" }}
        className="w-full max-w-6xl bg-white p-4 rounded-[24px] shadow-sm border border-gray-200 flex items-center justify-between relative"
      >
        <div className="flex items-center cursor-pointer">
          <div className="bg-black text-white p-2 rounded-lg">
            <BsRobot size={18} />

            <h1 className="font-semibold hidden md:block text-lg"></h1>
          </div>

          <div className="flex items-center gap-6 relative">
            <div className="relative">
              <button
                className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-md hover:bg-gray-200 transition"
              >
                <BsCoin size={20} />
                {userData?.credits || 0}
              </button>
            </div>

            <div></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;