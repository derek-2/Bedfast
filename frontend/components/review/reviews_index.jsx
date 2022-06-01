import React from "react";
import EditReviewContainer from './edit_review_container';

export default class ReviewsIndex extends React.Component{
    constructor(props){
        super(props);
        this.renderEditReviewForm = this.renderEditReviewForm.bind(this);
        this.render = this.render.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    renderEditReviewForm(reviewId){
        return <EditReviewContainer reviewId={reviewId} />
    }

    toggleEdit(num){
        return e => {
            e.preventDefault();
            document.getElementById(`edit-review-wrap-${num}`).classList.toggle('hidden');
        }
    }

    handleDelete(num){
        return e => {
            e.preventDefault();
            console.log(num);
            this.props.deleteReview(num);
        }
    }

    render(){
        const allReviews = Object.values(this.props.reviews);
        const {users} = this.props;
        let renderReviews = [];

        if (Object.values(this.props.users).length > 0){
            renderReviews = allReviews.map(review => {
                debugger
                return (
                    <>
                        <div className='review-container' id={`review-${review.id}`} key={review.id}>
                            <p>{users[review.guest_id].fname} {users[review.guest_id].lname}</p>
                            <p>{review.body}</p>
                            {this.props.currentUserId === review.listing_id ? 
                            <><button onClick={this.toggleEdit(review.id)}>Edit</button><button onClick={this.handleDelete(review.id)}>Delete</button> </>:
                             <></>}
                        </div>
                        {this.renderEditReviewForm(review.id)}
                    </>
                )
            })
        }
        let cleanliness, communication, check_in, accuracy, location, value;
        cleanliness = communication = check_in = accuracy = location = value = 0;
        allReviews.forEach(review => {
            cleanliness+=review.cleanliness
            communication+=review.communication
            check_in+=review.check_in
            accuracy+=review.accuracy
            location+=review.location
            value+=review.value
        })

        const avgCleanliness = Math.round(10*cleanliness/allReviews.length)/10;
        const avgCommunication = Math.round(10*communication/allReviews.length)/10;
        const avgCheckIn = Math.round(10*check_in/allReviews.length)/10;
        const avgAccuracy = Math.round(10*accuracy/allReviews.length)/10;
        const avgLocation = Math.round(10*location/allReviews.length)/10;
        const avgValue = Math.round(10*value/allReviews.length)/10;
        if (avgCleanliness){
            return (
                <>
                <div className='review-avg-container'>
                    {/* `width=${avgCleanliness/5*100}%` */}
                    <div className='review-half'>
                        <div className='review-avg'>
                            <p>Cleanliness</p>
                            <div className='testing-container'>
                                <div className='testing'></div>
                                <div className='testing testing1'></div>
                                <div style={{width:`${avgCleanliness/5*100}%`}} className='testing testing2'></div>
                            </div>
                            <p>{avgCleanliness}</p>
                        </div>
                        <div className='review-avg'>
                            <p>Communication</p>
                            <div className='testing-container'>
                                <div className='testing'></div>
                                <div className='testing testing1'></div>
                                <div style={{width:`${avgCommunication/5*100}%`}} className='testing testing2'></div>
                            </div>
                            <p>{avgCommunication}</p>
                        </div>
                        <div className='review-avg'>
                            <p>Check in</p>
                            <div className='testing-container'>
                                <div className='testing'></div>
                                <div className='testing testing1'></div>
                                <div style={{width:`${avgCheckIn/5*100}%`}} className='testing testing2'></div>
                            </div>
                            <p>{avgCheckIn}</p>
                        </div>
                    </div>
                    <div className='review-half'>
                        <div className='review-avg'>
                            <p>Accuracy </p>
                            <div className='testing-container'>
                                <div className='testing'></div>
                                <div className='testing testing1'></div>
                                <div style={{width:`${avgAccuracy/5*100}%`}} className='testing testing2'></div>
                            </div>
                            <p>{avgAccuracy}</p>
                        </div>
                        <div className='review-avg'>
                            <p>Location</p>
                            <div className='testing-container'>
                                <div className='testing'></div>
                                <div className='testing testing1'></div>
                                <div style={{width:`${avgLocation/5*100}%`}} className='testing testing2'></div>
                            </div>
                            <p>{avgLocation}</p>
                        </div>
                        <div className='review-avg'>
                            <p>Value</p>
                            <div className='testing-container'>
                                {/* <div className='testing'></div> */}
                                <div className='testing'></div>
                                <div className='testing testing1'></div>
                                <div style={{width:`${avgValue/5*100}%`}} className='testing testing2'></div>
                            </div>
                            <p>{avgValue}</p>
                        </div>
                    </div>
                </div>
                <br />
                    <p>Reviews:</p><br />
                    <div className='reviews-index'>
                        {renderReviews}
                    </div>
                    </>
            )
        } else { return null}
    }
}