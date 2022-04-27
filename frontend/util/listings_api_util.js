export const createListing = listing => {
    return $.ajax({
        method: 'POST',
        url: '/api/listings',
        data: {listing}
    })
}

export const editListing = listing => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/listings/${listing.id}`,
        data: {listing}
    })
}

export const fetchListing = listingId => {
    return $.ajax({
        method: 'GET',
        url: `/api/listings/${listingId}`
    })
}

export const fetchListings = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/listings'
    })
}

export const deleteListing = listingId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/listings/${listingId}`
    })
}