import { RECEIVE_LISTING, RECEIVE_LISTINGS, REMOVE_LISTING } from "../actions/listing_actions";


export const ListingsReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_LISTING:
            nextState[action.listing.id]=action.listing;
            return nextState;
        case RECEIVE_LISTINGS:
            action.listings.forEach(listing => nextState[listing.id] = listing)
            return nextState;
        case REMOVE_LISTING:
            delete nextState[action.listingId];
            return nextState;
        default:
            return state;
    }
}

export default ListingsReducer;