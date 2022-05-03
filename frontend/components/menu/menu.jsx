import React from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component{
    constructor(props){
        super(props);
        this.handleLogout=this.handleLogout.bind(this);
        this.toggleModal=this.showModal.bind(this);
    }

    handleLogout(){
        this.props.logout();
    }

    showModal(field){

        return () => {
            const modal = document.getElementById(`${field}-modal`);
            const modal2 = document.getElementById('session-modal-container');
            modal.classList.add('unhide');
            modal2.classList.add('unhide');
            modal2.classList.remove('hide');
        }
      }

    render(){

        return(
            <>
                <div className='top-right-menu' id='top-right-menu'>
                    <ul>
                        
                        {this.props.currentUser ?
                            <li className="logout-btn" onClick={this.handleLogout}>Logout</li> :
                            <>
                                <li onClick={this.showModal('login')}>Login</li>
                                <li onClick={this.showModal('signup')}>Sign Up</li>
                            </>
                        }
                    </ul>
                </div>
            </>
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
