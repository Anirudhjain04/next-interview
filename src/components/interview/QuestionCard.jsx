import React from 'react'

const QuestionCard = ({index, question}) => {
  return (
    <div className='rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
        <h3 className="text-lg font-semibold text-gray-900">
            Question {index + 1}
        </h3>
        <p className='mt-3 leading-7 text-gray-700'>
            {question.question}
        </p>
    </div>
  )
}

export default QuestionCard