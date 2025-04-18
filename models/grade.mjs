import mongoose from "mongoose"

const gradeSchema = new mongoose.Schema({
  scores: {
    type: [Object],
    required: true
  },
  class_id: {
    type: Number,
    required: true
  },
  learner_id: {
    type: Number,
    required: true
  }
})

export default mongoose.model("Grade", gradeSchema)