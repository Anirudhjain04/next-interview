import axios from "axios";

export const testGemini = async () => {
  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "openrouter/free",
      messages: [
        {
          role: "user",
          content: "Say Hello from Gemini in one sentence.",
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content;
};

export const generateQuestions = async (role, experience, techStack, difficulty) => {
  const prompt = `
    Generate 10 Interview Questions:

    Role: ${role}
    Experience: ${experience}
    Tech Stack: ${techStack}
    Difficulty: ${difficulty}

    Return ONLY a JSON array like this:

[
  {
    "question": "Explain React Hooks."
  }
]
  `;

  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "openrouter/free",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.choices[0].message.content;
}