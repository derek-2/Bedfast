import React from 'react';

export default class ListingsIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListings(this.props.match.params.city);
        debugger;
    }

    render(){
        return(
            <div>
                <p>YOYOYO</p>
            </div>
        )
    }
}