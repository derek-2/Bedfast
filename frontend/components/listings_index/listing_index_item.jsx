import React from 'react';
import { Link } from 'react-router-dom';

export default class ListingIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state={myReviews:[]}
    }

    componentDidMount(){
        const {fetchReviewsByListing, listing, reviews} = this.props;
        fetchReviewsByListing(listing.id)
            .then((reviews) => this.setState({myReviews: reviews.reviews}))
    }


    render(){
        const {id, title, description, address, city, state, zipcode, max_num_guests, num_beds, num_baths, price_per_night, photoUrls } = this.props.listing;
        const allReviews = this.state.myReviews;
        let total = 0;

        allReviews.forEach(review => total+=review.overall_rating);
        const avgRating = Math.floor(total*10/allReviews.length)/10;
        const numRatings = allReviews.length;
        return(
            <div>
            <hr className='bigger-separator'/>
            <Link to={`/listings/${id}`}>
                <div className='listing-index-item' id={`listing-${id}`}>
                    <img className='listing-images' src={photoUrls[0]} alt="photo" />
                    <div className='listings-index-text-container'>
                            <p >{description}</p>
                            <p className='title'>{title}</p>
                            <hr className='separator' />
                        <div className='item-details'>
                            <p>{max_num_guests}{max_num_guests>1 ? ' guests ·' : ' guest ·' }</p>&nbsp;
                            <p>{num_beds}{num_beds>1 ? ' beds ·' : ' bed ·' }</p>&nbsp;
                            <p>{num_baths}{num_baths>1 ? ' baths' : ' bath' }</p>
                        </div>
                        <div>
                            <div className='reviews'>&#9733; {Number.isNaN(avgRating) ? <>?/5 (No reviews yet)</> : <>{avgRating}/5 ({numRatings} reviews)</>}</div>
                            <div className='price'>   <b>{`$${price_per_night}`}</b>&nbsp;night</div>
                        </div>
                    </div>
                </div>
            </Link>
            </div>
    )
    }
}