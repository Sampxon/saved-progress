import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbarStyle.css';

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/login'>Login</Link>
    </nav>
  );
}

{
  /*
  remove <Link to='/register'>Register/Link>
   */
}