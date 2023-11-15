import React from 'react';
import './Navbar.css';
import Logo from '../../Images/Logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="" />
      </div>
      <ul className="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">Blog</a></li>
        <li><a href="/services">Gallery</a></li>
        <li><a href="/contact">Activities</a></li>
        <li><a href="/contact">Deals</a></li>
        <li><a href="/contact">Contact</a></li>

      </ul>
    </nav>
  );
};

export default Navbar;
