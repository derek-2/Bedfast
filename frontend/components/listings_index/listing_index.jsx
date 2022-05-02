import React from 'react';
import ListingsMap from '../map/listings_map';
import ListingIndexItem from './listing_index_item';

export default class ListingsIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListings(this.props.match.params.city);

    }

    render(){

        return(
            <div className='listings-index-container'>
                <div className='listings-index-items-container'>
                    <p>{`${Object.values(this.props.listings).length} stays in ${this.props.match.params.city}`}</p>
                    {Object.values(this.props.listings).map(listing => <ListingIndexItem key={`listing-${listing.id}`} listing={listing}/> )}
                </div>
                <div className='map-container'><ListingsMap /></div>
            </div>
        )
    }
}