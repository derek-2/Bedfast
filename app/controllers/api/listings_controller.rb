class Api::ListingsController < ApplicationController
    def index
        @listings = Listing.all
        render :index
    end

    def create
        @listing = Listing.new(listing_params)

        if @listing.save
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def show
        @listing = Listing.find(params[:listing][:id])
        render :show
    end

    def update
        @listing = Listing.find(params[:listing][:id])

        if @listing.update(listing_params)
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def destroy
        @listing = Listing.find(params[:id])
        if @listing
            @listing.destroy
            render json: {message: 'Listing Destroyed'}
        end
    end

    def listing_params
        params.require(:listing).permit(:host_id, :location, :check_in_date, :check_out_date, :max_num_guests, :num_beds, :num_baths, :description, :price_per_night)
    end

end