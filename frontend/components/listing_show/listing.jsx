import React from "react";
import Map from '../map/map';
import NewBookingFormContainer from "../booking_form/new_booking_form_container";

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
            const {host_name, address, city, description, host_id, id, max_num_guests, num_baths, num_beds, price_per_night, state, title, zipcode, photoUrls} = this.props.listing;
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
            return (
                <div className='container'>
                    <p>{title} by {host_name}</p>
                    <p>{city},{state}</p>
                    {allPhotos}
                    <div className='listing-show-container'>
                        <div className='listing-info'>
                            {description}
                            <p>{city}, {state}</p>
                            <p>{max_num_guests} guests · {num_beds} beds · {num_baths} baths</p>
                            {title}
                            <hr className='listing-show-separator' />
                            <div className='placeholder-info-wrap'>
                                <img src={window.door} alt="door!" /> 
                                <div className='placeholder-info-text'>
                                    <div>
                                        <b>Self check-in</b>
                                    </div>
                                    <div>
                                        Check yourself in with the lockbox.
                                    </div>
                                </div>
                            </div>
                            <div className='placeholder-info-wrap'>
                                <img src={window.key} alt="key!" /> 
                                <div className='placeholder-info-text'>
                                    <div>
                                        <b>Great check-in experience</b>
                                    </div>
                                    <div>
                                        90% of recent guests gave the check-in process a 5-star rating.
                                    </div>
                                </div>
                            </div>
                            <div className='placeholder-info-wrap'>
                                <img src={window.calendar} alt="calendar!" /> 
                                <div className='placeholder-info-text'>
                                    <div>
                                        <b>Free cancellation for 48 hours.</b>
                                    </div>

                                </div>
                            </div>


                            {/* <p>&lt;Booking Form&gt;</p> */}
                        </div>
                            <NewBookingFormContainer listingId={id} price={price_per_night}/>
                        </div>
                    <p>&lt;Review Component&gt;</p>
                    
                    <p>Where you'll be</p>
                    <hr className='listing-show-separator' />
                    <Map listings={[this.props.listing]}/>
                </div>
        )}
        else {
            return(<></>)
        }
    }
}