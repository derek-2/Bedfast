import React from 'react';
import SignUpModalContainer from './session/signup_container';
import LoginModalCotainer from './session/login_container';
import NavBarContainer from './navbar/navbar_container';
import { Route, Switch, Redirect } from 'react-router';
// import SessionFormModal from './session/session_form';

const App = (props) => (
    <div>
        <div className='modals'>
            <NavBarContainer />
        </div>
        <Route path='/signup' component={SignUpModalContainer}/>
        <Route path='/login' component={LoginModalCotainer}/>


    </div>
);

export default App;