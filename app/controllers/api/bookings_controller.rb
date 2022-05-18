class Api::BookingsController < ApplicationController
    def index
        @bookings = Booking.all 
        render :index
    end

    def show
        @booking = Booking.find(params[:id])
        render :show
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
        @booking = Booking.find(params[:id])
        if @booking.update(booking_params)
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def destroy
        @booking = Booking.find(params[:id])
        if @booking
            @booking.destroy
            render json: {message: 'Booking destroyed'}
        end
    end

    def booking_params
        params.require(:booking).permit(:guest_id, :listing_id, :check_in_date, :check_out_date, :num_guests, :total_price)
    end
end