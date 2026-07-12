import { createContext, useState, useEffect, useContext } from 'react'
import { getCurrentUser } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null)

    useEffect(() => {
        const loadUser = async() => {
            const storedToken = localStorage.getItem("token")

            // No token means user is not logged in
            if(!storedToken) return

            // Set token in state
            setToken(storedToken)
            try {
                // Fetch latest user from backend
                const response = await getCurrentUser();
                setUser(response.user);

                // Update localStorage with latest user data
                localStorage.setItem("user", JSON.stringify(response.user))
            } catch (error) {
                console.error("Failed to load user:", error);

                // Invalid or expired token
                setUser(null)
                setToken(null)

                localStorage.removeItem("user")
                localStorage.removeItem("token")
            }
        };
        loadUser();
    }, []);

    const login = (userData, userToken) => {
        setUser(userData)
        setToken(userToken)

        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", userToken);
    }

    const logout = () => {
        setUser(null);
        setToken(null);

        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{user, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext)
};

export default AuthContext;