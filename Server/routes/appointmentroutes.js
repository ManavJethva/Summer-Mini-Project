import express from "express"
import { timeSlots, bookAppt, viewAppt, updateAppt, cancelAppt } from "../Controllers/appointment.js"

const router = express.Router()

router.post("/view-available-slots", timeSlots)
router.post("/book", bookAppt)
router.get("/view-appointments", viewAppt)
router.put("/update", updateAppt)
router.delete("/delete", cancelAppt)

export default router