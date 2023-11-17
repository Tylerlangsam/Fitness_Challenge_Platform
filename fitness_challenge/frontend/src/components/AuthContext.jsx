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
    };

  const logout = async () => {
    try {
      // Perform additional cleanup during logout
      await axios.post('http://localhost:8000/api/auth/logout/'); // Adjust the logout API endpoint

      // Clear local storage or cookies containing authentication tokens
      localStorage.removeItem('authToken'); // Adjust based on your token storage approach

      // Remove any session-related data
      sessionStorage.clear();

      // Set the user state to null
      setUser(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/register/', userData);

      if (response.status === 201) {
        setUser(response.data);
      }
      else{
        console.error('Registration Failed');
    }
    }
    catch (error) {
        console.error("error during registration", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
        {children}
    </AuthContext.Provider>
  )
}
