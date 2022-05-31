import { connect } from "react-redux";
import EditReviewForm from './edit_review_form';
import { fetchReview, updateReview } from "../../actions/review_actions";

const mapState = (state,ownProps) => {
    debugger
    return {
        currentUserId: state.session.currentUserId,
        formType: 'Update',
        review: state.entities.reviews[ownProps.reviewId]
    }
}

const mapDispatch = dispatch => {
    return {
        submitForm: review => dispatch(updateReview(review)),
        fetchReview: reviewId => dispatch(fetchReview(reviewId))
    }
}

export default connect(mapState, mapDispatch)(EditReviewForm);