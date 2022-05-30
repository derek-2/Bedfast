import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = props => {
    const {id, title, description, address, city, state, zipcode, max_num_guests, num_beds, num_baths, price_per_night, photoUrls } = props.listing;
    return(
        <Link to={`/listings/${id}`}>
            <div className='listing-index-item' id={`listing-${id}`}>
                <img className='listing-images' src={photoUrls[0]} alt="photo" />
                {/* <img src={window.placeholder} alt="photo" /> */}
                <div className='listings-index-text-container'>
                    {/* at some point, i'll need the average review score of a listing using an association in the fetch request in the listings controller */}
                        <p >{description}</p>
                        <p className='title'>{title}</p>
                        <hr className='separator' />
                    <div className='item-details'>
                        <p>{max_num_guests}{max_num_guests>1 ? ' guests ·' : ' guest ·' }</p>&nbsp;
                        <p>{num_beds}{num_beds>1 ? ' beds ·' : ' bed ·' }</p>&nbsp;
                        <p>{num_baths}{num_baths>1 ? ' baths' : ' bath' }</p>
                        <div className='reviews'> &#9733;-5/5 (999 reviews)</div>
                        <div className='price'>   <b>{`$${price_per_night}`}</b>&nbsp;night</div>
                    </div>
                </div>
            </div>
        </Link>
    )

}

export default ListingIndexItem;