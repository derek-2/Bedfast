import React from 'react';
import SignUpModalContainer from './session/signup_container';
import LoginModalCotainer from './session/login_container';
import NavBarContainer from './navbar/navbar_container';
import Footer from './footer/footer';
import {AuthRoute} from '../util/route_util';
import HomePageContainer from './homepage/homepage_container';

const App = (props) => (
    <div id="main">
        <div id="top-half">
            <div className='modals'>
                <NavBarContainer />
                <img className='background' src={window.background} alt="splash" />
            </div>
            <AuthRoute path='/signup' component={SignUpModalContainer}/>
            <AuthRoute path='/login' component={LoginModalCotainer}/>
        </div>
        <div id="bottom-half">
            <HomePageContainer />
            <Footer />
        </div>
    </div>
);

export default App;