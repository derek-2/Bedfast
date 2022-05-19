import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import SessionsReducer from './sessions_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: SessionsReducer,
    errors: ErrorsReducer,
});

export default RootReducer;