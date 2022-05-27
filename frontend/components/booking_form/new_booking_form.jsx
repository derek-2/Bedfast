import React from 'react';

export default class NewBookingForm extends React.Component{
    constructor(props){
        super(props);
        const dateObj = new Date();
        const month = (dateObj.getUTCMonth() + 1) < 10 ? '0' + (dateObj.getUTCMonth() + 1) : dateObj.getUTCMonth() + 1; //months from 1-12
        const day = dateObj.getUTCDate() < 10 ? parseInt('0' + dateObj.getUTCDate()) : dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();

        const today = (year + '-' + month + '-' + day);
        this.state = {
            guest_id: this.props.currentUserId,
            listing_id: this.props.listingId,
            check_in_date: today,
            check_out_date: today,
            num_guests: 0,
            total_price: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateDate = this.updateDate.bind(this);
    }

    componentDidMount(){
        this.setState({ total_price: this.props.price });
    }

    update(field){
        return e => {
            e.preventDefault();
            this.setState({[field]:e.currentTarget.value });
        }
    }

    handleSubmit(){
        console.log('hit submit!');
        console.log(this.state);
        this.props.createBooking(this.state)
        // .then(() => this.props.history.push('/')) push to profile page
    }

    updateDate(field,price_per_night){
        return e => {
            e.preventDefault();
            const {check_in_date, check_out_date} = this.state;
            const arr = e.currentTarget.value.split('-');
            if (arr[1].length !== 2) arr[1] = '0'+arr[1];
            if (arr[2].length !== 2) arr[2] = '0'+arr[2];
            const joinedDate = arr.join('-');

            const mysteryDate = new Date(joinedDate);
            const start = new Date(check_in_date);
            const end = new Date(check_out_date);
            let numDays = field === 'check_in_date' ? end-mysteryDate : mysteryDate - start;
            numDays /= (1000 * 60 * 60 * 24)

            this.setState({[field]: joinedDate});
            this.setState({total_price: (numDays+1)*price_per_night})
        }
    }
    
    render(){
        const {price} = this.props; // this is passed down from listing show page
        console.log(this.state);
        const start = new Date(this.state.check_in_date);
        const end = new Date(this.state.check_out_date);
        const num_days = (end - start) / (1000 * 60 * 60 * 24)

        const pricexnights = num_days < 1 ? 
            <><b>${price}</b> x {num_days + 1} night</> : <><b>${price}</b> x {num_days + 1} nights</>;

        return(
            <form className='new-booking-form' onSubmit={this.handleSubmit}>
                <p><b>${price}</b> night</p>
                <div>
                    <div className='new-booking-inputs'>
                        <div className='date-input'>
                            <div className='check-in-input booking-input'>
                                Check In Date:
                                <label>
                                    <input type="date" value={this.state.check_in_date} onChange={this.updateDate('check_in_date',price)}/>
                                </label>
                            </div>
                            <div className='check-out-input booking-input'>
                                Check Out Date:
                                <label>
                                    <input type="date" value={this.state.check_out_date} onChange={this.updateDate('check_out_date',price)}/>
                                </label>
                            </div>
                        </div>
                        <div className='num-guests-input booking-input'>
                            Number of Guests:
                            <label>
                                <input type="number" value={this.state.num_guests} min='0' onChange={this.update('num_guests')} />
                            </label>
                        </div>
                    </div>
                    <button className='session-btn reserve-btn'>Reserve</button>
                </div>
                <div className='booking-costs-container'>
                    <div>
                        Total before taxes:  
                    </div>
                    <div>
                    {pricexnights} = <b>{`$${price * (num_days + 1)}`}</b>
                    </div>
                </div>
            </form>
        )
    }


}