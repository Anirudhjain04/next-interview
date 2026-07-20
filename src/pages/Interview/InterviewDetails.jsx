import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInterviewById } from "../../services/interviewService";

const InterviewDetails = () => {
  const { id } = useParams();

  const [interview, setInterview] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchInterview = async () => {
    try {
      const data = await getInterviewById(id);

      console.log(data);

      setInterview(data.interview);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInterview();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (!interview) {
    return <h1>Interview Not Found</h1>
  }

  return (
  <div>
    <h1>{interview.role}</h1>
    <p>{interview.techStack}</p>
    <p>{interview.difficulty}</p>
  </div>
  );
};

export default InterviewDetails;
