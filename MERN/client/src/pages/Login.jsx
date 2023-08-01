import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import '../assets/styles/loginStyle.css';

export default function Login() {
  const navigateTo = useNavigate();
 // Create a history object to handle navigation

  const responseGoogle = (response) => {
    console.log(response);
    // Handle the response from Google Sign-In
    // You can send the response to your server for authentication
  };

  // Create an array of random email and password combinations for testing
  const randomCredentials = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'sam@gmail.com', password: '1111' },
  ];

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = (e) => {
    e.preventDefault();
    // Check if the entered email and password match any of the randomCredentials
    const matchedCredentials = randomCredentials.find(
      (cred) => cred.email === data.email && cred.password === data.password
    );

    if (matchedCredentials) {
      // Redirect the user to a new page route after successful login
      navigateTo('./Dashboard.jsx'); // Replace '/dashboard' with your desired route
    } else {
      // Handle login failure, show an error message, etc.
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={loginUser} className='login-form'>
        <label className='login-form-label'>Email</label>
        <input
          type='email'
          placeholder='enter email...'
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className='login-form-input'
        />
        <label className='login-form-label'>Password</label>
        <input
          type='password'
          placeholder='enter password...'
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className='login-form-input'
        />
        <button type='submit' className='login-form-button'>
          Login
        </button>
      </form>
      <div className='google-login-container'>
        <GoogleLogin
          clientId='YOUR_CLIENT_ID' // Replace with your actual client ID
          buttonText='Sign in with Google'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          className='google-login-button'
        />
      </div>
    </div>
  );
}

{
  //cors is an alternative to
  /* 
   if (matchedCredentials) {
      // Redirect the user to the './dashboard' route after successful login
      window.location.href = './dashboard'; // Use './dashboard' to navigate relative to the current route
    } else {
      // Handle login failure, show an error message, etc.
    }
  };


"useHistory" is replaced by "useNavigate", in "react-router-dom" v.6

import { useNavigate } from 'react-router-dom';
const navigateTo = useNavigate();
navigateTo('/your-page')
*/
}
