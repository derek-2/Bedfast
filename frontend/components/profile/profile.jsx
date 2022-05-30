import React from "react";
import { Link } from "react-router-dom";
import { fetchBookings } from "../../util/booking_util";
import BookingItem from './booking_item';

export default class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            myBookings: [],
            myListings: [],
            allBookings: [],
            allListings: []
        };
    }

    componentDidMount(){
        const {currentUserId, users, bookings, listings, fetchListingsByUser, fetchBookingsByUser, fetchUsers, fetchBookings, fetchListings} = this.props;
        fetchUsers()
            .then(() => fetchBookings().then(() => this.setState({allBookings:this.props.bookings})))
            .then(() => fetchListings().then(() => this.setState({allListings: this.props.listings})))
            .then(() => fetchListingsByUser(currentUserId))
            .then(() => fetchBookingsByUser(currentUserId))
            .then(() => this.setState({myListings: this.props.listings}))
            .then(() => this.setState({myBookings: this.props.bookings}))


        // fetchListingsByUser(currentUserId)
        //     .then(() => fetchUsers())
        //     .then(() => fetchBookings().then(() => this.setState({allBookings:this.props.bookings})))
        //     .then(() => fetchListings().then(() => this.setState({allListings: this.props.listings})))
        //     .then(() => fetchBookingsByUser(currentUserId))
        //     .then(() => this.setState({myListings: this.props.listings}))
        //     .then(() => this.setState({myBookings: this.props.bookings}))
    }

    bookings(){
        // currently it is checking the props from container, probably should change it to check this.state.mybookings --> same with listings
        const {myBookings} = this.state;
        const listings = this.state.allListings;
        return Object.values(myBookings).map((booking,idx) => (
            <div className={`my-booking-${idx} my-booking-item`} key={booking.id}>
            <Link to={`/listings/${booking.listing_id}`}>{listings[booking.listing_id].title} Click me!!1!</Link>
            <p>guest id: {booking.guest_id}</p>
            <p>From {booking.check_in_date} to {booking.check_out_date}</p>
            </div>
        ))
    }

    listings(){
        const {users} = this.props;
        const bookings = this.state.allBookings;
        const {myListings} = this.state;
        // debugger
        return Object.values(myListings).map((listing, idx) => (
            <Link to={`/listings/${listing.id}`}>
                <div className={`my-listing-${idx} my-listing-item`}key={listing.id}>
                    <img src={listing.photoUrls[0]} alt={listing.description} />
                    <p>{listing.title}</p>
                    <p>{listing.address} {listing.city}, {listing.state} {listing.zipcode}</p>
                    <p>{listing.created_at}</p>
                    <p>{listing.updated_at}</p>
                    <p>{listing.bookings.length} reservations</p>
                    {listing.bookings.map(bookingId => <BookingItem key={bookingId} users={users} bookingId={bookingId} bookings={bookings} listings={myListings}/>)}
                </div>
            </Link>
        ))
    }
    
    render(){
        const {currentUserId, users} = this.props;
        console.log(this.state);
        return (
            <div>
                <p>Hi, {users[currentUserId].fname}!</p>
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