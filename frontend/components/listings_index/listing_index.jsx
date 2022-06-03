import React from 'react';
import Map from '../map/map';

import ListingIndexItem from './listing_index_item';

export default class ListingsIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        if (this.props.match.params.city){
            this.props.fetchListings(this.props.match.params.city, this.props.match.params.guests, this.props.clearListings())
        } else {
            this.props.fetchListings(undefined, this.props.match.params.guests, this.props.clearListings())
        }
    }
        
    componentDidUpdate(prevProps){
        if ((this.props.match.params.city !== prevProps.match.params.city) || (this.props.match.params.guests !== prevProps.match.params.guests)){
            console.log('hit update index');
            this.props.fetchListings(this.props.match.params.city, this.props.match.params.guests, this.props.clearListings())
            
        }
        // if (prevState.listings !== this.state.listings){
        //     this.props.fetchListings(this.props.match.params.city, this.props.match.params.guests)
        // }
    }

    render(){
        console.log(this.props.listings);
        // debugger;
        if (!this.props.listings){
            return null;
        }
        else {
            return(
                <div className='listings-index-container'>
                    <div className='listings-index-items-container'>
                        {this.props.match.params.city ? <p>{`${Object.values(this.props.listings).length} stays in ${this.props.match.params.city}`}</p> :<p>{`${Object.values(this.props.listings).length} stays around the world`}</p>}
                        {Object.values(this.props.listings).map(listing =>{ 
                        return <ListingIndexItem listing={listing} fetchReviewsByListing={this.props.fetchReviewsByListing} reviews={this.props.reviews}/>} )}
                    </div>
                    <Map match={this.props.match} listings={this.props.listings} />
                </div>
            )
        }
    }
}