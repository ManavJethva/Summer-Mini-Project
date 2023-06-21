import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: "true"
  },
  rollNo: {
    type: String,
    required: "true",
    unique: true,
  },
  password: {
    type: String,
    required: "true"
    
  },
  role: {
    type: String,
    enum: ['admin', 'student'],
    default: 'student',
  },

  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Student",UserSchema)