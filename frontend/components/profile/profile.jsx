import React from "react";
import { Link } from "react-router-dom";
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
        this.toggleReservations = this.toggleReservations.bind(this);
        this.deleteListing = this.deleteListing.bind(this);
        this.deleteBooking = this.deleteBooking.bind(this);
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

    componentDidUpdate(prevProps, prevState){
        const {listings, bookings, reviews, currentUserId} = this.props;

        const myListings = Object.values(listings).filter(listing => listing.host_id === currentUserId);
        const myBookings = Object.values(bookings).filter(booking => booking.guest_id === currentUserId);
        const myReviews = Object.values(reviews).filter(review => review.guest_id === currentUserId);
        if (Object.values(prevState.myListings).length !== myListings.length && prevState.myListings.length !== 0){
            this.setState({myListings: this.props.listings});
        } else if (Object.values(prevState.myBookings).length !== myBookings.length && prevState.myBookings.length !== 0){
            this.setState({myBookings: this.props.bookings});
        } else if (Object.values(prevState.myReviews).length !== myReviews.length && prevState.myReviews.length !== 0){
            this.setState({myReviews: this.props.reviews})
        }
    }

    toggleReservations(listingId){
        Array.from(document.getElementsByClassName(`listing-${listingId}-reservations`)).forEach(el => el.classList.toggle('hidden'));
    }

    deleteListing(listingId){
        this.props.deleteListing(listingId);
    }

    deleteBooking(bookingId){
        this.props.deleteBooking(bookingId);
    }

    bookings(){
        // currently it is checking the props from container, probably should change it to check this.state.mybookings --> same with listings
        const {myBookings} = this.state;
        const listings = this.state.allListings;
        // debugger
        return Object.values(myBookings).map((booking,idx) => (
            <div className={`my-booking-${idx} my-booking-item`} key={booking.id}>
                <Link className='profile-link' to={`/listings/${booking.listing_id}`}>{listings[booking.listing_id].title}</Link>
                <p>guest id: {booking.guest_id}</p>
                <p>booking: {booking.id}</p>
                <p>From {booking.check_in_date} to {booking.check_out_date}</p>
                <button className='fancy-btn cancel-btn pointer' onClick={() => this.deleteBooking(booking.id)}>Delete Booking</button>
            </div>
        ))
    }

    listings(){
        const {users, currentUserId} = this.props;
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
                    <p>{listing.reviews.length} {listing.reviews.length !== 1 ?'reviews' : 'review'}</p>
                    {currentUserId === listing.host_id ? <p className='profile-link' onClick={() => this.toggleReservations(listing.id)}>{listing.bookings.length} {listing.bookings.length !== 1 ?'reservations' : 'reservation'}</p> : <p>{listing.bookings.length} {listing.bookings.length !== 1 ?'reservations' : 'reservation'}</p>}
                    {listing.bookings.map(bookingId => <BookingItem key={bookingId} users={users} bookingId={bookingId} bookings={bookings} listing={listing} listings={myListings}/>)}
                    <Link to={`/listings/${listing.id}/edit`} className='fancy-btn'>Edit Listing</Link>
                    <button className='fancy-btn cancel-btn pointer' onClick={() => this.deleteListing(listing.id)}>Delete Listing</button>
            </div>
        ))
    }

    reviews(){
        const {myReviews, allListings} = this.state;
        return Object.values(myReviews).map(review => (
            <div className='profile-review' id={`profile-review-${review.id}`} key={review.id}>
                <Link to={`/listings/${review.listing_id}`} className='profile-link'>{allListings[review.listing_id].title}</Link>
                <p>Overall Rating: {Math.floor(review.overall_rating*10)/10}</p>
                <p>Comment: {review.body}</p>

            </div>
        ))

    }
    
    render(){
        const {userId, users, currentUserId} = this.props;
        // console.log(this.state);
        console.log(this.props.listings)
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