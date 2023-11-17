import React, { useState } from 'react';
import { useAuth } from './AuthContext';

function Login(){
    const { login } = useAuth();
    const [ formData, setFormData ] = useState({username: '', password: ''});

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(formData);
    };

    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
}

export default Login;