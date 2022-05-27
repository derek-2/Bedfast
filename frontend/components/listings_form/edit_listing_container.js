import { connect } from "react-redux";
import { editListing, fetchListings } from '../../actions/listing_actions';
import EditListingForm from './edit_listing_form';

const mapState = (state,ownProps) => {
    return {
        listing:  state.entities.listings[ownProps.match.params.listingId],
        formType: 'Edit',
        listings: state.entities.listings
    }
}

const mapDispatch = dispatch => ({
    submitForm: (listing) => dispatch(editListing(listing)),
    fetchAllListings: () => dispatch(fetchListings())
})

export default connect(mapState, mapDispatch)(EditListingForm);