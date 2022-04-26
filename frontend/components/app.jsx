import React from 'react';
import SignUpModalContainer from './session/signup_container';
import LoginModalCotainer from './session/login_container';
import NavBarContainer from './navbar/navbar_container';
import { Route, Switch, Redirect } from 'react-router';
import background from '../../app/assets/images/splash.jpg';
import Footer from './footer/footer';

const App = (props) => (
    <div id="main">
        <div id="top-half">
            <div className='modals'>
                <NavBarContainer />
            </div>
            <img className='background' src={background} alt="splash" />
            <Route path='/signup' component={SignUpModalContainer}/>
            <Route path='/login' component={LoginModalCotainer}/>
        </div>
        <div id="bottom-half">

        <Footer />
        </div>
    </div>
);

export default App;