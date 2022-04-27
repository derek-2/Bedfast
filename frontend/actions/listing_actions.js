import * as ListingsApiUtil from '../util/listings_api_util';

export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const REMOVE_LISTING = 'REMOVE_LISTING';
export const RECEIVE_LISTING_ERRORS = 'RECEIVE_LISTING_ERRORS';

const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
})

const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings
})

const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
})

const receiveListingErrors = errors => ({
    type: RECEIVE_LISTING_ERRORS,
    errors
})

export const createListing = listing => dispatch => {
    return ListingsApiUtil.createListing(listing).then(listing =>dispatch(receiveListing(listing)), err => dispatch(receiveListingErrors(err.responseJSON)))
}

export const editListing = listing => dispatch => {
    return ListingsApiUtil.editListing(listing).then(listing => dispatch(receiveListing(listing)),err => dispatch(receiveListingErrors(err.responseJSON)))
}

export const fetchListing = listingId => dispatch => {
    return ListingsApiUtil.fetchListing(listingId).then(listing => dispatch(receiveListing(listing)), err => dispatch(receiveListingErrors(err.responseJSON)))
}

export const fetchListings = () => dispatch => {
    return ListingsApiUtil.fetchListings().then(listings => dispatch(receiveListings()), err => dispatch(receiveListingErrors(err.responseJSON)))
}

export const deleteListing = listingId => dispatch => {
    return ListingsApiUtil.deleteListing(listingId).then(res => dispatch(removeListing(listingId)), err => dispatch(receiveListingErrors(err.responseJSON)))
}