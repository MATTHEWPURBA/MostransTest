import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Rick and Morty App</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Characters List</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/location/Earth">Character By Location</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
