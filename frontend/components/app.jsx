import React from 'react';
import SignUpModalContainer from './session/signup_container';
import LoginModalCotainer from './session/login_container';
import NavBarContainer from './navbar/navbar_container';
import Footer from './footer/footer';
import {AuthRoute} from '../util/route_util';
import HomePageContainer from './homepage/homepage_container';
import SignUpModal from './session/signup_container';
import LoginModal from './session/login_container';


const App = (props) => {
    const hideModal = () => {
        document.getElementById('session-modal-container').classList.add('hide');
        document.getElementById(`login-modal`).classList.remove('unhide');
        document.getElementById(`signup-modal`).classList.remove('unhide');
    }

    return (
    <div>
    <div id="main">
        <div id="top-half">
            <div className='modals'>
                <NavBarContainer />
                <img className='background' src={window.background} alt="splash" />
            </div>
            {/* <AuthRoute path='/signup' component={SignUpModalContainer}/>
            <AuthRoute path='/login' component={LoginModalCotainer}/> */}
        </div>
        <div id="bottom-half">
            <HomePageContainer />
            <Footer />
        </div>
    </div>
    <div onClick={hideModal} id="session-modal-container" className="session-modal-container">
        <SignUpModal />
        <LoginModal />
    </div>
    </div>
    )
};

export default App;