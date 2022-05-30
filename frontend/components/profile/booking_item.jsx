import React from "react";

function isEmptyObj(...objects){
    return objects.every(obj => Object.values(obj).length > 0);
}
const BookingItem = props => {
    const {bookingId, bookings,users, listings} = props;
    if (!bookingId || !isEmptyObj(bookings, users, listings)){
        return null;
    } else {
        const guest = users[bookings[bookingId].guest_id];
        const bookingDetails = bookings[bookingId];
        return (
            <div className='one-reservation hidden'>
                <p>Guest: {guest.fname} {guest.lname}</p>
                <p>From: {bookingDetails.check_in_date} to {bookingDetails.check_out_date}</p>
            </div>
        )

    }
}
    

export default BookingItem;