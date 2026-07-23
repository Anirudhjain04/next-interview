import { useParams, useNavigate } from "react-router-dom";
import InterviewHeader from "../../components/interview/InterviewHeader";
import InterviewInfo from "../../components/interview/InterviewInfo";
import InterviewInstructions from "../../components/interview/InterviewInstructions";
import Button from "../../components/ui/Button";
import useInterview from "../../hooks/useInterview";
import LoadingState from "../../components/common/LoadingState";
import EmptyState from "../../components/common/EmptyState";

const InterviewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { interview, loading } = useInterview(id);

  const handleStartInterview = () => {
    navigate(`/interview/${id}/start`);
  };
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

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <InterviewHeader role={interview.role} />

      <InterviewInfo interview={interview} />

      <InterviewInstructions />

      <div className="mt-10 flex justify-end">
        <Button onClick={handleStartInterview}>Start Interview</Button>
      </div>
    </div>
  );
};

export default InterviewDetails;
