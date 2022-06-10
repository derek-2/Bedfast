import React from 'react';
import Map from '../map/map';

import ListingIndexItem from './listing_index_item';

export default class ListingsIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        if (this.props.match.params.location){
            this.props.fetchListings(this.props.match.params.location, this.props.match.params.guests, this.props.clearListings())
        } else {
            this.props.fetchListings(undefined, this.props.match.params.guests, this.props.clearListings())
        }
    }
        
    componentDidUpdate(prevProps){
        if ((this.props.match.params.location !== prevProps.match.params.location) || (this.props.match.params.guests !== prevProps.match.params.guests)){
            // console.log('hit update index');
            this.props.fetchListings(this.props.match.params.location, this.props.match.params.guests, this.props.clearListings())
            
        }
    }

    render(){
        // console.log(this.props.listings);
        let message;
        console.log(this.props.match.params.location);
        const listingsLen = Object.values(this.props.listings).length;
        if (this.props.match.params.location && (listingsLen > 1 || listingsLen === 0)){
            message = `${listingsLen} stays in ${this.props.match.params.location}`;
        } else if (this.props.match.params.location && listingsLen === 1){
            message = `${listingsLen} stay in ${this.props.match.params.location}`;
        } else if (!this.props.match.params.location && listingsLen > 1){
            message = `${listingsLen} stays for at least ${this.props.match.params.guests} guests`;
        } else if (!this.props.match.params.location && listingsLen === 1){
            message = `${listingsLen} stay for at least ${this.props.match.params.guests} guest`;
        } else {
            message = `0 stays around the world.`;
        }

        if (!this.props.listings){
            return null;
        }
        else {
            return(
                <div className='listings-index-container'>
                    <div className='listings-index-items-container'>
                        <p>{message}</p>
                        {Object.values(this.props.listings).map(listing =>{ 
                        return <ListingIndexItem key={listing.id} listing={listing} fetchReviewsByListing={this.props.fetchReviewsByListing} reviews={this.props.reviews}/>} )}
                    </div>
                    <Map match={this.props.match} listings={this.props.listings} />
                </div>
            )
        }
    }
}