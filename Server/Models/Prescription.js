import mongoose from "mongoose"

const prescriptionSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    medicine: {
        type: [String],
    },
    comments: {
        type: String,
        default: null
    }
})

export default mongoose.model("Prescription", prescriptionSchema)