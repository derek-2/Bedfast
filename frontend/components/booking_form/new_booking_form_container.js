import { connect } from "react-redux";
import NewBookingForm from './new_booking_form';
import createBooking from '../../actions/booking_actions';

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

export default connect(mapState, mapDispatch)(NewBookingForm);