import { connect } from "react-redux";
import Profile from "./profile";
import { fetchListingsByUser, fetchListings, deleteListing } from "../../actions/listing_actions";
import {fetchUsers} from '../../actions/user_actions';
import {fetchBookings, fetchBookingsByUser, deleteBooking} from '../../actions/booking_actions';
import {fetchReviewsByUser} from '../../actions/review_actions';

const mapState = (state,ownProps) => ({
    currentUserId: state.session.currentUserId,
    userId: ownProps.match.params.userId,
    users: state.entities.users,
    bookings: state.entities.bookings,
    listings: state.entities.listings,
    reviews: state.entities.reviews
})

const mapDispatch = dispatch => ({
    fetchListingsByUser: (userId) => dispatch(fetchListingsByUser(userId)),
    fetchBookingsByUser: userId => dispatch(fetchBookingsByUser(userId)),
    fetchBookings: () => dispatch(fetchBookings()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchListings: () => dispatch(fetchListings()),
    fetchReviewsByUser: userId => dispatch(fetchReviewsByUser(userId)),
    deleteListing: listingId => dispatch(deleteListing(listingId)),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId))
})

export default connect(mapState, mapDispatch)(Profile);