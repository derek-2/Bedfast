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
        // console.log('Attempting to create a new listing...');
        e.preventDefault();
        const formData = new FormData();
        
        if (this.state.title === '' || this.state.description === '' || this.state.address === '' || this.state.city === '' || this.state.state === '' || this.state.zipcode==='' || this.state.max_num_guests === '' || this.state.num_beds === '' || this.state.num_baths === '' || this.state.price_per_night ==='' || this.state.photos.length < 1){
            this.setState({errors: 'fill out all fields bruh'});
        }
        else if(this.props.currentUser === undefined) {
            this.setState({errors: 'must be logged in to create new listing'});
        }
        else {
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
    
            for (let i = 0; i < this.state.photos.length; i++) {
                formData.append("listing[photos][]", this.state.photos[i]);
            }

            this.props.submitForm(formData).then(() => this.props.history.push('/listings/search/NY/0'))
            
        };
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

    removePhoto(e,idx){
        e.preventDefault();
        this.setState({
            photos: [this.state.photos.slice(0,idx).concat(this.state.photos.slice(idx))],
            previewPhotos: [this.state.previewPhotos.slice(0,idx).concat(this.state.previewPhotos.slice(idx))]
        })
        console.log(idx);
        // debugger;
    }
    
    render(){
        console.log(this.state);
        const preview = this.state ?
            this.state.previewPhotos.map((preview,idx) => 
            <div className='individual-preview-photo'>
                {/* <span className='remove-photo'>&times;</span> */}
                <img className='preview-photos' key={idx} src={preview} alt='preview'/>
                <span ><button className="trash-btn" onClick={(e) => this.removePhoto(e,idx)}>trash!!</button></span>
            </div>) :
            <></>

        // const errors = this.state.errors ? <><p className='error-message'>{this.state.errors}</p></> : null;
        if (this.state){
            return(
                <div id="listing-form-container" onSubmit={this.handleSubmit}>
                    <form className='listing-form'>
                        <label>Title
                            <input type="text" placeholder='Name your listing' onChange={this.update('title')} />
                        </label>
                        <label>Description
                            <textarea rows='3' placeholder='Give a short description of what you offer' onChange={this.update('description')} ></textarea>
                        </label>
                        <label>Address
                            <input type="text" placeholder='e.g. 123 Blue Street' onChange={this.update('address')} />
                        </label>
                        <label>City
                            <input type="text" placeholder='e.g. NY' onChange={this.update('city')} />
                        </label>
                        <label>State
                            <input type="text" placeholder='e.g. NY' onChange={this.update('state')} />
                        </label>
                        <label>Zipcode
                            <input type="text" placeholder='e.g. 12345' onChange={this.update('zipcode')} />
                        </label>
                        <div className='listing-number-container'>
                            <label className='some-labels'>Capacity
                                <input className='small-input-field' type="number" onChange={this.update('max_num_guests')} />
                            </label>
                            <label className='some-labels'> Beds
                                <input className='small-input-field' type="number" min="1" onChange={this.update('num_beds')} />
                            </label>
                            <label className='some-labels'>Baths
                                <input className='small-input-field' type="number" min="1" onChange={this.update('num_baths')} />
                            </label>
                            <label className='some-labels'>Price per night
                                <input className='small-input-field' type="number" min="1" onChange={this.update('price_per_night')} />
                            </label>
                        </div>
                        <label className='upload-images'>
                            Choose Files (min: 5)
                            <input type="file" multiple onChange={e => this.updatePhotos(e)}/>
                        </label>
                        <div className='preview-container'>
                            {preview}
                        </div>
                        {/* {errors} */}
                        <input type="submit" value={`${this.props.formType} Listing`} />
                    </form>
                </div>
            )
        }
        else {
            return null;
        }
    }

}