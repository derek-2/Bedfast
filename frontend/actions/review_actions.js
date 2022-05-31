import * as ReviewAPIUtil from '../util/review_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
});

const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

export const fetchReviewsByUser = userId => dispatch => {
    return ReviewAPIUtil.fetchReviewsByUser(userId)
        .then(reviews => dispatch(receiveReviews(reviews)))
        .fail(err => {
            debugger
            return dispatch(receiveReviewErrors(err.responseJSON))
    })
};

export const fetchReviewsByListing = listingId => dispatch => {
    return ReviewAPIUtil.fetchReviewsByListing(listingId)
        .then(reviews => dispatch(receiveReviews(reviews)),
        err => dispatch(receiveReviewErrors(err.responseJSON)))
};

export const fetchReview = reviewId => dispatch => {
    return ReviewAPIUtil.fetchReview(reviewId)
        .then(review => dispatch(receiveReview(review)),
        err => dispatch(receiveReviewErrors(err)))
}

export const createReview = review => dispatch => {
    return ReviewAPIUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)),
        err => dispatch(receiveReviewErrors(err)))
};

export const updateReview = review => dispatch => {
    return ReviewAPIUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)),
        err => dispatch(receiveReviewErrors(err.responseJSON)))
};

export const deleteReview = reviewId => dispatch => {
    return ReviewAPIUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)),
        err => dispatch(receiveReviewErrors(err.reponseJSON)))
}