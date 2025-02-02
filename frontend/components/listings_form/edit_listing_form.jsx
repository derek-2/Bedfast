import React from 'react';

export default class EditListingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.listing;

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId).then(() => this.setState(this.props.listing))
    }

    prevPhotos(){
        const {props} = this;
        if (props.listing && props.listing.photoUrls){
            return (
                <>
                <img src={this.props.listing.photoUrls[0]} alt="photo1" />
                <img src={this.props.listing.photoUrls[1]} alt="photo2" />
                <img src={this.props.listing.photoUrls[2]} alt="photo3" />
                <img src={this.props.listing.photoUrls[3]} alt="photo4" />
                <img src={this.props.listing.photoUrls[4]} alt="photo5" />
                </>
            )
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const {address, city, state, zipcode} = this.state;
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({address: `${address} ${city} ${state} ${zipcode}`}, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK){
                const formData = new FormData();

                formData.append('listing[id]', this.state.id);
                formData.append('listing[title]', this.state.title);
                formData.append('listing[description]', this.state.description);
                formData.append('listing[address]', this.state.address);
                formData.append('listing[host_id]', this.props.currentUser.id);
                formData.append('listing[city]', this.state.city);
                formData.append('listing[state]', this.state.state);
                formData.append('listing[zipcode]', this.state.zipcode);
                formData.append('listing[latitude]', results[0].geometry.location.lat());
                formData.append('listing[longitude]', results[0].geometry.location.lng());
                formData.append('listing[max_num_guests]', this.state.max_num_guests);
                formData.append('listing[num_beds]', this.state.num_beds);
                formData.append('listing[num_baths]', this.state.num_baths);
                formData.append('listing[price_per_night]', this.state.price_per_night);

                this.props.submitForm(formData)
                    .then(res => this.props.history.push(`/listings/${this.state.id}`));
            } else {
                this.setState({errors: ['address not found']})
            }
        })
    }

    update(field){
        return e => this.setState({[field]:e.currentTarget.value})
    }

    render(){
        const stateOptions = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
        const options = stateOptions.map((state,idx) => {
            return (
                <option value={state} key={idx}>{state}</option>
            )
        })

        if (this.state){
            const {title, description, address, city, state, zipcode, max_num_guests, num_beds, num_baths, price_per_night} = this.state;
            const {errors} = this.props;
            const allErrors = errors.length>0 ? errors.map((err,idx) => <p className='error-message' key={idx}>{err}</p>) : null;
            return (
                <div id="listing-form-container" onSubmit={this.handleSubmit}>
                    <form className='listing-form'>
                        <label>Title
                            <input type="text" value={title} placeholder='Name your listing' onChange={this.update('title')} />
                        </label>
                        <label>Description
                            <textarea rows='3' value={description} placeholder='Give a short description of what you offer' onChange={this.update('description')} ></textarea>
                        </label>
                        <label>Address
                            <input type="text" value={address} placeholder='e.g. 123 Blue Street' onChange={this.update('address')} />
                        </label>
                        <label>City
                            <input type="text" value={city} placeholder='e.g. NY' onChange={this.update('city')} />
                        </label>
                        <label>State
                            <select name='state' value={state} onChange={this.update('state')}>
                            {options}
                        </select>
                        </label>
                        <label>Zipcode
                            <input type="text" value={zipcode} placeholder='e.g. 12345' onChange={this.update('zipcode')} />
                        </label>
                        <div className='listing-number-container'>
                            <label className='some-labels'>Capacity
                                <input value={max_num_guests} className='small-input-field' type="number" onChange={this.update('max_num_guests')} />
                            </label>
                            <label className='some-labels'> Beds
                                <input value={num_beds} className='small-input-field' type="number" min="1" onChange={this.update('num_beds')} />
                            </label>
                            <label className='some-labels'>Baths
                                <input value={num_baths} className='small-input-field' type="number" min="1" onChange={this.update('num_baths')} />
                            </label>
                            <label className='some-labels'>Price per night
                                <input value={price_per_night} className='small-input-field' type="number" min="1" onChange={this.update('price_per_night')} />
                            </label>
                        </div>
                        {allErrors}
                        <input type="submit" value={`${this.props.formType} Listing`} />
                    </form>
                </div>
            )}
        else {
            return null;
        }
    }
}