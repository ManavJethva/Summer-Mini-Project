import express from "express"
import { viewProfile, updateProfile, deleteProfile } from "../Controllers/patientRecords.js"
const router = express.Router()

router.get("/profile/:id", viewProfile)
router.put("/update/:id", updateProfile)
router.delete("/delete/:id", deleteProfile)


export default router