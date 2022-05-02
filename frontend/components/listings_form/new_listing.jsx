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
            photos:[]
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        console.log('yellow');
        // debugger;
        e.preventDefault();
    }

    update(field){
        return e => this.setState({[field]:e.currentTarget.value})
    }

    updatePhotos(e){
        console.log('blue');
        debugger;
        //e.target.files --> is an array of all the files
        return e => {
           debugger;
        }
    }
    
    render(){
        console.log(this.state);
        console.log(this.state.photos);
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
                        <input type="number" placeholder='Capacity' onChange={this.update('max_num_guests')} />
                        <input type="number" min="1" placeholder='Beds' onChange={this.update('num_beds')} />
                        <input type="number" min="1" placeholder='Baths' onChange={this.update('num_baths')} />
                        <input type="number" min="1" placeholder='Price/night' onChange={this.update('price_per_night')} />
                    </div>
                    <input type="file" multiple onChange={e => this.updatePhotos(e)}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }

}