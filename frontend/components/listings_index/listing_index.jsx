import React from 'react';
import ListingIndexItem from './listing_index_item';

export default class ListingsIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListings(this.props.match.params.city);

    }

    render(){
        debugger;
        return(
            <div className='listings-index-container'>
                <div className='listings-index-item-container'>
                    {Object.values(this.props.listings).map(listing => {<ListingIndexItem listing={listing}/>})}
                </div>
                <div className='map-container'>MAP</div>
            </div>
        )
    }
}