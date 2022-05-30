import { RECEIVE_BOOKING, RECEIVE_BOOKINGS} from "../actions/booking_actions";

const BookingReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_BOOKINGS:
            const newState = {};
            action.bookings.forEach(booking => newState[booking.id]=booking)
            return newState;
        case RECEIVE_BOOKING:
            nextState[action.booking.id] = action.booking
            return nextState;
        default:
            return state;
    }

}

export default BookingReducer;