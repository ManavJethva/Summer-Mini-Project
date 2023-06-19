import  express  from "express";
import { register,login } from "../Controllers/auth.js";
const router=express.Router();

router.post("/register",register);
router.post("/login",login);
// router.post("/register/admin",adminRegister);
// router.post("/login/admin",adminLogin)
export default router;