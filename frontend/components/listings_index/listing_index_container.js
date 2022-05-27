import {connect} from 'react-redux';
import { clearListings, fetchListings } from '../../actions/listing_actions';
import ListingsIndex from './listing_index';

const mapState = (state, ownProps) => {
    return{
        listings: state.entities.listings,
        searchParam: ownProps.match.params.city
    }
}
//:city is from url

const mapDispatch = dispatch => ({
    fetchListings: (searchParams, guests) => dispatch(fetchListings(searchParams, guests)),
    clearListings: () => dispatch(clearListings())
})

export default connect(mapState, mapDispatch)(ListingsIndex);