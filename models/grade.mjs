import mongoose from "mongoose"

const gradeSchema = new mongoose.Schema({
  scores: {
    type: [Object],
    required: true
  },
  classId: {
    type: Number,
    required: true
  },
  learnerId: {
    type: Number,
    required: true
  }
})

export default mongoose.model("Grade", gradeSchema)