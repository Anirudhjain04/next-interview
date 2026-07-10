import { createContext, useState, useEffect, useContext } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null)

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token')

        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }

        if (storedToken) {
            setToken(storedToken)
        }
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