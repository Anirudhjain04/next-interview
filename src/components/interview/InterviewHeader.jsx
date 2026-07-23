

const InterviewHeader = ({role}) => {
  return (
    <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
            {role}
        </h1>
        <p className="mt-2 text-gray-600">
            Your AI-generated interview is ready. Review the details below before starting.
        </p>
    </div>
  )
}

export default InterviewHeader