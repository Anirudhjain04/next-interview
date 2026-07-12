import api from "./api";

// Signup User
export const signup = async(userData) => {
    const response = await api.post("/auth/signup", userData)
    return response.data;
};

// Login User
export const login = async(userData) => {
    const response = await api.post("/auth/login", userData)
    return response.data;
};

export const getCurrentUser = async () => {
    const response = await api.get("/auth/me")
    return response.data;
}