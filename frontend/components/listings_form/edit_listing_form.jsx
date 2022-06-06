import React from 'react';

export default class EditListingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.listing;
        // if (this.state){
        //     this.state['previewPhotos'] = [];
        //     this.state.photos.forEach(photo => this.state.previewPhotos.push(URL.createObjectURL(photo)))
        // }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        // this.props.fetchAllListings().then(()=> this.setState({listing: this.props.listing})).then(()=>console.log(this.props.listing));
        this.props.fetchListing(this.props.match.params.listingId).then(() => this.setState(this.props.listing))
    }

    componentDidUpdate(prevProps){
        // if (this.props.formType === 'Edit' && prevProps.listing !== this.props.listing){
        //     const currentListing = this.props.listings[this.props.match.params.listingId];
        //     const previewPhotos = [];
        //     // currentListing.photos.forEach(photo => previewPhotos.push(URL.createObjectURL(photo)));
        //     this.setState(currentListing)
        // }
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
        // console.log('Attempting to create a new listing...');
        e.preventDefault();
        const formData = new FormData();

        formData.append('listing[id]', this.state.id);
        formData.append('listing[title]', this.state.title);
        formData.append('listing[description]', this.state.description);
        formData.append('listing[address]', this.state.address);
        formData.append('listing[host_id]', this.props.currentUser.id);
        formData.append('listing[city]', this.state.city);
        formData.append('listing[state]', this.state.state);
        formData.append('listing[zipcode]', this.state.zipcode);
        formData.append('listing[latitude]', this.state.latitude);
        formData.append('listing[longitude]', this.state.longitude);
        formData.append('listing[max_num_guests]', this.state.max_num_guests);
        formData.append('listing[num_beds]', this.state.num_beds);
        formData.append('listing[num_baths]', this.state.num_baths);
        formData.append('listing[price_per_night]', this.state.price_per_night);

        // for (let i = 0; i < this.state.photoUrls.length; i++) {
        //     formData.append("listing[photos][]", this.state.photoUrls[i]);
        // }
        // console.log(this.state)
        this.props.submitForm(formData).then(() => this.props.history.push(`/listings/${this.state.id}`))

    }

    update(field){
        return e => this.setState({[field]:e.currentTarget.value})
    }

    render(){
        if (this.state){
            const {title, description, address, city, state, zipcode, max_num_guests, num_beds, num_baths, price_per_night} = this.state;
            const {errors} = this.props;
            const allErrors = errors.length>0 ? errors.map((err,idx) => <><p className='error-message' key={idx}>{err}</p></>) : null;
            // console.log(this.state)
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
                                <input type="text" value={state} placeholder='e.g. NY' onChange={this.update('state')} />
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
                                {/* {this.prevPhotos()} */}
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