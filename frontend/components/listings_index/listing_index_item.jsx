import React from 'react';

const ListingIndexItem = props => {
    // const {listing} = props;
    debugger;
    return(
        <div>
            <p>what</p>
            <p>{props.listing.title}</p>
            <p>{props.listing.description}</p>
            <p>{`${props.listing.address} ${props}`}</p>
            <p>{props.listing}</p>
            <p>{props.listing}</p>
            <p>{props.listing}</p>
        </div>
    )

}

export default ListingIndexItem;