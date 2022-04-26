import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import SessionsReducer from './sessions_reducer';
import SessionsErrorReducer from './session_errors_reducer';

const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: SessionsReducer,
    errors: SessionsErrorReducer
});

export default RootReducer;