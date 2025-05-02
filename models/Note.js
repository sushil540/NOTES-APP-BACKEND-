import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title:{
    type: String,
    required:true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true, // e.g., "2025-04-29"
  },
  isDelete:{
    type: Boolean,
    default: false
  }
});

export default mongoose.model("Note", noteSchema);
