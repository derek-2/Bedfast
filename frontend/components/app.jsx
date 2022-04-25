import React from 'react';
import SignUpModalContainer from './session/signup_container';
import LoginModalCotainer from './session/login_container';
import NavBar from './navbar/navbar';
import { Route, Switch, Redirect } from 'react-router';
// import SessionFormModal from './session/session_form';

const App = (props) => (
    <div>
        <NavBar />
        <Route path='/users/new' component={SignUpModalContainer}/>
        <Route path='/session/new' component={LoginModalCotainer}/>


    </div>
);

export default App;