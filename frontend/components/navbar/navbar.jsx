import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../searchbar/search_bar';

// const NavBar = (props) => {
//   return (
//     <div>
//       <div className="topnav">
//         <Link to={'/'}>Bedfast</Link>
//         <div className="topnav-right">
//           {props.currentUser ? <button onClick={props.logout}>Logout</button> : <></>}
//           <Link to={'/login'}>Login</Link> :
//           <Link to={'/signup'}>Sign Up</Link>
//           <a href="/">Search</a>
//         </div>
//       </div>
//     </div>
//   )
// }

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout= this.handleLogout.bind(this);
  }

  handleLogout(){
    this.props.logout();
    debugger;
    // this.props.history.push('/');
  }

  render(){
    return (
      <div id="top-nav">
        <Link to={'/'}>Bedfast</Link>
        <SearchBar />
        <div id="right-nav">
          {this.props.currentUser ? <button onClick={this.handleLogout}>Logout</button> : <></>}
          <ul>
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/signup'}>Sign Up</Link></li>
          </ul>
        </div>
      </div>
    )}
      /// will ahve to move login/signup buttons to modal component
}