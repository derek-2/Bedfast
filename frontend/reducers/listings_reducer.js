import { RECEIVE_LISTING, RECEIVE_LISTINGS, REMOVE_LISTING } from "../actions/listing_actions";


export const ListingsReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_LISTING:
            // debugger;
            return nextState[action.listing.id]=action.listing;
        case RECEIVE_LISTINGS:
            // debugger;
            return Object.assign(nextState, action.listings);
        case REMOVE_LISTING:
            delete nextState[action.listingId];
            return nextState;
        default:
            return state;
    }
}

export default ListingsReducer;