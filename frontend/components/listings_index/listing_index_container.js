import {connect} from 'react-redux';
import { clearListings, fetchListings } from '../../actions/listing_actions';
import ListingsIndex from './listing_index';
import {fetchReviewsByListing} from '../../actions/review_actions';

const mapState = (state, ownProps) => {
    return{
        listings: state.entities.listings,
        searchParam: ownProps.match.params.location,
        reviews: state.entities.reviews
    }
}
//:city is from url

const mapDispatch = dispatch => ({
    fetchListings: (searchParams, guests) => dispatch(fetchListings(searchParams, guests)),
    clearListings: () => dispatch(clearListings()),
    fetchReviewsByListing:  listingId => dispatch(fetchReviewsByListing(listingId)),
    fetchReviews: () => dispatch(fetchReviews())
})

export default connect(mapState, mapDispatch)(ListingsIndex);