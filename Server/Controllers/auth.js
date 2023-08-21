import Student from "../Models/Student.js";
import Admin from "../Models/Admin.js";
import createError from "../utils/error.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendVerifyMail } from "../utils/mail.js";

export const register= async(req,res,next)=>{
    try {
        const salt = await bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(req.body.password,salt);
        const userId=req.body.userId
        const oldUser=await Student.findOne({userId})
        if(oldUser){
          return res.status(409).send({error: "User Exists"})
        }

        const newUser= new Student({
            name:req.body.name,
            userId:req.body.userId,
            password:hashPassword,
            userType:req.body.userType,
            email: req.body.userId+"@iiitm.ac.in",
            gender: req.body.gender,
            bloodGroup: req.body.bloodGroup,
            verified:false
        })
       
       const userData= await newUser.save()
        if(userData){
        sendVerifyMail(userData.email,userData.name,userData._id)
        res.status(200).json({verified:true})
        }
    } catch (err) {
        next(err)
        
    }
}

export const login = async (req, res, next) => {
    try {
      const JWT_SECRET = "asdkahsgdnas/'wer.3'r[3''/df,lfu0weokr,'we4,r[ppfe'w;e,fjowjef";
  
      const student = await Student.findOne({ userId: req.body.userId });
      const admin = await Admin.findOne({ userId: req.body.userId });
  
      let user;
  
      if (student) {
        user = student;
      } else if (admin) {
        user = admin;
      } else {
        return  res.status(404).json({error: "User not found"})
      }
  
      const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
      if (!isPasswordCorrect) {
        return  res.status(400).json({error: "wrong password"})
      }
  
      const token = jwt.sign(
        { userId: user.userId, userType: user.userType, user: user._id },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
            
      res.status(200).json({ status: "ok", token ,userID:user._id,userType:user.userType,verified:user.verified});
    } catch (err) {
      next(err);
    }
  };
  

export const adminRegister= async(req,res,next)=>{
    try {
        const salt = await bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(req.body.password,salt);
        const userId=req.body.userId
        const oldUser=await Admin.findOne({userId})
        if(oldUser){
            return res.status(409).json({error: "User Exists"})
          }

        const newUser= new Admin({
            name:req.body.name,
            userId:req.body.userId,
            password:hashPassword,
            userType:req.body.userType,
            verified:false
            
        })
       
        const userData= await newUser.save()
        if(userData){
        sendVerifyMail(userData.userId,userData.name,userData._id)
        res.status(200).json({verified:true})
        }

        
    } catch (err) {
        next(err)
        
        
    }
};

export const verifyMail=async(req,res,next)=>{
    try{
      const updateInfoStudent= await Student.updateOne({_id:req.query.id},{$set:{verified:true}})
      console.log(updateInfoStudent);
      const updateInfoAdmin= await Admin.updateOne({_id:req.query.id},{$set:{verified:true}})
      if (updateInfoStudent.modifiedCount === 1 || updateInfoAdmin.modifiedCount === 1) {
        res.send(`
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                text-align: center;
              }
              .success-message {
                margin-top: 100px;
                font-size: 24px;
                color: green;
              }
            </style>
          </head>
          <body>
            <div class="success-message">Verified Successfully Revert back to website</div>
          </body>
        </html>
      `);
      } else {
        res.status(400).json({ error: "Invalid verification" });
      }
    }
  catch(err){
    next(err);
  }

}