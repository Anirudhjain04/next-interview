import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateInterview } from "../../services/interviewService";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";
import toast from "react-hot-toast";

const GenerateInterview = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: "",
    experience: "",
    techStack: "",
    difficulty: "Medium",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await generateInterview({
        ...formData,
        experience: Number(formData.experience),
      });

      navigate(`/interview/${data.interview._id}`);
      
    } catch (error) {
      console.log(error);
      alert("Failed to generate interview.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Generate AI Interview
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Fill in the details to generate personalized interview questions.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>

            <Input
              id="role"
              name="role"
              label="Role"
              placeholder="Frontend Developer"
              value={formData.role}
              onChange={handleChange}
            />
          </div>

          <div>

            <Input
              id="experience"
              name="experience"
              type="number"
              label="Experience (Years)"
              placeholder="2"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          <div>

            <Input
              id="techStack"
              name="techStack"
              label="Tech Stack"
              placeholder="React, Node.js, MongoDB"
              value={formData.techStack}
              onChange={handleChange}
            />
          </div>

          <div>

            <Select
              id="difficulty"
              name="difficulty"
              label="Difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              options={[
                { label: "Easy", value: "Easy" },
                { label: "Medium", value: "Medium" },
                { label: "Hard", value: "Hard" },
              ]}
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full py-3"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Interview"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default GenerateInterview;
