import React from 'react';

export default class NewListing extends React.Component{
    
    constructor(props){
        super(props);
        this.state = this.props.listing;
        this.handleSubmit=this.handleSubmit.bind(this);
        this.update=this.update.bind(this);
        this.removePhoto = this.removePhoto.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllListings();
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

                for (let i = 0; i < this.state.photos.length; i++) {
                    formData.append("listing[photos][]", this.state.photos[i]);
                }

                this.props.submitForm(formData)
                    .then(res => {
                        this.props.history.push(`/listings/${res.listing.id}`)
                    })
            } else {
                this.setState({errors: ['Invalid address']})
            }
        })
    }

    update(field){
        return e => this.setState({[field]:e.currentTarget.value})
    }

    updatePhotos(e){
        let arr = [];
        arr=arr.concat(Object.values(e.target.files).map(photo => URL.createObjectURL(photo)))

        this.setState(
            {
            photos: this.state.photos.concat(Object.values(e.target.files)),
            previewPhotos: this.state.previewPhotos.concat(arr)
            }
        )
    }

    removePhoto(idx){
         this.setState({
            photos: this.state.photos.slice(0,idx).concat(this.state.photos.slice(idx+1)),
            previewPhotos: this.state.previewPhotos.slice(0,idx).concat(this.state.previewPhotos.slice(idx+1))
        })
    }
    
    render(){
        const preview = this.state ?
            this.state.previewPhotos.map((preview,idx) => 
            <div className='individual-preview-photo' key={idx}>
                <img className='preview-photos' src={preview} alt='preview' onClick={() => this.removePhoto(idx)}/>
            </div>) :
            <></>
        const {errors} = this.state;
        // const allErrors = errors.length>0 ? (errors.concat(this.state.errors)).map((err,idx) => <p className='error-message' key={idx}>{err}</p>) : null;
        const allErrors = errors.map((err,idx) => <p className='error-message' key={idx}>{err}</p>);
        
        const stateOptions = ['Select one','Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
        const options = stateOptions.map((state,idx) => {
            return (
                <option value={state} disabled={idx === 0} key={idx}>{state}</option>
            )
        })

            const {title, description, address, city, state, zipcode,latitude, longitude, max_num_guests, num_beds, num_baths, price_per_night} = this.state;
        if (this.state){
            return(
                <div id="listing-form-container">
                    <form className='listing-form' onSubmit={this.handleSubmit}>
                        <label>Title
                            <input type="text" value={title} className='col' placeholder='Name your listing' onChange={this.update('title')} />
                        </label>
                        <label>Description
                            <textarea rows='3' value={description} placeholder='Give a short description of what you offer' onChange={this.update('description')} ></textarea>
                        </label>
                        <label>Address
                            <input type="text" value={address} className='col' placeholder='e.g. 123 Blue Street' onChange={this.update('address')} />
                        </label>
                        <label>City
                            <input type="text" value={city} className='col' placeholder='e.g. NY' onChange={this.update('city')} />
                        </label>
                        <label>State
                            <select name='state' value={state} onChange={this.update('state')}>
                                {options}
                            </select>
                        </label>
                        <label>Zipcode
                            <input type="text" value={zipcode} className='col' placeholder='e.g. 12345' onChange={this.update('zipcode')} />
                        </label>
                        <div className='listing-number-container'>
                            <label className='some-labels'>Capacity
                                <input className='small-input-field' value={max_num_guests} type="number" onChange={this.update('max_num_guests')} />
                            </label>
                            <label className='some-labels'> Beds
                                <input className='small-input-field' value={num_beds} type="number" min="1" onChange={this.update('num_beds')} />
                            </label>
                            <label className='some-labels'>Baths
                                <input className='small-input-field' value={num_baths} type="number" min="1" onChange={this.update('num_baths')} />
                            </label>
                            <label className='some-labels'>Price per night
                                <input className='small-input-field' value={price_per_night} type="number" min="1" onChange={this.update('price_per_night')} />
                            </label>
                        </div>
                        <label className='upload-images ten-vw'>
                            Upload Photos (5)
                            <input type="file" multiple onChange={e => this.updatePhotos(e)}/>
                        </label>
                        <div className='preview-container'>
                            {preview}
                        </div>
                        {allErrors}
                        <input type="submit" value={`${this.props.formType} Listing`} />
                    </form>
                </div>
            )
        } else {
            return null;
        }
    }

}