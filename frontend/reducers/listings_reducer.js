import { CLEAR_LISTINGS, RECEIVE_LISTING, RECEIVE_LISTINGS, REMOVE_LISTING } from "../actions/listing_actions";


export const ListingsReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_LISTINGS:
            const newState = {};
            action.listings.forEach(listing => newState[listing.id] = listing)
            return newState;
        case RECEIVE_LISTING:
            nextState[action.listing.id]=action.listing;
            return nextState;
        case CLEAR_LISTINGS:
            return {};
        case REMOVE_LISTING:
            delete nextState[action.listingId];
            return nextState;
        default:
            return state;
    }
}

export default ListingsReducer;