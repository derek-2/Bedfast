import { RECEIVE_REVIEW, RECEIVE_REVIEWS, RECEIVE_REVIEW_ERRORS } from "../../actions/review_actions";

const CreateReviewErrorReducer = (state=[], action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_REVIEW_ERRORS:
            return action.errors;
        case RECEIVE_REVIEW:
            return [];
        case RECEIVE_REVIEWS:
            return [];
        default:
            return state;
    }
}

export default CreateReviewErrorReducer;