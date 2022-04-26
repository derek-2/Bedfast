import React from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component{
    constructor(props){
        super(props);
        this.handleLogout=this.handleLogout.bind(this);
    }

    handleLogout(){
        debugger;
        this.props.logout();
    }

    render(){
        return(
            <div className='top-right-menu'>
                <ul>
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/signup'}>Sign Up</Link></li>
                    <li className="logout-btn" onClick={this.handleLogout}>Logout</li>
                </ul>
         </div>
        )
    }

}


// const Menu = (props) => {
//     return (
//         <div className='top-right-menu'>
//             <ul>
//                 <li><Link to={'/login'}>Login</Link></li>
//                 <li><Link to={'/signup'}>Sign Up</Link></li>
//             </ul>
//         </div>
//     )
// }
