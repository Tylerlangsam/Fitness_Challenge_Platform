import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState(null);

    const login = async (userData) => {
        try 
    }
}