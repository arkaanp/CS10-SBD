import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import './style.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password
      });
      localStorage.setItem('token', response.data.payload.token);
      navigate('/items');
    } catch (error) {
      alert('Login failed. Periksa email dan password Anda.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate('/register')} className="link-btn">Belum punya akun? Register</button>
    </div>
  );
}

export default Login;