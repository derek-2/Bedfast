import React from 'react';

export default class NewListing extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            title: '',
            description: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            max_num_guests: '',
            num_beds: '',
            num_baths: '',
            price_per_night: '',
            photos:[],
            previewPhotos:[]
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        console.log('yellow');
        // debugger;
        e.preventDefault();
    }

    update(field){
        debugger;
        return e => this.setState({[field]:e.currentTarget.value})
    }

    updatePhotos(e){
        console.log(e.target.files.length);
        let arr = [];
        arr=arr.concat(Object.values(e.target.files).map(photo => URL.createObjectURL(photo)))
        debugger;

        this.setState(
            {
            photos: this.state.photos.concat(Object.values(e.target.files)),
            previewPhotos: this.state.previewPhotos.concat(arr)
            }
        )
        // debugger;
    }

    removePhoto(idx){
        // return e => 
    }
    
    render(){
        console.log(this.state);
        console.log('photos:',this.state.photos);
        console.log('preview:',this.state.previewPhotos);
        const preview = this.state.previewPhotos ?
            this.state.previewPhotos.map((preview,idx) => <div><span className='remove-photo'>&times;</span><img className='preview-photos' key={idx} src={preview} alt='preview'/></div>) :
            <></>
        return(
            <div id="listing-form-container" onSubmit={this.handleSubmit}>
                <form className='listing-form'>
                    <label>Title
                        <input type="text" placeholder='Title' onChange={this.update('title')} />
                    </label>
                    <label>Description
                        <textarea placeholder='Description' onChange={this.update('description')} ></textarea>
                    </label>
                    <label>Address
                        <input type="text" placeholder='Address' onChange={this.update('address')} />
                    </label>
                    <label>City
                        <input type="text" placeholder='City' onChange={this.update('city')} />
                    </label>
                    <label>State
                        <input type="text" placeholder='State' onChange={this.update('state')} />
                    </label>
                    <label>Zipcode
                        <input type="text" placeholder='Zipcode' onChange={this.update('zipcode')} />
                    </label>
                    <div className='listing-number-container'>
                        <input className='small-input-field' type="number" placeholder='Capacity' onChange={this.update('max_num_guests')} />
                        <input className='small-input-field' type="number" min="1" placeholder='Beds' onChange={this.update('num_beds')} />
                        <input className='small-input-field' type="number" min="1" placeholder='Baths' onChange={this.update('num_baths')} />
                        <input className='small-input-field' type="number" min="1" placeholder='Price/night' onChange={this.update('price_per_night')} />
                    </div>
                    <input type="file" multiple onChange={e => this.updatePhotos(e)}/>
                    {preview}
                    <input type="submit" />
                </form>
            </div>
        )
    }

}