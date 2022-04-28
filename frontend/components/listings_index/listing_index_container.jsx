import {connect} from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import ListingsIndex from './listing_index';

const mapState = (state, ownProps) => ({
    listings: state.entities.listings,
    searchParam: ownProps.match.params.searchParam
})

const mapDispatch = dispatch => ({
    fetchListings: (params) => dispatch(fetchListings(params))
})

export default connect(mapState, mapDispatch)(ListingsIndex);