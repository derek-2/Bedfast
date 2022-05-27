import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NewBookingForm from './new_booking_form';
import {createBooking} from '../../actions/booking_actions';

const mapState = (state, ownProps) => {
    return {
        currentUserId: state.entities.users[state.session.currentUserId].id
    }
}

const mapDispatch = dispatch => {
    return {
        createBooking: (booking) => dispatch(createBooking(booking))
    }
}

export default withRouter(connect(mapState, mapDispatch)(NewBookingForm));