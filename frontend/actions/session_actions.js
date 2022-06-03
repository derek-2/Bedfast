import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_LOGIN_ERRORS = 'RECEIVE_LOGIN_ERRORS';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';


export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveLoginErrors = errors => ({
    type: RECEIVE_LOGIN_ERRORS,
    errors
})

export const receiveSignupErrors = errors => ({
    type: RECEIVE_SIGNUP_ERRORS,
    errors
})

export const login = user => dispatch => (
    SessionApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveLoginErrors(err.responseJSON)))
)

export const logout = () => dispatch => (
    SessionApiUtil.logout().then(res => dispatch(logoutCurrentUser()), err => dispatch(receiveSessionErrors(err.responseJSON)))
)

export const signUp = user => dispatch => (
    SessionApiUtil.signUp(user).then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveSignupErrors(err.responseJSON)))
)