import React from 'react'
import QuestionCard from './QuestionCard'

const QuestionList = ({questions}) => {
  return (
        <div className='mt-8 space-y-4'>
            {questions.map((question, index) => (
                <QuestionCard
                    key={index}
                    index={index}
                    question={question}
                />
            ) )}
        </div>
  )
}

export default QuestionList