import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    techStack: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
    questions: [
      {
        question: String,
        answer: String,
        feedback: String,
        score: Number,
      },
    ],

    overallScore: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Interview = mongoose.model("Interview", interviewSchema);

export default Interview;
