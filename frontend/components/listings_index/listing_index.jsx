import React from 'react';
import Map from '../map/map';

import ListingIndexItem from './listing_index_item';

export default class ListingsIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListings(this.props.match.params.city);
        // debugger;
    }

    render(){
        return(
            <div className='listings-index-container'>
                <div className='listings-index-items-container'>
                    <p>{`${Object.values(this.props.listings).length} stays in ${this.props.match.params.city}`}</p>
                    {Object.values(this.props.listings).map(listing => <ListingIndexItem key={`listing-${listing.id}`} listing={listing}/> )}
                </div>
                <Map listings={this.props.listings} />
            </div>
        )
    }
}