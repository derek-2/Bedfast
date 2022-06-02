import { combineReducers } from "redux";
import CreateReviewErrorReducer from "./create_review_error_reducer";
import UpdateReviewErrorReducer from "./update_review_error_reducer";
import GeneralReviewErrorReducer from './general_review_errors_reducer';

const ReviewsErrorReducer = combineReducers({
    general: GeneralReviewErrorReducer,
    create: CreateReviewErrorReducer,
    update: UpdateReviewErrorReducer
});

export default ReviewsErrorReducer;