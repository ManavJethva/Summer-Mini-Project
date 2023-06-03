import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";


const app=express();
dotenv.config();
app.use(express.urlencoded({ extended: true}));
const connect=async()=>{
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDb");
      } catch (error) {
        throw error;
      }
    };

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected");
});

app.use(cors(),( err,req,res,next)=>{
 
    const errorStatus=err.status||500
    const errorMessage=err.message||("Something Went Wrong")
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      Message: errorMessage,
      stack: err.stack
    })
  })

  app.use(express.json())

  app.listen(3001,(req,res)=>{
    connect()
    console.log("Server started on port 3001!")
});
