import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const navLogin = () => {
    navigate('/login'); // Navigates to /login
  };

  return (
    <header className="header">
      <Link to="/" className="logo">Logo</Link>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/services">Services</Link>
        {/* Use onClick only if you want to handle it differently; otherwise, Link is enough */}
        <Link to="/login" onClick={navLogin}>Login</Link>
      </nav>
    </header>
  );
};

export default Navbar;
