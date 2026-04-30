import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import './style.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '', username: '', email: '', password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/user/register', formData);
      alert('Registrasi berhasil! Silakan login.');
      navigate('/');
    } catch (error) {
      alert('Registrasi gagal. Pastikan format password sesuai validasi backend.');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input name="name" placeholder="Nama Lengkap" onChange={handleChange} required />
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password (Min 10 char, Kapital, Angka, Simbol)" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      <button onClick={() => navigate('/')} className="link-btn">Sudah punya akun? Login</button>
    </div>
  );
}

export default Register;