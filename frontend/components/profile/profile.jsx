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
            myReviews: [],
            allBookings: [],
            allListings: []
        };
    }

    componentDidMount(){
        const {userId, users, bookings, listings, fetchListingsByUser, fetchBookingsByUser, fetchUsers, fetchBookings, fetchListings, fetchReviewsByUser} = this.props;

        fetchUsers()
            .then(() => fetchBookings())
            .then(() => fetchListings().then(() => this.setState({
                allListings: this.props.listings,
                allBookings: this.props.bookings})))
            .then(() => fetchListingsByUser(userId))
            .then(() => fetchBookingsByUser(userId))
            .then(() => fetchReviewsByUser(userId))
            .then(() => this.setState({
                myListings: this.props.listings,
                myBookings: this.props.bookings,
                myReviews: this.props.reviews}))

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
                <Link className='profile-link' to={`/listings/${booking.listing_id}`}>{listings[booking.listing_id].title}</Link>
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
            <div className={`my-listing-${idx} my-listing-item`} key={listing.id}>
                <Link to={`/listings/${listing.id}`}>
                    <img src={listing.photoUrls[0]} alt={listing.description} />
                </Link>
                    <p>{listing.title}</p>
                    <p>{listing.address} {listing.city}, {listing.state} {listing.zipcode}</p>
                    <p>{listing.created_at}</p>
                    <p>{listing.updated_at}</p>
                    <p>{listing.bookings.length} {listing.bookings.length !== 1 ?'reservations' : 'reservation'}</p>
                    <p>{listing.reviews.length} {listing.reviews.length !== 1 ?'reviews' : 'review'}</p>
                    {listing.bookings.map(bookingId => <BookingItem key={bookingId} users={users} bookingId={bookingId} bookings={bookings} listings={myListings}/>)}
            </div>
        ))
    }

    reviews(){
        const {myReviews, allListings} = this.state;
        return Object.values(myReviews).map(review => (
            <div className='profile-review' id={`profile-review-${review.id}`} key={review.id}>
                <Link to={`/listing/${review.listing_id}`} className='profile-link'>{allListings[review.listing_id].title}</Link>
                <p>Overall Rating: {Math.floor(review.overall_rating*10)/10}</p>
                <p>Comment: {review.body}</p>

            </div>
        ))

    }
    
    render(){
        const {userId, users, currentUserId} = this.props;
        console.log(this.state);

        // debugger
        if (users[userId]){
            return (
                <div>
                    <p>Hi, {users[userId].fname}!</p>
                    <p>Joined in {users[userId].created_at} </p>
                    
                    <p>we in da profile component</p>
                    <div className='my-listings'>
                        <h1>My Listings:</h1>
                        {this.listings()}
                    </div>
                    {currentUserId === parseInt(userId) ? 
                        <>
                            <div className='my-bookings'>
                                <h1>My Bookings:</h1>
                                {this.bookings()}
                            </div> 
                            <div className='my-reviews'>
                                <h1>My Reviews:</h1>
                                {this.reviews()}
                            </div>
                        </>
                    : <></>}
                </div>
            )
        } else {
            return <>This user doesn't exist!</>
        }
    }
}