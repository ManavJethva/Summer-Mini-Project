import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "true"
  },
  userId: {
    type: String,
    unique: true,
    required: "true"
  },
  password: {
    type: String,
    required: "true"
  },
 userType: {
    type: String,
    required: "true",
  },
  email: {
    type: String,
    required: "true",
  },
  verified:{
    type:Boolean,
    required:"true"
  },
  date: {
    type: Date,
    default: Date.now
  },
  bloodGroup: {
    type: String,
  },
  gender: {
    type: String,
    required: true
  },
  allergies: {
    type: [String],
    default: null
  },
  appointmentHistory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appointment",
    default: null
  },
  prescriptionHistory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prescription",
    default: null
  }
});

export default mongoose.model("Student",UserSchema)