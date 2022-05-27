import React from "react";

function isEmptyObj(...objects){
    return objects.every(obj => Object.values(obj).length > 0);
}
const BookingItem = props => {
    const {booking, bookings,users, listings} = props;
    if (!booking || !isEmptyObj(bookings, users, listings)){
        return null;
    } else {
        const guest = users[bookings[booking].guest_id];
        const bookingDetails = bookings[booking];
        return (
            <div className='one-reservation hidden'>
                <p>Guest: {guest.fname} {guest.lname}</p>
                <p>From: {bookingDetails.check_in_date} to {bookingDetails.check_out_date}</p>
            </div>
        )

    }
}
    

export default BookingItem;