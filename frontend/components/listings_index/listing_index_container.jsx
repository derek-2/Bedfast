import {connect} from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import ListingsIndex from './listing_index';

const mapState = (state, ownProps) => {
    // debugger;

    return{
        listings: state.entities.listings,
        searchParam: ownProps.match.params.city
    }
}
//:city is from url

const mapDispatch = dispatch => ({
    fetchListings: (searchParams) => dispatch(fetchListings(searchParams))
})

export default connect(mapState, mapDispatch)(ListingsIndex);