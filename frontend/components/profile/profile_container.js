import { connect } from "react-redux";
import Profile from "./profile";
import { fetchListingsByUser, fetchListings } from "../../actions/listing_actions";
import {fetchUsers} from '../../actions/user_actions';
import {fetchBookings, fetchBookingsByUser} from '../../actions/booking_actions';

const mapState = state => ({
    currentUserId: state.session.currentUserId,
    users: state.entities.users,
    bookings: state.entities.bookings,
    listings: state.entities.listings
})

const mapDispatch = dispatch => ({
    fetchListingsByUser: (userId) => dispatch(fetchListingsByUser(userId)),
    fetchBookingsByUser: userId => dispatch(fetchBookingsByUser(userId)),
    fetchBookings: () => dispatch(fetchBookings()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchListings: () => dispatch(fetchListings())
})

export default connect(mapState, mapDispatch)(Profile);