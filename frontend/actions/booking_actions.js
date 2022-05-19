import * as BookingUtil from '../util/booking_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';

const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking
})

const receiveBookings = bookings => ({
    type: RECEIVE_BOOKINGS,
    bookings
})

const removeBooking = bookingId => ({
    type: REMOVE_BOOKING,
    bookingId
})

const receiveBookingErrors = errors => ({
    type: RECEIVE_BOOKING_ERRORS,
    errors:errors
})

export const fetchBookings = () => dispatch => {
    return BookingUtil.fetchBookings()
        .then(bookings => dispatch(receiveBookings(bookings)),err => dispatch(receiveBookingErrors(err.responseJSON)))
}

export const fetchBooking = bookingId => dispatch => {
    return BookingUtil.fetchBooking(bookingId)
        .then(booking => dispatch(receiveBooking(booking)),err => dispatch(receiveBookingErrors(err.responseJSON)))
}

export const deleteBooking = bookingId => dispatch => {
    return BookingUtil.deleteBooking(bookingId)
        .then(() => dispatch(removeBooking(bookingId)),err => dispatch(receiveBookingErrors(err.responseJSON)))
}

export const createBooking = booking => dispatch => {
    return BookingUtil.createBooking(booking)
        .then(booking => dispatch(receiveBooking(booking)), err => dispatch(receiveBookingErrors(err.responseJSON)))
}

export const updateBooking = booking => dispatch => {
    return BookingUtil.updateBooking(booking)
        .then(booking => dispatch(receiveBooking(booking)), err => dispatch(receiveBookingErrors(err.responseJSON)))
}