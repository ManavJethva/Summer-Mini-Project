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
    default: null
  },
  gender: {
    type: String,
    default: null
    // required: true
  },
  allergies: {
    type: String,
    default: null
  },
 
  dateOfBirth: {
    type: Date,
    default: null
  },
  contactNumber: {
    type: String,
    default: null
  },
  occupation: {
    type: String,
    default: null
  },
  department: {
    type: String,
    default: null
  },
  status: {
    type: String,
    default: null
  },
  permanentAddress: {
    type: String,
    default: null
  },
  roomNumber: {
    type: String,
    default: null
  },
  hostel: {
    type: String,
    default: null
  },
  appointmentHistory: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Appointment",
    default: []
  },
  prescriptionHistory: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Prescription",
    default: []
  },
});

export default mongoose.model("Student",UserSchema)