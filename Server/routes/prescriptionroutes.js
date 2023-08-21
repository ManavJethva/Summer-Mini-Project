import express from "express"
import { currentPrescription, allPrescriptions, newPrescription, updatePrescription, delPrescription } from "../Controllers/prescription.js"
import { authMiddleware } from "../middleware/authmiddleware.js"
const router = express.Router()

router.get("/current/:id", currentPrescription)
router.get("/all/:id", allPrescriptions)
router.post("/new", authMiddleware, newPrescription)
router.put("/update/:id", authMiddleware, updatePrescription)
router.delete("/delete/:id", authMiddleware, delPrescription)

export default router
