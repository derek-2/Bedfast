import React from 'react';

export default class NewListing extends React.Component{
    
    constructor(props){
        super(props);
        this.state = this.props.listing;
        this.state.scroll = 0;
        this.handleSubmit=this.handleSubmit.bind(this);
        this.update=this.update.bind(this);
        this.removePhoto = this.removePhoto.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllListings();
    }

    handleSubmit(e){
        // console.log('Attempting to create a new listing...');
        e.preventDefault();
        const formData = new FormData();
        
        let position = {};
        switch(this.state.city.toUpperCase()){
          case ('MIA'):
            position.latitude = (Math.random()*(25.846818-25.732979))+25.732979;
            position.longitude = (Math.random()*(-80.208311+80.335925))-80.335925;
            break;
          case ('ATX'):
            position.latitude = (Math.random()*(30.326598-30.176468))+30.176468;
            position.longitude = (Math.random()*(-97.617053+97.849745))-97.849745;
            break;
          case ('LA'):
            position.latitude = (Math.random()*(34.091191-33.969270))+33.969270;
            position.longitude = (Math.random()*(-118.133952+118.346130))-118.346130;
            break;
          default:
            position = {latitude: this.props.listing.latitude, longitude: this.props.listing.longitude};
        }

        formData.append('listing[title]', this.state.title);
        formData.append('listing[description]', this.state.description);
        formData.append('listing[address]', this.state.address);
        formData.append('listing[host_id]', this.props.currentUser.id);
        formData.append('listing[city]', this.state.city);
        formData.append('listing[state]', this.state.state);
        formData.append('listing[zipcode]', this.state.zipcode);
        formData.append('listing[latitude]', position.latitude);
        formData.append('listing[longitude]', position.longitude);
        formData.append('listing[max_num_guests]', this.state.max_num_guests);
        formData.append('listing[num_beds]', this.state.num_beds);
        formData.append('listing[num_baths]', this.state.num_baths);
        formData.append('listing[price_per_night]', this.state.price_per_night);
        debugger
        for (let i = 0; i < this.state.photos.length; i++) {
            formData.append("listing[photos][]", this.state.photos[i]);
        }

        this.props.submitForm(formData)
            .then(res => this.props.history.push(`/listings/search/${res.listing.state}/0`));
    }

    update(field){
        return e => this.setState({[field]:e.currentTarget.value})
    }

    updatePhotos(e){
        // console.log(e.target.files.length);
        let arr = [];
        arr=arr.concat(Object.values(e.target.files).map(photo => URL.createObjectURL(photo)))

        this.setState(
            {
            photos: this.state.photos.concat(Object.values(e.target.files)),
            // photos: Object.values(e.target.files)[0],
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

    handleScroll(e){

    }
    
    render(){
        console.log(this.state);
        const preview = this.state ?
            this.state.previewPhotos.map((preview,idx) => 
            <div className='individual-preview-photo' key={idx}>
                <img className='preview-photos' src={preview} alt='preview' onClick={() => this.removePhoto(idx)}/>
            </div>) :
            <></>
        const {errors} = this.props;
        const allErrors = errors.length>0 ? errors.map((err,idx) => <><p className='error-message' key={idx}>{err}</p></>) : null;
        
        const options = (
            <>
                <option value=''disabled>Select one</option>
                <option value='Alabama'>Alabama</option>
                <option value='Alaska'>Alaska</option>
                <option value='Arizona'>Arizona</option>
                <option value='Arkansas'>Arkansas</option>
                <option value='California'>California</option>
                <option value='Colorado'>Colorado</option>
                <option value='Connecticut'>Connecticut</option>
                <option value='Delaware'>Delaware</option>
                <option value='Florida'>Florida</option>
                <option value='Georgia'>Georgia</option>
                <option value='Hawaii'>Hawaii</option>
                <option value='Idaho'>Idaho</option>
                <option value='Illinois'>Illinois</option>
                <option value='Indiana'>Indiana</option>
                <option value='Iowa'>Iowa</option>
                <option value='Kansas'>Kansas</option>
                <option value='Kentucky'>Kentucky</option>
                <option value='Louisiana'>Louisiana</option>
                <option value='Maine'>Maine</option>
                <option value='Maryland'>Maryland</option>
                <option value='Massachusetts'>Massachusetts</option>
                <option value='Michigan'>Michigan</option>
                <option value='Minnesota'>Minnesota</option>
                <option value='Mississippi'>Mississippi</option>
                <option value='Missouri'>Missouri</option>
                <option value='Montana'>Montana</option>
                <option value='Nebraska'>Nebraska</option>
                <option value='Nevada'>Nevada</option>
                <option value='New Hampshire'>New Hampshire</option>
                <option value='New Jersey'>New Jersey</option>
                <option value='New Mexico'>New Mexico</option>
                <option value='New York'>New York</option>
                <option value='North Carolina'>North Carolina</option>
                <option value='North Dakota'>North Dakota</option>
                <option value='Ohio'>Ohio</option>
                <option value='Oklahoma'>Oklahoma</option>
                <option value='Oregon'>Oregon</option>
                <option value='Pennsylvania'>Pennsylvania</option>
                <option value='Rhode Island'>Rhode Island</option>
                <option value='South Carolina'>South Carolina</option>
                <option value='South Dakota'>South Dakota</option>
                <option value='Tennessee'>Tennessee</option>
                <option value='Texas'>Texas</option>
                <option value='Utah'>Utah</option>
                <option value='Vermont'>Vermont</option>
                <option value='Virginia'>Virginia</option>
                <option value='Washington'>Washington</option>
                <option value='West Virginia'>West Virginia</option>
                <option value='Wisconsin'>Wisconsin</option>
                <option value='Wyoming'>Wyoming</option>
            </>
        )
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
                            {/* <input type="text" className='col' placeholder='e.g. NY' onChange={this.update('state')} /> */}
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