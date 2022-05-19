import BookingErrorsReducer from "./booking_errors_reducer";
import SessionsErrorReducer from "./session_errors_reducer";
import { combineReducers } from "redux";


const RootReducer = combineReducers({
    booking: BookingErrorsReducer,
    session: SessionsErrorReducer
});

export default RootReducer;
