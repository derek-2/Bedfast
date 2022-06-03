import React from "react";
import {FaStar} from 'react-icons/fa';

export default class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state=this.props.review;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.cleanliness = this.cleanliness.bind(this);
        this.accuracy = this.accuracy.bind(this);
        this.communication = this.communication.bind(this);
        this.location = this.location.bind(this);
        this.checkIn = this.checkIn.bind(this);
        this.value = this.value.bind(this);
        this.clearFields = this.clearFields.bind(this);
    }

    componentDidMount(){
        if (this.props.formType === 'Create') {
            this.setState({
                listing_id: this.props.match.params.listingId,
                guest_id: this.props.currentUserId 
            })
        }
        
        const cleanliness = document.getElementsByClassName('cleanliness-stars');
        const accuracy = document.getElementsByClassName('accuracy-stars');
        const communication = document.getElementsByClassName('communication-stars');
        const location = document.getElementsByClassName('location-stars');
        const check_in = document.getElementsByClassName('check-in-stars');
        const value = document.getElementsByClassName('value-stars');

        for(let i = 0; i < 5; i++){
            cleanliness[i].addEventListener('click', this.updateScore('cleanliness', i))
            accuracy[i].addEventListener('click', this.updateScore('accuracy', i))
            communication[i].addEventListener('click', this.updateScore('communication', i))
            location[i].addEventListener('click', this.updateScore('location', i))
            check_in[i].addEventListener('click', this.updateScore('check-in', i))
            value[i].addEventListener('click', this.updateScore('value', i))

            // cleanliness[i].addEventListener('mouseover', this.highlight('cleanliness-stars',i))
            // accuracy[i].addEventListener('mouseover', this.highlight('accuracy-stars',i))
            // communication[i].addEventListener('mouseover', this.highlight('communication-stars',i))
            // location[i].addEventListener('mouseover', this.highlight('location-stars',i))
            // check_in[i].addEventListener('mouseover', this.highlight('check-in-stars',i))
            // value[i].addEventListener('mouseover', this.highlight('value-stars',i))
        }
    }

    // highlight(field, num){
    //     return () => {
    //         const allStars = document.getElementsByClassName(field);
            // for (let i = 0; i < num; i++){
            //     // allStars[i].setAttribute('color', 'yellow');
            //     allStars[i].classList.toggle('highlight')
            // }
    //     }
    // }

    handleSubmit(e){
        e.preventDefault();
        console.log({review:this.state});
        this.props.submitForm({review:this.state}).then(() =>{
            if (this.props.formType === 'Create') this.clearFields();
        });
    }

    updateScore(field, num){
        return () => {
            this.setState({[field.replaceAll('-','_')]: num+1}, () => {
                const {cleanliness, accuracy, communication, location, check_in, value} = this.state;
                const overall_rating = (cleanliness+accuracy+communication+location+check_in+value)/6;
                this.setState({overall_rating})
            })

            const allStars = document.getElementsByClassName(`${field}-stars`);
            for (let i = 0; i <= num; i++){
                allStars[i].style.color = '#dc0e63';
            }
            for (let i = num+1; i < 5; i++){
                allStars[i].style.color = '#C8C8C8';
            }
        }
    }

    updateBody(e){
        e.preventDefault();
        this.setState({body:e.target.value})
    }

    clearFields(){
        this.setState({
            listing_id: this.props.review.listing_id,
            guest_id: this.props.review.guest_id,
            body: '',
            overall_rating: 0,
            cleanliness: 0,
            accuracy: 0,
            communication: 0,
            location: 0,
            check_in: 0,
            value: 0
        })
    }

    cleanliness(){
        const arr = [];
        for (let i = 1; i <= 5; i++){
            if (i <= this.state.cleanliness){
                arr.push(<FaStar color='yellow 'className='cleanliness-stars' id={`star-${i-1}`}/>);
            } else {
                arr.push(<FaStar className='cleanliness-stars' id={`star-${i-1}`}/>)
            }
        }
        return <>
            <label className='review-label'> <p>Cleanliness:</p>
            <div>{arr}</div>
            </label>
        </>
    }

    accuracy(){
        const arr = [];
        for (let i = 1; i <= 5; i++){
            if (i <= this.state.accuracy){
                arr.push(<FaStar color='yellow 'className='accuracy-stars' id={`star-${i-1}`}/>);
            } else {
                arr.push(<FaStar className='accuracy-stars' id={`star-${i-1}`}/>)
            }
        }
        return <>
            <label className='review-label'> <p>Accuracy:</p>
            <div>{arr}</div>
            </label>
        </>
    }
    communication(){
        const arr = [];
        for (let i = 1; i <= 5; i++){
            if (i <= this.state.communication){
                arr.push(<FaStar color='yellow 'className='communication-stars' id={`star-${i-1}`}/>);
            } else {
                arr.push(<FaStar className='communication-stars' id={`star-${i-1}`}/>)
            }
        }
        return <>
            <label className='review-label'> <p>Communication:</p>
            <div>{arr}</div>
            </label>
        </>
    }
    location(){
        const arr = [];
        for (let i = 1; i <= 5; i++){
            if (i <= this.state.location){
                arr.push(<FaStar color='yellow 'className='location-stars' id={`star-${i-1}`}/>);
            } else {
                arr.push(<FaStar className='location-stars' id={`star-${i-1}`}/>)
            }
        }
        return <>
            <label className='review-label'> <p>Location:</p>
            <div>{arr}</div>
            </label>
        </>
    }
    checkIn(){
        const arr = [];
        for (let i = 1; i <= 5; i++){
            if (i <= this.state.check_in){
                arr.push(<FaStar color='yellow 'className='check-in-stars' id={`star-${i-1}`}/>);
            } else {
                arr.push(<FaStar className='check-in-stars' id={`star-${i-1}`}/>)
            }
        }
        return <>
            <label className='review-label'><p> Check-in:</p>
            <div>{arr}</div>
            </label>
        </>
    }
    value(){
        const arr = [];
        for (let i = 1; i <= 5; i++){
            if (i <= this.state.value){
                arr.push(<FaStar color='yellow 'className='value-stars' id={`star-${i-1}`}/>);
            } else {
                arr.push(<FaStar className='value-stars' id={`star-${i-1}`}/>)
            }
        }
        return <>
            <label className='review-label'> <p>Value:</p>
                <div>{arr}</div>
            </label>
        </>
    }

    render(){
        const errors = this.props.errors.map(err => <p className='error-message'>{err}</p>);
        return (
            <>
                <form className='review-form' onSubmit={this.handleSubmit}>
                    <label>
                        <textarea rows='5' cols='30' onChange={this.updateBody} value={this.state.body} placeholder='Comments'></textarea>
                    </label>
                        {this.cleanliness()}<br />
                        {this.accuracy()}<br />
                        {this.communication()}<br />
                        {this.location()}<br />
                        {this.checkIn()}<br />
                        {this.value()}
                        {errors}
                        <button className='fancy-btn'>{this.props.formType} Review</button>
                        <input type="button" className='fancy-btn cancel-btn' value="Clear" onClick={this.clearFields} />
                </form>
            </>
        )
    }

}