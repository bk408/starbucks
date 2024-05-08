import React from 'react'
import navImg from "../img/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-container">
      {/* <img className='logo' src={navImg} alt='logo' /> */}
      <Link to="/home" className="logo">
        <img src={navImg} alt="" />
      </Link>

      <ul className="navbar">
        <li className='nav'>
          <Link className='nav-link' to="/">Home</Link>
        </li>
        <li className='nav'>
          <Link className='nav-link' to="/shop">Shop</Link>
        </li>
        <li className='nav'>
          <Link className='nav-link' to="/delivery">Delivery</Link>
        </li>
        <li className='nav'>
          <Link className='nav-link' to="/app">App</Link>
        </li>
        <li className='nav'>
          <Link className='nav-link' to="/about">About</Link>
        </li>
        <li className='nav'>
          <Link className='nav-link' to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar













