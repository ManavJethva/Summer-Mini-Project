import express from "express"
import { viewProfile, updateProfile, deleteProfile, AdminviewProfile } from "../Controllers/patientRecords.js"
const router = express.Router()

router.get("/profile/:id", viewProfile)
router.put("/update/:id", updateProfile)
router.delete("/delete/:id", deleteProfile)
router.get("/profile/admin/:searchId",AdminviewProfile)

export default router