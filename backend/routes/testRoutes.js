import express from "express";
import { testAI } from "../controllers/testController.js";

const router = express.Router();

router.get("/", testAI);

export default router;