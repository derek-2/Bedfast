import React from "react";
import Map from '../map/map';
import NewBookingFormContainer from "../booking_form/new_booking_form_container";
import NewReviewContainer from "../review/new_review_container";
import ReviewsIndex from '../review/reviews_index';
import {FaStar} from 'react-icons/fa';
import { Link } from "react-router-dom";

export default class Listing extends React.Component{
    constructor(props){
        super(props);
        this.state={
            overallRating: 0
        }

        this.overallRating = this.overallRating.bind(this);
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId)
            .then(() => this.props.fetchUsers())
            .then(() => this.props.fetchReviewsByListing(this.props.match.params.listingId))
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.listingId !== this.props.match.params.listingId){
            this.props.fetchListing(this.props.match.params.listingId)
                .then(() => this.props.fetchReviewsByListing(this.props.match.params.listingId))
                .then(() => this.props.fetchUsers());
        }
    }

    overallRating(){
        let total = 0;
        const reviews = Object.values(this.props.reviews);
        reviews.forEach(review => total+=review.overall_rating);
        return (
            <>
             <FaStar /> {Math.round(total*10/reviews.length)/10} · {reviews.length} reviews
            </>
        )
    }

    render(){
        console.log(this.props.listing)
        console.log(this.props.reviews)
        if (this.props.listing && Object.values(this.props.listing).length > 0){ 
            const {host_name, address, city, description, host_id, id, max_num_guests, num_baths, num_beds, price_per_night, state, title, zipcode, photoUrls} = this.props.listing;
            const allPhotos = (
                <>
                {this.overallRating()}
                <div className='photos-container'>
                    <div>
                        <img src={photoUrls[0]} alt="photo1" />
                    </div>
                    <div className='photos-div'>
                        <img src={photoUrls[1]} alt="photo2" />
                        <img src={photoUrls[2]} alt="photo3" />
                    </div>
                    <div className='photos-div'>
                        <img src={photoUrls[3]} alt="photo4" />
                        <img src={photoUrls[4]} alt="photo5" />
                    </div>
                </div>
                </>
            );
            return (
                <div className='container'>
                    <p>{title} by <Link className='profile-link' to={`/profile/${host_id}`}>{host_name}</Link></p>
                    <p>{city},{state}</p>
                    {allPhotos}
                    <div className='listing-show-container'>
                        <div className='listing-info'>
                            {title}
                            <p>{city}, {state}</p>
                            <p>{max_num_guests} guests · {num_beds} beds · {num_baths} baths</p>
                            {description}
                            <p>Lorem ipsum dolor sit amet. Est sint neque nam sapiente laboriosam eos dignissimos nostrum vel maiores voluptatem non eligendi maiores sed maiores distinctio. Sed officia quibusdam eum architecto repellat non rerum facere ut deserunt ipsa et galisum dicta sit fugiat maiores. </p><p>Vel cumque consequatur cum nostrum deleniti rem dolor consequatur. Qui vero consequatur in quibusdam quaerat qui necessitatibus labore At doloribus reiciendis ut quia voluptas? </p><p>Ab expedita dolorem ut deleniti animi qui placeat dolor aut dolor Quis et unde adipisci eos nihil unde. In beatae saepe ut dolorem quaerat est illo dolores vel provident cupiditate. </p>

                            <hr className='listing-show-separator' />
                            <div className='placeholder-info-wrap'>
                                <img src={window.door} alt="door!" /> 
                                <div className='placeholder-info-text'>
                                    <div>
                                        <b>Self check-in</b>
                                    </div>
                                    <div>
                                        Check yourself in with the lockbox.
                                    </div>
                                </div>
                            </div>
                            <div className='placeholder-info-wrap'>
                                <img src={window.key} alt="key!" /> 
                                <div className='placeholder-info-text'>
                                    <div>
                                        <b>Great check-in experience</b>
                                    </div>
                                    <div>
                                        90% of recent guests gave the check-in process a 5-star rating.
                                    </div>
                                </div>
                            </div>
                            <div className='placeholder-info-wrap'>
                                <img src={window.calendar} alt="calendar!" /> 
                                <div className='placeholder-info-text'>
                                    <div>
                                        <b>Free cancellation for 48 hours.</b>
                                    </div>

                                </div>
                            </div>


                            {/* <p>&lt;Booking Form&gt;</p> */}
                        </div>
                            <NewBookingFormContainer listingId={id} price={price_per_night}/>
                        </div>
                    <ReviewsIndex reviews={this.props.reviews} users={this.props.users} currentUserId={this.props.currentUserId} deleteReview={this.props.deleteReview} />
                    <br />
                    <br />
                    <NewReviewContainer match={this.props.match}/>
                    <br />
                    <br />
                    <p>Where you'll be</p>
                    <hr className='listing-show-separator' />
                    <Map listings={[this.props.listing]}/>
                </div>
        )}
        else {
            return(<></>)
        }
    }
}