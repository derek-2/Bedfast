import { RECEIVE_REVIEW, RECEIVE_REVIEWS, RECEIVE_UPDATE_REVIEW_ERRORS} from '../../actions/review_actions';

const UpdateReviewErrorReducer = (state=[], action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_UPDATE_REVIEW_ERRORS:
            return action.errors;
        case RECEIVE_REVIEW:
            return [];
        case RECEIVE_REVIEWS:
            return [];
        default:
            return state;
    }
}

export default UpdateReviewErrorReducer;