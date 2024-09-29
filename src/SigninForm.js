import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SigninForm = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);


  const submit = async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!userType) {
      alert("Please select a user type");
      return;
    }

    const loginData = {
      username: username,
      password: password,
    };

    try {
      let url;
      switch (userType) {
        case "superuser":
          url = "https://gym-management-2.onrender.com/accounts/superlogin/";
          break;
        case "admin":
          url = "https://gym-management-2.onrender.com/accounts/admin_login/";
          break;
        case "user":
          url = "https://gym-management-2.onrender.com/accounts/user_login";
          break;
        default:
          alert("Invalid user type");
          return;
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (response.ok) {
        localStorage.setItem("userData", JSON.stringify({ ...data, userType }));
        navigate("/Home");
      } else {
        alert(`Login failed: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login");
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const email = document.getElementById('forgotPasswordEmail').value;
    // Implement the API call to reset password here
    console.log('Password reset requested for:', email);
    // After successful API call, you can show a success message or handle accordingly
  };
  

  return (
    <>
      <form action="#" className="sign-in-form">
        <h2 className="title">Sign In</h2>
        <div className="input-field">
          <i className="fas fa-user-tag"></i>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="user-type-select"
            required
          >
            <option value="">Select User Type</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="superuser">Superuser</option>
          </select>
        </div>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Username" id="username" required />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" id="password" required />
        </div>
        <input type="submit" onClick={submit} value="Login" className="btn solid" />
        <p className="forgot-password" onClick={() => navigate("/Home")}>Forgot Password?</p>
  
        <p className="social-text">Or Sign in with social platforms</p>
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
