import Student from "../Models/Student.js";
import createError from "../utils/error.js"
import bcrypt from "bcryptjs";

export const register= async(req,res,next)=>{
    try {
        const salt = await bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(req.body.password,salt);
        

        const newUser= new Student({
            username:req.body.username,
            rollNo:req.body.rollNo,
            password:hashPassword,
            
        })
        
        await newUser.save()

        res.status(200).json("User has been created!")
        
    } catch (err) {
        next(err)
        
    }
}

export const login= async(req,res,next)=>{
    try {
        const user=await Student.findOne({rollNo:req.body.rollNo});
        if(!user) return next(createError(404,"User not found"))
        const isPasswordCorrect= await bcrypt.compare(req.body.password,user.password);
        if (!isPasswordCorrect) return next(createError(400,"Wrong Password!"));
        res.json(user);
        
    
        
          
    } catch (err) {
        next(err)
    }
}