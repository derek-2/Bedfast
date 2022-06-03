import { combineReducers } from "redux";
import login from './login_errors_reducer';
import signup from './signup_errors_reducer';

const SessionsErrorReducer = combineReducers({
    login,
    signup
});

export default SessionsErrorReducer;