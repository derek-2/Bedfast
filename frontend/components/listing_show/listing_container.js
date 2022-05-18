import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import Listing from './listing';

const mapState = (state, ownProps) => {
    return {
        listing: state.entities.listings[ownProps.match.params.listingId]
    }
}

const mapDispatch = dispatch => {
    return {
        fetchListing: (listingId) => dispatch(fetchListing(listingId))
    }
}

export default connect(mapState, mapDispatch)(Listing);