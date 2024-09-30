import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        setMessage('Registration successful. Please check your email for verification.');
        setError('');
        // Redirect to the Info page
        navigate('/info');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
      setMessage('');
    }
  };

  return (
    <div className='pageholderpic-2'>
    <div className='container-2'>
      <h1><strong>Become a Leafling!</strong></h1>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder='Enter your name'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-2">
          <label htmlFor="emailID">Email</label>
          <input
            type="email"
            id="emailID"
            name="email"
            placeholder='Enter your Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Enter your password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-2">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder='Confirm'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-2">
          <input type="submit" value="Sign Up" />
        </div>
      </form>
      <div className="footer-2">
        <strong><p>Already have an account? <a href="/">Log in</a></p></strong>
      </div>
    </div>
    </div>
  );
}

export default Signup;
