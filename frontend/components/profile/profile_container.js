import { connect } from "react-redux";
import Profile from "./profile";
import { fetchListingsByUser } from "../../actions/listing_actions";
import {fetchBookingsByUser} from '../../actions/booking_actions';

const mapState = state => ({
    currentUserId: state.session.currentUserId,
    users: state.entities.users,
    bookings: state.entities.bookings,
    listings: state.entities.listings
})

const mapDispatch = dispatch => ({
    fetchListingsByUser: (userId) => dispatch(fetchListingsByUser(userId)),
    fetchBookingsByUser: userId => dispatch(fetchBookingsByUser(userId))
})

export default connect(mapState, mapDispatch)(Profile);