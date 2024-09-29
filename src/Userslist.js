import React from 'react';

export const Userslist = () => {
  const handle = async (e) => {
    e.preventDefault();
    const uid = document.getElementById('UUID').value;

    try {
      // Construct the URL with the UID as a query parameter
      const response = await fetch(`https://gym-management-2.onrender.com/accounts/user_register?id=${uid}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      const data = await response.json();
      console.log('Response:', data);

      if (response.ok) {
        console.log('Request successful:', data);
        // Perform any actions upon successful request, like updating the UI or redirecting.
      } else {
        console.log('Request failed:', data.message);
        // Handle error, like showing an error message to the user.
      }

    } catch (error) {
      console.error('Error during request:', error);
    }
  };

  return (
    <div>
      <input id="UUID" placeholder="Enter User ID" />
      <button onClick={handle}>Send</button>
    </div>
  );
};
