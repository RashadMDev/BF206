import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
      return (
            <nav className="navbar">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                  <Link className="nav-link" to="/projects">Projects</Link>
                  <Link className="nav-link" to="/requests">Requests</Link>
                  <Link className="nav-link" to="/timer">Timer</Link>
            </nav>
      );
};

export default Navbar;
