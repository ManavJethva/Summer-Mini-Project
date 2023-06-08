import  Express  from "express";
const router=Express.router();

router.post("/register",register);
router.post("/login",login);
export default router;