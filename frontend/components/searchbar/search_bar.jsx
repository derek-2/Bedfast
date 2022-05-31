import React from 'react';
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchParams: '',
            guests: 1
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        const {searchParams, guests} = this.state;
        this.props.history.push(`/listings/search/${searchParams}/${guests}`)
        this.clearFields()
    }

    clearFields(e){
        this.setState({searchParams: '', guests: 1})
    }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }

    render(){
        return (
            <>
                <form className="flex-form">
                    <input type="search" placeholder="Search destinations" value={this.state.searchParams} onChange={this.update('searchParams')} />
                    <select name="guests" id="guests" onChange={this.update('guests')} value={this.state.guests}>
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                        <option value="5">5 guests</option>
                    </select>
                    <div>
                        <FaSearch onClick={this.handleSubmit}/>
                    </div>
                </form>
            </>
            
        )
    }
}

//will probably have to change searchbar component to position relative/absolute