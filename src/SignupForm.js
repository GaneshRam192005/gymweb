import React, { useState } from 'react';

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    country: '',
    password1: '',
    password2: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://gym-management-2.onrender.com/accounts/user_register', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    alert(`${data.message } please login`);
    console.log(data); // Logs the response from the server
  };
  return (
    <>
        <form action="#" className="sign-up-form" onSubmit={handleSubmit}>
      <h2 className="title">Sign Up</h2>

      <div className="input-field">
        <i className="fas fa-user"></i>
        <input 
          type="text" 
          name="username" 
          placeholder="Username" 
          value={formData.username}
          onChange={handleChange} 
          required
          pattern="^[\w.@+-]+$"
          maxLength="150"
        />
      </div>

      <div className="input-field">
        <i className="fas fa-user"></i>
        <input 
          type="text" 
          name="first_name" 
          placeholder="First Name" 
          value={formData.first_name}
          onChange={handleChange} 
          required
          maxLength="150"
        />
      </div>

      <div className="input-field">
        <i className="fas fa-user"></i>
        <input 
          type="text" 
          name="last_name" 
          placeholder="Last Name" 
          value={formData.last_name}
          onChange={handleChange} 
          required
          maxLength="150"
        />
      </div>

      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange} 
          required
          maxLength="254"
        />
      </div>

      <div className="input-field">
        <i className="fas fa-phone"></i>
        <input 
          type="text" 
          name="phone_number" 
          placeholder="Phone Number" 
          value={formData.phone_number}
          onChange={handleChange} 
          required
          maxLength="15"
          minLength="1"
        />
      </div>

      <div className="input-field">
        <i className="fas fa-globe"></i>
        <input 
          type="text" 
          name="country" 
          placeholder="Country" 
          value={formData.country}
          onChange={handleChange} 
          required
          maxLength="20"
          minLength="1"
        />
      </div>

      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input 
          type="password" 
          name="password1" 
          placeholder="Password" 
          value={formData.password1}
          onChange={handleChange} 
          required
          maxLength="20"
          minLength="1"
        />
      </div>

      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input 
          type="password" 
          name="password2" 
          placeholder="Confirm Password" 
          value={formData.password2}
          onChange={handleChange} 
          required
          maxLength="20"
          minLength="1"
        />
      </div>

      <input type="submit" className="btn" value="Sign up" />

      <p className="social-text">Or Sign up with social platforms</p>

      <div className="social-media">
        <a href="#" className="social-icon">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-x-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
    </>
  );
};
