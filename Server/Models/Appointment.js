import mongoose from "mongoose"

const appointmentSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    complaint: {
        type: String,
        required: true
    }
})

export default mongoose.model("Appointment", appointmentSchema)