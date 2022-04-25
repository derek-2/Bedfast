import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div>
      <div className="topnav">
        <Link to={'/'}>Bedfast</Link>
        <div className="topnav-right">
          {props.currentUser ? <button onClick={props.logout}>Logout</button> : <></>}
          <Link to={'/login'}>Login</Link> :
          <Link to={'/signup'}>Sign Up</Link>
          <a href="/">Search</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar;