import mongoose from "mongoose"

const prescriptionSchema = new mongoose.Schema({
    patient: {
        type: String,
        ref: "Student",
        required: true
    },
    Date: {
        type: Date,
        required: true
    },
    medicine: {
        type: [String],
    },
    Disease: {
        type: String,
        default: null
    }
})

export default mongoose.model("Prescription", prescriptionSchema)