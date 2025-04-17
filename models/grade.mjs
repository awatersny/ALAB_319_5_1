import mongoose from "mongoose"

const gradeSchema = new mongoose.Schema({
  scores: {
    type: [Number],
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