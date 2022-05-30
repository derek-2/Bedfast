import {connect} from 'react-redux';
import { createListing, fetchListings } from '../../actions/listing_actions';
import NewListingForm from './new_listing_form';

const mapState = state => {
    const latitude = (Math.random()*(40.795199-40.704868))+40.704868;
    const longitude = (Math.random()*(-73.933641+74.017313))-74.017313;
    return {
        currentUser: state.entities.users[state.session.currentUserId],
        errors: state.errors,
        formType: 'Create',
        listings: state.entities.listings,
        listing: {
            title: '',
            description: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            latitude,
            longitude,
            max_num_guests: '',
            num_beds: '',
            num_baths: '',
            price_per_night: '',
            photos: [],
            previewPhotos:[],
            errors:[]
        }
    }
}

const mapDispatch = dispatch => ({
    submitForm: (listing) => dispatch(createListing(listing)),
    fetchAllListings: () => dispatch(fetchListings())
})

export default connect(mapState,mapDispatch)(NewListingForm);