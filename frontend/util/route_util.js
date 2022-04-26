import React from 'react';
import {connect} from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapState = state => ({
    loggedIn: Boolean(state.session.currentUserId)
})

const Auth = ({loggedIn, path, component: Component}) => (
    <Route path={path} render={props => (
        loggedIn ? <Redirect to={'/'} /> : <Component {...props} />
    )} />
);

const Protected = ({loggedIn, path, component: Component}) => (
    <Route path={path} render={props => (
        !loggedIn ? <Redirect to={'/'} /> : <Component {...props} />
    )} />
);

export const AuthRoute = withRouter(connect(mapState)(Auth));
export const ProtectedRoute = withRouter(connect(mapState)(Protected));