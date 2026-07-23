import React from 'react'

const InterviewInstructions = () => {
  return (
    <div className="mt-8 rounded-xl border border-yellow-200 bg-yellow-50 p-6">
        <h2 className="text-xl font-semibold text-gray-900">
            Interview Instructions:
        </h2>
        <ul className='mt-4 list-disc space-y-3 pl-5 text-gray-700'>
            <li>Read each question carefully before answering.</li>
            <li>Try to answer in your own words instead of memorized responses.</li>
            <li>Your answers will be evaluated by AI based on clarity, accuracy, and relevance.</li>
            <li>Once the interview starts, stay focused and complete all questions.</li>
            <li>Click <strong>Start Interview</strong> only when you're ready.</li>
        </ul>
    </div>
  )
}

export default InterviewInstructions