export const fetchReviewsByUser = userId => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/reviews`
    })
};

export const fetchReviewsByListing = listingId => {
    return $.ajax({
        url: `/api/listings/${listingId}/reviews`
    })
};

export const fetchReview = reviewId => {
    return $.ajax({
        url: `/api/reviews/${reviewId}`
    })
};

export const createReview = review => {
    return $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data: review
    })
};

export const updateReview = review => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/reviews/${review.id}`,
        data: review
    })
};

export const deleteReview = reviewId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${reviewId}`
    })
}