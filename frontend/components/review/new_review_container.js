import { connect } from "react-redux";
import NewReviewForm from './new_review_form';
import { createReview } from "../../actions/review_actions";

const mapState = (state,ownProps) => {
    return {
        currentUserId: state.session.currentUserId,
        formType: 'Create',
        review: {
            listing_id: ownProps.match.params.listingId,
            guest_id: state.session.currentUserId,
            body: '',
            overall_rating: 0,
            cleanliness: 0,
            accuracy: 0,
            communication: 0,
            location: 0,
            check_in: 0,
            value: 0
        },
        errors: state.errors.review.create
    }
}

const mapDispatch = dispatch => {
    return {
        submitForm: review => dispatch(createReview(review))
    }
}

export default connect(mapState, mapDispatch)(NewReviewForm);