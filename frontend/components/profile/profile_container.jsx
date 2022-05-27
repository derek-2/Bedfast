import { connect } from "react-redux";
import Profile from "./profile";

const mapState = state => ({
    currentUserId: state.session.currentUserId,
    users: state.entities.users,
    bookings: state.entities.bookings,
    listings: state.entities.listings
})

const mapDispatch = dispatch => ({
    
})

export default connect(mapState, mapDispatch)(Profile);