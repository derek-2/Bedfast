import { combineReducers } from "redux";
import BookingErrorsReducer from "./booking_errors_reducer";
import SessionsErrorReducer from "./session/session_errors_reducer";
import user from './user_errors_reducer';
import review from './review/review_errors_reducer';
import listing from './listing_error_reducer';


const RootReducer = combineReducers({
    booking: BookingErrorsReducer,
    session: SessionsErrorReducer,
    listing,
    user,
    review
});

export default RootReducer;
