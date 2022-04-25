import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div id='main'>
      <div className="topnav">
        <Link to={'/'}>AirBnB</Link>
        <div className="topnav-right">
          {props.currentUser ? <button onClick={props.logout}>Logout</button> : <></>}
          <Link to={'/session/new'}>Login</Link> :
          <Link to={'/users/new'}>Sign Up</Link>
          <a href="/">Search</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar;