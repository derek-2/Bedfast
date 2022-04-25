import React from 'react';
import SignUpModalContainer from './session/signup_container';
import LoginModalCotainer from './session/login_container';
// import SessionFormModal from './session/session_form';

const App = (props) => (
    <div>
        <SignUpModalContainer />
        <LoginModalCotainer />
    </div>
);

export default App;