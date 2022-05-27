import {RECEIVE_USER_ERRORS, RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';

const UserErrorReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors;
        case RECEIVE_USER:
            return [];
        case RECEIVE_USERS:
            return [];
        default:
            return state;
    }

}

export default UserErrorReducer;