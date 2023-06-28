import  express  from "express";
import { register,login,adminRegister,verifyMail } from "../Controllers/auth.js";
const router=express.Router();

router.post("/register",register);
router.post("/login",login);
router.post("/admin/register",adminRegister);
router.get("/verify",verifyMail)
// router.post("/login/admin",adminLogin)
export default router;