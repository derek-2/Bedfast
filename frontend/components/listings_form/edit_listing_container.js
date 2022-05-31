import { connect } from "react-redux";
import { editListing, fetchListing, fetchListings } from '../../actions/listing_actions';
import EditListingForm from './edit_listing_form';

const mapState = (state,ownProps) => {
    if (state.entities.listings[ownProps.match.params.listingId]){
        return {
            currentUser: state.entities.users[state.session.currentUserId],
            listing:  {
                ...state.entities.listings[ownProps.match.params.listingId],
                errors: []
            },
            formType: 'Update',
            listings: state.entities.listings
        }
    }
    else {
        return {
            currentUser: state.entities.users[state.session.currentUserId],
            formType: 'Update',
            listings: state.entities.listings
        }
    }
}

const mapDispatch = dispatch => ({
    submitForm: (listing) => dispatch(editListing(listing)),
    fetchAllListings: () => dispatch(fetchListings()),
    fetchListing: listingId => dispatch(fetchListing(listingId))
})

export default connect(mapState, mapDispatch)(EditListingForm);