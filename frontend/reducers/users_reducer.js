import { RECEIVE_CURRENT_USER, RECEIVE_USERS } from "../actions/session_actions"
const UsersReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser;
            return nextState;
        // case RECEIVE_USERS:
        //     debugger;
        //     return Object.assign(nextState, action.users);
        default:
            return state;
    }
}


export default UsersReducer;