class Api::BookingsController < ApplicationController
    def index
        @bookings = Booking.all 
        render :index
    end

    def show
        @booking = Booking.find_by(id: params[:id])
        if @booking
            render :show
        else
            render json: ['booking doesn\'t exist'], status: 404
        end
    end

    def user_bookings
        @bookings = Booking.where('guest_id = ?', params[:id])
        render :index
    end

    def listing_bookings
        @bookings = Booking.where('listing_id = ?', params[:id])
        render :listing_bookings
    end

    def create
        @booking = Booking.new(booking_params)
        if @booking.save
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def update
        @booking = Booking.find_by(id: params[:id])
        if @booking.update(booking_params)
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def destroy
        @booking = Booking.find_by(id: params[:id])
        if @booking
            @booking.destroy
            render json: {message: 'Booking destroyed'}
        end
    end

    def booking_params
        params.require(:booking).permit(:guest_id, :listing_id, :check_in_date, :check_out_date, :num_guests, :total_price)
    end
end