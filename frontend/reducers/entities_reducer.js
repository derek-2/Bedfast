import { combineReducers } from "redux";
import ListingsReducer from "./listings_reducer";
import UsersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: UsersReducer,
  listings: ListingsReducer
})

export default entitiesReducer;