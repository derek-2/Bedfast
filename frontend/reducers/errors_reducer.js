import { combineReducers } from "redux";
import BookingErrorsReducer from "./booking_errors_reducer";
import SessionsErrorReducer from "./session_errors_reducer";
import user from './user_errors_reducer';
import review from './review_errors_reducer';


const RootReducer = combineReducers({
    booking: BookingErrorsReducer,
    session: SessionsErrorReducer,
    user,
    review
});

export default RootReducer;
