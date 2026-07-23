import { useEffect, useState } from "react";
import { getInterviewById } from "../services/interviewService";

const useInterview = (id) => {
  const [interview, setInterview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInterview = async () => {
      try {
        const { interview } = await getInterviewById(id);
        setInterview(interview);
      } catch (error) {
        console.error("Failed to fetch interview:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInterview();
  }, [id]);

  return {
    interview,
    loading,
  };
};

export default useInterview;