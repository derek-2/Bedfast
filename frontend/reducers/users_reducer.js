import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";

const UsersReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_USER:
            nextState[action.user.id] = action.user;
            return nextState;
        case RECEIVE_USERS:
            action.users.forEach(user => nextState[user.id] = user)
            return nextState;
        default:
            return state;
    }
}


export default UsersReducer;