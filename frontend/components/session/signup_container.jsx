import React from 'react';
import { connect } from "react-redux";
import { signUp } from '../../actions/session_actions';
import SignUpModal from './signup';

const mapState = (state) => {
    return ({
        errors: state.errors
    })
}

const mapDispatch = dispatch => {
    return ({
        signUp: user => dispatch(signUp(user))
    })
}

export default connect(mapState, mapDispatch)(SignUpModal);