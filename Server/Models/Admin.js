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
  verified:{
    type:Boolean,
    required:"true"
  },

  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Admin",UserSchema)