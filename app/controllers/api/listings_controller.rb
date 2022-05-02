class Api::ListingsController < ApplicationController
    def index

        @listings = params[:searchParams] ?
         Listing.all.select do |listing|
            listing.city.downcase.include?(params[:searchParams].downcase) || listing.state.downcase.include?(params[:searchParams].downcase) || listing.address.downcase.include?(params[:searchParams].downcase)
        end :
        @listings = Listing.all

        # debugger
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
        params.require(:listing).permit(:title, :description, :host_id, :address, :city, :state, :zipcode, :latitude, :longitude, :max_num_guests, :num_beds, :num_baths, :price_per_night, photos:[])
    end

end