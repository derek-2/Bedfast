import React from 'react';

export default class ListingsIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListings(this)
    }
}