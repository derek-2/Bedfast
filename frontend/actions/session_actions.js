import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const login = user => dispatch => (
    SessionApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveSessionErrors(err.responseJSON)))
)

export const logout = () => dispatch => (
    SessionApiUtil.logout().then(res => dispatch(logoutCurrentUser()), err => dispatch(receiveSessionErrors(err.responseJSON)))
)

export const signUp = user => dispatch => (
    SessionApiUtil.signUp(user).then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveSessionErrors(err.responseJSON)))
)