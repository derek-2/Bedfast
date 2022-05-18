import React from "react";
import Map from '../map/map';

export default class Listing extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId).then(() => console.log('hello'));
    }

    render(){
        console.log(this.props.listing)
        if (this.props.listing){ 
            const {address, city, description, host_id, id, max_num_guests, num_baths, num_beds, price_per_night, state, title, zipcode, photoUrls} = this.props.listing;
            const allPhotos = (
                <>
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
            debugger;
            return (
                <div className='container'>
                    {title}
                    <p>{city},{state}</p>
                    {allPhotos}
                    {title}
                    <p>{max_num_guests} guests · {num_beds} beds · {num_baths} baths</p>

                    <hr className='listing-show-separator' />
                    {description}
                    {price_per_night}
                    <p>&lt;Booking Form&gt;</p>
                    <p>&lt;Review Component&gt;</p>
                    <p>Where you'll be</p>
                    <p>{city}, {state}</p>
                    <Map listings={[this.props.listing]}/>
                </div>
        )}
        else {
            return(<></>)
        }
    }
}