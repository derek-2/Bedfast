export const createListing = listing => {
    return $.ajax({
        method: 'POST',
        url: '/api/listings',
        data: listing,
        contentType: false,
        processData: false
    })
}

export const editListing = listing => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/listings/${listing.get('listing[id]')}`,
        data: listing,
        contentType: false,
        processData: false
    })
}

export const fetchListing = listingId => {
    return $.ajax({
        method: 'GET',
        url: `/api/listings/${listingId}`
    })
}

export const fetchListings = (searchParams, guests) => {
    return $.ajax({
        method: 'GET',
        url: `/api/listings/?searchParams=${searchParams}&guests=${guests}`,
    })
}

export const fetchListingsByUser = userId => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/listings`
    })
}

export const deleteListing = listingId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/listings/${listingId}`
    })
}

export const getPos = location => {
    return $.ajax({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.GEOCODING_KEY}`
    })
}