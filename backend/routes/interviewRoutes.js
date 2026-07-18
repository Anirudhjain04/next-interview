import express from "express"
import { protect } from "../middleware/authMiddleware.js"
import { createInterview,getInterviews, getInterviewById, updateInterview, deleteInterview } from "../controllers/interviewController.js"

const router = express.Router();

router.post("/", protect, createInterview);
router.get("/", protect, getInterviews);
router.get("/:id", protect, getInterviewById)
router.put("/:id", protect, updateInterview)
router.delete("/:id", protect, deleteInterview)

export default router;