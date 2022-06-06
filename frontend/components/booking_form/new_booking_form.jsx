import React from 'react';
import Calendar from 'react-calendar'

export default class NewBookingForm extends React.Component{
    constructor(props){
        super(props);
        const dateObj = new Date();
        const month = (dateObj.getUTCMonth() + 1) < 10 ? '0' + (dateObj.getUTCMonth() + 1) : dateObj.getUTCMonth() + 1; //months from 1-12
        const day = dateObj.getUTCDate() < 10 ? '0' + dateObj.getUTCDate() : dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();

        const today = (year + '-' + month + '-' + day);
        this.state = {
            guest_id: null,
            listing_id: this.props.listingId,
            check_in_date: today,
            check_out_date: today,
            num_guests: 0,
            total_price: 0,
            errors: [],
            successMessage: '',
            reservedDates: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateDate = this.updateDate.bind(this);
    }

    getDatesInRange(startDate, endDate) {
        const date = new Date(startDate.getTime());
      
        const dates = [];
      
        while (date <= endDate) {
          dates.push(new Date(date));
          date.setDate(date.getDate() + 1);
        }
      
        return dates;
      }


    componentDidMount(){
        this.setState({ total_price: this.props.price });
        function getDatesInRange(startDate, endDate) {
            const date = new Date(startDate.getTime());
          
            const dates = [];
          
            while (date <= endDate) {
              dates.push(new Date(date));
              date.setDate(date.getDate() + 1);
            }
          
            return dates;
          }
        $.ajax({
            url: `/api/listings/${this.props.match.params.listingId}/bookings`
        }).then(res => {
            let arr = [];
            Object.values(res).forEach(booking => {
                const check_in = booking.check_in_date;
                const check_out = booking.check_out_date;
                const startDate = new Date(parseInt(check_in.slice(0,4)), parseInt(check_in.slice(5,7))-1, parseInt(check_in.slice(8,10)))
                const endDate = new Date(parseInt(check_out.slice(0,4)), parseInt(check_out.slice(5,7))-1, parseInt(check_out.slice(8,10)))
                arr = arr.concat(getDatesInRange(startDate, endDate));
            })
            this.setState({reservedDates:this.state.reservedDates.concat(arr)})}
        )
    }

    update(field){
        return e => {
            e.preventDefault();
            this.setState({[field]:e.currentTarget.value });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        // console.log(this.props.currentUser)
        if (this.props.currentUser){
            this.setState({guest_id: this.props.currentUser.id}, () => {
                this.props.createBooking(this.state)
                    .then(() => {
                        let arr = [];
                        Object.values(this.props.bookings).forEach(booking => {
                            const check_in = booking.check_in_date;
                            const check_out = booking.check_out_date;
                            const startDate = new Date(parseInt(check_in.slice(0,4)), parseInt(check_in.slice(5,7))-1, parseInt(check_in.slice(8,10)))
                            const endDate = new Date(parseInt(check_out.slice(0,4)), parseInt(check_out.slice(5,7))-1, parseInt(check_out.slice(8,10)))
                            arr = arr.concat(this.getDatesInRange(startDate, endDate));
                        })
                        this.setState({successMessage: 'Booking successfully reserved!',reservedDates: this.state.reservedDates.concat(arr)})})
            })                
        } else {
            this.setState({errors: ['Must be logged in to reserve a booking!']});
        }
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
        const {price, errors} = this.props; // this is passed down from listing show page
        // console.log(this.state.reservedDates);
        const start = new Date(this.state.check_in_date);
        const end = new Date(this.state.check_out_date);
        const num_days = (end - start) / (1000 * 60 * 60 * 24)

        const allErrors = [];
        errors.length > 0 ? errors.forEach((err,idx) => allErrors.push(<p className='error-message' key={idx}>{err}</p>)) : <></>;
        this.state.errors.length > 0 ? this.state.errors.forEach((err,idx) => allErrors.push(<p className='error-message' key={idx}>{err}</p>)) : <></>;

        const pricexnights = num_days < 1 ? 
            <><b>${price}</b> x {num_days + 1} night</> : <><b>${price}</b> x {num_days + 1} nights</>;

        return(
            <form className='new-booking-form' onSubmit={this.handleSubmit}>
                <p><b>${price}</b>/night</p>
                <div>
                    <div className='new-booking-inputs'>
                        <div className='date-input'>
                            <div className='check-in-input booking-input'>
                                Check In Date:
                                <label>
                                    <input required type="date" value={this.state.check_in_date} onChange={this.updateDate('check_in_date',price)}/>
                                </label>
                            </div>
                            <div className='check-out-input booking-input'>
                                Check Out Date:
                                <label>
                                    <input required type="date" value={this.state.check_out_date} onChange={this.updateDate('check_out_date',price)}/>
                                </label>
                            </div>
                        </div>
                        <div className='num-guests-input booking-input'>
                            Number of Guests:
                            <label>
                                <input type="number" value={this.state.num_guests} min='0' onChange={this.update('num_guests')} />
                            </label>
                        </div>
                        <Calendar 
                            tileClassName={({ date}) => {
        // const reservedDates = [new Date(2022,5,4),new Date(2022,5,3),new Date(2022,5,2),new Date(2022,5,1) ]                     
                                let any = false;
                                this.state.reservedDates.forEach(el => {
                                    if (el - date === 0){
                                        any = true;
                                        return;
                                    }
                                })
                                return any ? 'highlight' : null;
                              }}
                        />
                    </div>
                    {allErrors}
                    {this.state.successMessage ? <p className='success-message'>{this.state.successMessage}</p> : <></>}
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