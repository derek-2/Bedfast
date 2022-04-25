import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className="topnav">
        <Link to={'/'}>Home</Link>
        <div className="topnav-right">
          <Link to={'/session/new'}>Login</Link>
          <Link to={'/users/new'}>Sign Up</Link>
          <a href="#search">Search</a>
        </div>
      </div>
    </>
  )
}

export default NavBar;