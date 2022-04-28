import React from 'react';

export default class NewListing extends React.Component{
    constructor(props){
        super(props);
        this.state= {

        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
    }


    render(){
        return(
            <div id="listing-form-container">
                <form className='listing-form'>
                    <input type="text" placeholder='Title' />
                    {/* <input type="text" placeholder='Description' /> */}
                    <textarea placeholder='Description' ></textarea>
                    <input type="text" placeholder='Address' />
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                    <input type="text" placeholder='Zipcode' />
                    <input type="text" placeholder='Max Capacity' />
                    <input type="text" placeholder='Number of beds' />
                    <input type="text" placeholder='Number of baths' />
                    <input type="text" placeholder='Price per night' />
                    <input type="submit" />
                </form>
            </div>
        )
    }

}