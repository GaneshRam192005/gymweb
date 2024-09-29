import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [userData, setUserData] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    country: '',
    password1: '',
    password2: '',
  });
  const [adminUpdateForm, setAdminUpdateForm] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    country: '',
    password1: '',
    password2: '',
    gym_name: '',
    gym_address: '',
    gym_phone_number: ''
  });
  const [adminForm, setAdminForm] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    country: '',
    password1: '',
    password2: '',
    gym_name: '',
    gym_address: '',
    gym_phone_number: ''
  });
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
      if (parsedUserData.userType === 'user') {
        fetchUserDetails(parsedUserData.user_id);
      } else if (parsedUserData.userType === 'admin') {
        fetchAdminDetails(parsedUserData.user_id);
      }
    } else {
      navigate('/');
    }
  }, [navigate]);

  const fetchUserDetails = async (uid) => {
    try {
      const response = await fetch(`https://gym-management-2.onrender.com/accounts/user_register?id=${uid}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      const data = await response.json();
      if (response.ok) {
        setUserDetails(data);
        setUpdateFormData(data);
      } else {
        console.log('Failed to fetch user details:', data.message);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const fetchAdminDetails = async (uid) => {
    try {
      const response = await fetch(`https://gym-management-2.onrender.com/accounts/admin_register?id=${uid}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      const data = await response.json();
      if (response.ok) {
        setAdminUpdateForm(data);
      } else {
        console.log('Failed to fetch admin details:', data.message);
      }
    } catch (error) {
      console.error('Error fetching admin details:', error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('https://gym-management-2.onrender.com/accounts/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ user_id: userData.user_id })
      });

      if (response.ok) {
        localStorage.removeItem('userData');
        navigate('/');
      } else {
        const data = await response.json();
        alert(`Logout failed: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error during logout:', error);
      alert('An error occurred during logout');
    }
  };


  const handleAdminFormChange = (e) => {
    setAdminForm({ ...adminForm, [e.target.name]: e.target.value });
  };

  const handleAdminUpdateFormChange = (e) => {
    setAdminUpdateForm({ ...adminUpdateForm, [e.target.name]: e.target.value });
  };

  const handleUpdateFormChange = (e) => {
    setUpdateFormData({ ...updateFormData, [e.target.name]: e.target.value });
  };

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      try {
        const response = await fetch(`https://gym-management-2.onrender.com/accounts/user_register?id=${userData.user_id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          alert('Your account has been successfully deleted.');
          localStorage.removeItem('userData');
          navigate('/');
        } else {
          const data = await response.json();
          alert(`Failed to delete account: ${data.message || 'Unknown error'}`);
        }
      } catch (error) {
        console.error('Error deleting account:', error);
        alert('An error occurred while deleting your account');
      }
    }
  };

  const handleDeleteAdmin = async () => {
    if (window.confirm("Are you sure you want to delete your admin account? This action cannot be undone.")) {
      try {
        const response = await fetch(`https://gym-management-2.onrender.com/accounts/admin_register?id=${userData.user_id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          alert('Your admin account has been successfully deleted.');
          localStorage.removeItem('userData');
          navigate('/');
        } else {
          const data = await response.json();
          alert(`Failed to delete admin account: ${data.message || 'Unknown error'}`);
        }
      } catch (error) {
        console.error('Error deleting admin account:', error);
        alert('An error occurred while deleting your admin account');
      }
    }
  };

  const handleAdminSubmit = async (e) => {
    e.preventDefault();
    const adminData = {
      id: userData.user_id,
      ...adminForm
    };
    try {
      const response = await fetch('https://gym-management-2.onrender.com/accounts/admin_register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(adminData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Admin created successfully!');
        setAdminForm({
          username: '',
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          country: '',
          password1: '',
          password2: '',
          gym_name: '',
          gym_address: '',
          gym_phone_number: ''
        });
      } else {
        alert(`Failed to create admin: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error creating admin:', error);
      alert('An error occurred while creating the admin');
    }
  };

  const handleAdminUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateData = {
        ...adminUpdateForm,
        id: userData.user_id
      };
      const response = await fetch('https://gym-management-2.onrender.com/accounts/admin_register', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(updateData)
      });
 
      const data = await response.json();
 
      if (response.ok) {
        alert('Admin details updated successfully!');
        setIsModalOpen(false);
        setAdminUpdateForm(data);
      } else {
        alert(`Failed to update admin details: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error updating admin details:', error);
      alert('An error occurred while updating admin details');
    }
  };  

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://gym-management-2.onrender.com/accounts/password-reset/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email: forgotPasswordEmail })
      });

      const data = await response.json();
      if (response.ok) {
        alert('Password reset instructions have been sent to your email.');
        setShowForgotPassword(false);
      } else {
        alert(`Password reset failed: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error during password reset:', error);
      alert('An error occurred during password reset');
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const updateData = {
      ...updateFormData,
      id: userData.user_id
    };
    try {
      const response = await fetch('https://gym-management-2.onrender.com/accounts/user_register', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(updateData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('User details updated successfully!');
        setUserDetails(data);
        setIsModalOpen(false);
      } else {
        alert(`Failed to update user details: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error updating user details:', error);
      alert('An error occurred while updating user details');
    }
  };

  if (!userData) return null;

  return (
    <div>
      <h1>Welcome, {userData.username}!</h1>
      <p>Role: {userData.userType}</p>
      
      {userData.userType === 'superuser' ? (
        <div>
          <h2>Create Admin</h2>
          <form onSubmit={handleAdminSubmit}>
            <input type="text" name="username" value={adminForm.username} onChange={handleAdminFormChange} placeholder="Username" required pattern="^[\w.@+-]+$" maxLength="150" />
            <input type="text" name="first_name" value={adminForm.first_name} onChange={handleAdminFormChange} placeholder="First Name" required maxLength="150" />
            <input type="text" name="last_name" value={adminForm.last_name} onChange={handleAdminFormChange} placeholder="Last Name" required maxLength="150" />
            <input type="email" name="email" value={adminForm.email} onChange={handleAdminFormChange} placeholder="Email" required maxLength="254" />
            <input type="tel" name="phone_number" value={adminForm.phone_number} onChange={handleAdminFormChange} placeholder="Phone Number" required maxLength="15" minLength="1" />
            <input type="text" name="country" value={adminForm.country} onChange={handleAdminFormChange} placeholder="Country" required maxLength="20" minLength="1" />
            <input type="password" name="password1" value={adminForm.password1} onChange={handleAdminFormChange} placeholder="Password" required maxLength="20" minLength="1" />
            <input type="password" name="password2" value={adminForm.password2} onChange={handleAdminFormChange} placeholder="Confirm Password" required maxLength="20" minLength="1" />
            <input type="text" name="gym_name" value={adminForm.gym_name} onChange={handleAdminFormChange} placeholder="Gym Name" maxLength="20" minLength="1" />
            <input type="text" name="gym_address" value={adminForm.gym_address} onChange={handleAdminFormChange} placeholder="Gym Address" minLength="1" />
            <input type="tel" name="gym_phone_number" value={adminForm.gym_phone_number} onChange={handleAdminFormChange} placeholder="Gym Phone Number" maxLength="20" minLength="1" />
            <button type="submit">Create Admin</button>
          </form>
        </div>
      ) : userData.userType === 'admin' ? (
        <div>
          <h2>Admin Details</h2>
          <p>Username: {adminUpdateForm.username}</p>
          <p>Email: {adminUpdateForm.email}</p>
          <p>First Name: {adminUpdateForm.first_name}</p>
          <p>Last Name: {adminUpdateForm.last_name}</p>
          <p>Phone Number: {adminUpdateForm.phone_number}</p>
          <p>Country: {adminUpdateForm.country}</p>
          <p>Gym Name: {adminUpdateForm.gym_name}</p>
          <p>Gym Address: {adminUpdateForm.gym_address}</p>
          <p>Gym Phone Number: {adminUpdateForm.gym_phone_number}</p>
          <button onClick={() => setIsModalOpen(true)}>Update Admin Details</button>
          <button onClick={handleDeleteAdmin} style={{backgroundColor: 'red', color: 'white'}}>Delete Admin Account</button>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <h2>Update Admin Details</h2>
                <form onSubmit={handleAdminUpdateSubmit}>
                  <input type="text" name="username" value={adminUpdateForm.username} onChange={handleAdminUpdateFormChange} placeholder="Username" required />
                  <input type="text" name="first_name" value={adminUpdateForm.first_name} onChange={handleAdminUpdateFormChange} placeholder="First Name" required />
                  <input type="text" name="last_name" value={adminUpdateForm.last_name} onChange={handleAdminUpdateFormChange} placeholder="Last Name" required />
                  <input type="email" name="email" value={adminUpdateForm.email} onChange={handleAdminUpdateFormChange} placeholder="Email" required />
                  <input type="tel" name="phone_number" value={adminUpdateForm.phone_number} onChange={handleAdminUpdateFormChange} placeholder="Phone Number" required />
                  <input type="text" name="country" value={adminUpdateForm.country} onChange={handleAdminUpdateFormChange} placeholder="Country" required />
                  <input type="password" name="password1" value={adminUpdateForm.password1} onChange={handleAdminUpdateFormChange} placeholder="New Password" />
                  <input type="password" name="password2" value={adminUpdateForm.password2} onChange={handleAdminUpdateFormChange} placeholder="Confirm New Password" />
                  <input type="text" name="gym_name" value={adminUpdateForm.gym_name} onChange={handleAdminUpdateFormChange} placeholder="Gym Name" />
                  <input type="text" name="gym_address" value={adminUpdateForm.gym_address} onChange={handleAdminUpdateFormChange} placeholder="Gym Address" />
                  <input type="tel" name="gym_phone_number" value={adminUpdateForm.gym_phone_number} onChange={handleAdminUpdateFormChange} placeholder="Gym Phone Number" />
                  <button type="submit">Update</button>
                  <button type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
                </form>
              </div>
            </div>
          )}
        </div>
      ) : (
        userDetails && (
          <div>
            <h2>User Profile</h2>
            <p>Username: {userDetails.username}</p>
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.first_name}</p>
            <p>Last Name: {userDetails.last_name}</p>
            <p>Phone Number: {userDetails.phone_number}</p>
            <p>Country: {userDetails.country}</p>
            <button onClick={() => setIsModalOpen(true)}>Update Profile</button>
            <button onClick={handleDeleteAccount} style={{backgroundColor: 'red', color: 'white'}}>Delete Account</button>
            {isModalOpen && (
              <div className="modal">
                <div className="modal-content">
                  <h2>Update Profile</h2>
                  <form onSubmit={handleUpdateSubmit}>
                    <input type="text" name="username" value={updateFormData.username} onChange={handleUpdateFormChange} placeholder="Username" required />
                    <input type="text" name="first_name" value={updateFormData.first_name} onChange={handleUpdateFormChange} placeholder="First Name" required />
                    <input type="text" name="last_name" value={updateFormData.last_name} onChange={handleUpdateFormChange} placeholder="Last Name" required />
                    <input type="email" name="email" value={updateFormData.email} onChange={handleUpdateFormChange} placeholder="Email" required />
                    <input type="tel" name="phone_number" value={updateFormData.phone_number} onChange={handleUpdateFormChange} placeholder="Phone Number" required />
                    <input type="text" name="country" value={updateFormData.country} onChange={handleUpdateFormChange} placeholder="Country" required />
                    <input type="password" name="password1" value={updateFormData.password1} onChange={handleUpdateFormChange} placeholder="New Password" />
                    <input type="password" name="password2" value={updateFormData.password2} onChange={handleUpdateFormChange} placeholder="Confirm New Password" />
                    <button type="submit">Update</button>
                    <button type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        )
      )}
  
      <button onClick={handleLogout}>Logout</button>
  
      {showForgotPassword && (
        <div className="forgot-password-section">
          <h2>Reset Password</h2>
          <form onSubmit={handleForgotPassword}>
            <input 
              type="email" 
              value={forgotPasswordEmail} 
              onChange={(e) => setForgotPasswordEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
            />
            <button type="submit">Reset Password</button>
          </form>
          <button onClick={() => setShowForgotPassword(false)}>Cancel</button>
        </div>
      )}
  
      <button onClick={() => setShowForgotPassword(true)}>Forgot Password?</button>
    </div>
  );
};
