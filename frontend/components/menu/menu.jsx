import React from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component{
    constructor(props){
        super(props);
        this.handleLogout=this.handleLogout.bind(this);
        this.showModal=this.showModal.bind(this);
    }

    handleLogout(){
        this.props.logout()
    }

    showModal(field){
        return () => {
            const modal = document.getElementById(`${field}-modal`);
            const container = document.getElementById('session-modal-container');
            modal.classList.toggle('hidden');
            container.classList.toggle('hidden');
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