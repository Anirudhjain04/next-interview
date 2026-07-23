import React from 'react'

const InterviewInfo = ({interview}) => {
  return (
    <div className='grid grid-cols-1 gap-4 mt-8 md:grid-cols-3'>
        {/* Experience */}
        <div className='rounded-xl border border-gray-200 bg-white p-5 shadow-sm'>
            <h3 className='text-sm font-medium text-gray-500'>
                Experience
            </h3>
            <p className='mt-2 text-lg font-semibold text-gray-900'>
                {interview.experience} Years
            </p>
        </div>

        {/* Difficulty */}
        <div className='rounded-xl border border-gray-200 bg-white p-5 shadow-sm'>
            <h3 className='text-sm font-medium text-gray-500'>
                Difficulty
            </h3>
            <p className='mt-2 text-lg font-semibold text-gray-900'>
                {interview.difficulty}
            </p>
        </div>

        {/* Tech Stack */}
        <div className='rounded-xl border border-gray-200 bg-white p-5 shadow-sm'>
            <h3 className='text-sm font-medium text-gray-500'>
                Tech Stack
            </h3>
            <p className='mt-2 text-lg font-semibold text-gray-900 break-words'>
                {interview.techStack}
            </p>
        </div>
    </div>
  )
}

export default InterviewInfo