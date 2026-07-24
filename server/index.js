import express from "express";  
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"
dotenv.config();
const app = express();
 const PORT = process.env.PORT || 8000;
   
app.use(express.json());
app.use(cors(
  {
    origin: "http://localhost:5173",
    credentials: true,
  }
));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/interview" , interviewRouter)
app.use("/api/payment" , paymentRouter)
   app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
     connectDb();
   });
