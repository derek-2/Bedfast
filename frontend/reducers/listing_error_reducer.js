import {RECEIVE_LISTING_ERRORS, RECEIVE_LISTING, RECEIVE_LISTINGS } from '../actions/listing_actions';

const ListingErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_LISTING_ERRORS:
            return action.errors;
        case RECEIVE_LISTING:
            return [];
        case RECEIVE_LISTINGS:
            return [];
        default:
            return state;
    }
}

export default ListingErrorsReducer;