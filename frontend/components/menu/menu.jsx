import React from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component{
    constructor(props){
        super(props);
        this.handleLogout=this.handleLogout.bind(this);
        this.toggleModal=this.showModal.bind(this);
    }

    handleLogout(){
        this.props.logout()
        .then(() => document.getElementById('top-right-menu').classList.toggle('hidden'))
    }

    showModal(field){
        return () => {
            document.getElementById(`${field}-modal`).classList.toggle('hidden');
            document.getElementById('session-modal-container').classList.toggle('hidden');
            document.getElementById('top-right-menu').classList.toggle('hidden');
        }
    }

    render(){

        return(
            <>
                <div className='top-right-menu hidden' id='top-right-menu'>
                    <ul>
                        
                        {this.props.currentUser ?
                            <>
                            <Link to={`/profile/${this.props.currentUser.id}`} onClick={() => document.getElementById('top-right-menu').classList.toggle('hidden')}><li>Profile</li></Link>
                            <li className="logout-btn" onClick={this.handleLogout}>Logout</li>
                            </> :
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
