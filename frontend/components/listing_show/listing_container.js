import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import { deleteReview, fetchReviewsByListing } from '../../actions/review_actions';
import {fetchUsers} from '../../actions/user_actions';
import Listing from './listing';

const mapState = (state, ownProps) => {
    debugger
    return {
        listing: state.entities.listings[ownProps.match.params.listingId],
        reviews: state.entities.reviews,
        users: state.entities.users,
        currentUserId: state.session.currentUserId
    }
}

const mapDispatch = dispatch => {
    return {
        fetchListing: (listingId) => dispatch(fetchListing(listingId)),
        fetchReviewsByListing: listingId => dispatch(fetchReviewsByListing(listingId)),
        fetchUsers: () => dispatch(fetchUsers()),
        deleteReview: reviewId => dispatch(deleteReview(reviewId))
    }
}

export default connect(mapState, mapDispatch)(Listing);