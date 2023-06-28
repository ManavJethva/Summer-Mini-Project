import nodemailer from "nodemailer";
import dotenv from"dotenv";
dotenv.config();
export const sendVerifyMail=async(email,name,userId)=>{
    console.log(process.env.USERNAME)
    try{
        const transporter= nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
                user:'manavj4524@gmail.com',
                pass:process.env.PASSWORD
            }
        });
        
        const mailOptions={
            from: '"Elixir" <' + process.env.USERNAME + '>',
            to:email,
            subject:'Verification Mail for Elixir',
            html:'<p>Hello '+name+' please click here to <a href="http://localhost:3001/api/auth/verify?id=' + userId + '"> Verify </a> your mail.</p>'
        }
        transporter.sendMail(mailOptions,function(err,info){
            if(err){
                console.log(err);
            }
            else{
                console.log("Email has been sent:- ",info.response);
            }
        })

    }
    catch(err){
        console.log(err.message);
    }


}