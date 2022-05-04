import {connect} from 'react-redux';
import { createListing } from '../../actions/listing_actions';
import NewListing from './new_listing';

const mapState = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    errors: state.errors
})

const mapDispatch = dispatch => ({
    createListing: (listing) => dispatch(createListing(listing))
})

export default connect(mapState,mapDispatch)(NewListing);