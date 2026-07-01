import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { useEffect } from "react";
import axios from "axios";

export const serverUrl = "http://localhost:8000";

function App() {
  useEffect(() => {
const getUser = async ()=>{
  try{
const result = await axios.get(`${serverUrl}/api/users/current-user`, { withCredentials: true });
    console.log("Current User:", result.data);
  } catch(error){
console.error("Error fetching current user:", error);
  }
}  
getUser();
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;