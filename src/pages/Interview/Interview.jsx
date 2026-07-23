import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useInterview from "../../hooks/useInterview";
import Button from "../../components/ui/Button";
import LoadingState from "../../components/common/LoadingState";
import EmptyState from "../../components/common/EmptyState";

const Interview = () => {
  const { id } = useParams();
  console.log("Interview ID:", id);

  const { interview, loading } = useInterview(id);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  if (loading) {
  return <LoadingState message="Loading interview..." />;
}

if (!interview) {
  return (
    <EmptyState
      title="Interview Not Found"
      description="The interview you're looking for doesn't exist or may have been deleted."
    />
  );
}

  const currentQuestion = interview.questions[currentQuestionIndex];

  const handleAnswerChange = (e) => {
    setAnswers({
      ...answers,
      [currentQuestion._id]: e.target.value,
    });
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-8">
      <h1 className="text-4xl font-bold">{interview.role}</h1>
      <p className="mt-2 text-sm text-gray-500">
        Question {currentQuestionIndex + 1} of {interview.questions.length}
      </p>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold leading-9 text-gray-900">{currentQuestion.question}</h2>
      </div>
      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Your Answer
        </label>
      <textarea
        value={answers[currentQuestion._id] || ""}
        onChange={handleAnswerChange}
        placeholder="Write your answer..."
        className="h-52 w-full resize-none rounded-2xl border border-gray-300 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
      </div>
      <div className="mt-8 flex items-center justify-between">
      <Button
        onClick={handlePrevious}
        disabled={currentQuestionIndex === 0}
        >
          Previous
      </Button>

      <Button onClick={handleNext}>
        {currentQuestionIndex === interview.questions.length - 1 ? "Submit Interview" : "Next"}
      </Button>
      </div>
    </div>
  );
};

export default Interview;
