import {connect} from 'react-redux';
import { createListing, fetchListings } from '../../actions/listing_actions';
import NewListing from './new_listing';

const mapState = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    errors: state.errors,
    listings: state.entities.listings
})

const mapDispatch = dispatch => ({
    createListing: (listing) => dispatch(createListing(listing)),
    fetchAllListings: () => dispatch(fetchListings())
})

export default connect(mapState,mapDispatch)(NewListing);