import {RECEIVE_USER_ERRORS, RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';

const UserErrorReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = [];

    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            nextState = nextState.concat(action.errors);
            return nextState;
        case RECEIVE_USER:
            return [];
        case RECEIVE_USERS:
            return [];
        default:
            return state;
    }

}

export default UserErrorReducer;