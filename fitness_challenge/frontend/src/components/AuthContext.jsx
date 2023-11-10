import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState(null);

    const login = async (userData) => {
        try {
            const response = await axios.post('http://localhost:8000/api/auth/login/', userData)
        
            if (response.status === 200) {
                setUser(response.userData);
            }
            else {
                console.error("Login Failed");
            }
        }
        catch(error){
            console.error('Error during login:', error);
        }
    }
}