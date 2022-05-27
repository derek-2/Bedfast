export const createBooking = booking => {
    return $.ajax({
        method: 'POST',
        url: '/api/bookings',
        data: {booking}
    })  
}

export const fetchBookings = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/bookings'
    })
}

export const fetchBooking = bookingId => {
    return $.ajax({
        method: 'GET',
        url: `/api/bookings/${bookingId}`
    })
}

export const fetchBookingsByUser = userId => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/bookings`
    })
}

export const deleteBooking = bookingId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/bookings/${bookingId}`
    })
}

export const updateBooking = booking => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/bookings/${booking.id}`,
        data: {booking}
    })
}