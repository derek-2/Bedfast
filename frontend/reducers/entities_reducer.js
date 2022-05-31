import { combineReducers } from "redux";
import ListingsReducer from "./listings_reducer";
import UsersReducer from "./users_reducer";
import Booking from './booking_reducer';
import reviews from './review_reducer';

const entitiesReducer = combineReducers({
  users: UsersReducer,
  listings: ListingsReducer,
  bookings: Booking,
  reviews
})

export default entitiesReducer;