// frontend se data layenge 
// user create karenge 
// token create karenge 
// cookie ke andar store karenege
import genToken from "../config/token.js";
import User from "../models/user.models.js";
export const googleAuth = async(req,res)=>{

try{
const {name,email} = req.body;
let user = await User.findOne({email});
if(!user){
    user = await User.create({name,email});
}
const token = await genToken(user._id);
res.cookie("token", token, { httpOnly: true ,sameSite:'strict',secure:false, maxAge: 7 * 24 * 60 * 60 * 1000 });
res.status(200).json({ message: "Google authentication successful", user, token });
}catch(error){
    console.error("Error in Google authentication:", error);
    res.status(500).json({ message: "Internal server error" });
}
}

export const logOut = async(req,res)=>{
    try{
       await res.clearCookie("token");
        return res.status(200).json({ message: "Logout successful" });
    }catch(error){
        console.error("Error in logout:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}