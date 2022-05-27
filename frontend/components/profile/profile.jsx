import React from "react";
import { Link } from "react-router-dom";

export default class Profile extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {currentUserId, users, bookings, listings, fetchListingsByUser, fetchBookingsByUser} = this.props;
        fetchListingsByUser(currentUserId).then(() => fetchBookingsByUser(currentUserId));
    }

    bookings(){
        const {bookings, listings} = this.props;
        return Object.values(bookings).map((booking,idx) => (
            <div className={`my-booking-${idx} my-booking-item`} key={booking.id}>
            <Link to={`/listings/${booking.listing_id}`}>{listings[booking.listing_id].title} Click me!!1!</Link>
            <p>From {booking.check_in_date} to {booking.check_out_date}</p>
            </div>
        ))
    }

    listings(){
        const {listings} = this.props;
        return Object.values(listings).map((listing, idx) => (
            <div className={`my-listing-${idx} my-listing-item`}key={listing.id}>
                <p>{listing.title}</p>
                <p>{listing.address} {listing.city}, {listing.state} {listing.zipcode}</p>
                <p>{listing.created_at}</p>
                <p>{listing.updated_at}</p>
                <p>{listing.bookings.length} reservations</p>
            </div>
        ))
    }
    
    render(){
        const {currentUserId, users} = this.props;
        return (
            <div>
                <p>Hi, {users[currentUserId].email}!</p>
                <p>Joined in {users[currentUserId].created_at} </p>
                
                <p>we in da profile component</p>
                <div className='my-listings'>
                    <h1>My Listings:</h1>
                    {this.listings()}
                </div>
                <div className='my-bookings'>
                    <h1>My Bookings:</h1>
                    {this.bookings()}
                </div>
            </div>
        )
    }
}