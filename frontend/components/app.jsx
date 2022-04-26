import React from 'react';
import SignUpModalContainer from './session/signup_container';
import LoginModalCotainer from './session/login_container';
import NavBarContainer from './navbar/navbar_container';
import Footer from './footer/footer';
import {AuthRoute} from '../util/route_util';

import { Route, Switch, Redirect } from 'react-router';

const App = (props) => (
    <div id="main">
        <div id="top-half">
            <div className='modals'>
                <NavBarContainer />
            </div>
            <img className='background' src={window.background} alt="splash" />
            <AuthRoute path='/signup' component={SignUpModalContainer}/>
            <AuthRoute path='/login' component={LoginModalCotainer}/>
        </div>
        <div id="bottom-half">

        <Footer />
        </div>
    </div>
);

export default App;