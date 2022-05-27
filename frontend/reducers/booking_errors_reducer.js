import {RECEIVE_BOOKING_ERRORS, RECEIVE_BOOKING, RECEIVE_BOOKINGS } from '../actions/booking_actions';

const BookingErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BOOKING_ERRORS:
            return action.errors;
        case RECEIVE_BOOKING:
            return [];
        case RECEIVE_BOOKINGS:
            return [];
        default:
            return state;
    }

}

export default BookingErrorsReducer;