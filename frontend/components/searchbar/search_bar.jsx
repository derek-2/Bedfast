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
        const {searchParams, guests} = this.state;
        if (searchParams.trim()){
            this.props.history.push(`/listings/search/${searchParams}/${guests}`);
        } else {
            this.props.history.push(`/listings/search/${guests}`);
        }
        this.clearFields();
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
                <form className="flex-form" onSubmit={this.handleSubmit}>
                    <input type="search" placeholder="Search destinations" value={this.state.searchParams} onChange={this.update('searchParams')} />
                    <select name="guests" id="guests" onChange={this.update('guests')} value={this.state.guests}>
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4"> More guests</option>
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