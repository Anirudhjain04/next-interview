import { testGemini } from "../services/geminiService.js";

export const testAI = async (req, res) => {
  try {
    const result = await testGemini();

    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};