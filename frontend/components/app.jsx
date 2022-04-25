import React from 'react';
import SignUpModalContainer from './session/signup_container';
import LoginModalCotainer from './session/login_container';
import NavBar from './navbar/navbar';
import { Route, Routes, Redirect } from 'react-router';
// import SessionFormModal from './session/session_form';

const App = (props) => (
    <div>
        <NavBar />
        <SignUpModalContainer />
        <LoginModalCotainer />

    </div>
);

export default App;