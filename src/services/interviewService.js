import api from "./api";

export const generateInterview = async (data) => {
    const response = await api.post("/interviews/generate", data);
    return response.data;
};

export const getInterviews = async () => {
    const response = await api.get("/interviews")
    return response.data
}

export const getInterviewById = async (id) => {
    const response = await api.get(`/interviews/${id}`)
    return response.data;
}