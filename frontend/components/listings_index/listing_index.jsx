import React from 'react';
import Map from '../map/map';

import ListingIndexItem from './listing_index_item';

export default class ListingsIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        debugger;
        this.props.fetchListings(this.props.match.params.city);
    }

    componentDidUpdate(){
        debugger;
        // this.props.fetchListings(this.props.match.params.city);
    }

    render(){
        debugger;
        return(
            <div className='listings-index-container'>
                <div className='listings-index-items-container'>
                    <p>{`${Object.values(this.props.listings).length} stays in ${this.props.match.params.city}`}</p>
                    {Object.values(this.props.listings).map(listing =>{ 
                    debugger;
                    return <ListingIndexItem listing={listing}/>} )}
                </div>
                <Map listings={this.props.listings} />
            </div>
        )
    }
}