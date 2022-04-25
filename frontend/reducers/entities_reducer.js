import { combineReducers } from "redux";
import SessionsReducer from './sessions_reducer';
import SessionsErrorReducer from './session_errors_reducer';
import UsersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: UsersReducer,
  session: SessionsReducer,
  errors: SessionsErrorReducer
})

export default entitiesReducer;