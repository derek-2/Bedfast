import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_USERS } from "../actions/session_actions";
const SessionsReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    
    switch(action.type){
        case RECEIVE_USERS:
            return Object.assign(nextState, action.users);
        case RECEIVE_CURRENT_USER:
            nextState.currentUserId = action.currentUser.id;
            return nextState;
        case LOGOUT_CURRENT_USER:
            nextState.currentUserId = null;
            return nextState;
        default:
            return state;
    }
}

export default SessionsReducer;