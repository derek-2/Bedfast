class Api::ListingsController < ApplicationController
    def index
        @listings = []
        if (params[:searchParams].empty? && params[:guests].empty?) || (params[:searchParams] == 'undefined' && params[:guests] == 'undefined')
            @listings = Listing.all
        elsif params[:searchParams].empty? || params[:searchParams] == 'undefined'
            @listings = Listing.where('max_num_guests >= ?', params[:guests])
        elsif params[:guests].empty? || params[:guests] == 'undefined'
            @listings = Listing.all.select do |listing|
                            listing.city.downcase.include?(params[:searchParams].downcase) || listing.state.downcase.include?(params[:searchParams].downcase) || listing.address.downcase.include?(params[:searchParams].downcase)
                        end
        else
            @listings = Listing.all.select do |listing|
                listing.max_num_guests >= params[:guests].to_i && (listing.city.downcase.include?(params[:searchParams].downcase) || listing.state.downcase.include?(params[:searchParams].downcase) || listing.address.downcase.include?(params[:searchParams].downcase))
            end
        end
        render :index
    end
    
    def show
        @listing = Listing.find_by(id: params[:id])
        if @listing
            render :show
        else
            render json: ['listing with that id does not exist'], status: 404
        end
    end
    
    def user_listings
        @listings = Listing.where('host_id = ?', params[:id])
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

    def update
        @listing = Listing.find_by(id: params[:id])
        debugger
        if @listing
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def destroy
        @listing = Listing.find_by(id: params[:id])
        if @listing
            @listing.destroy
            render json: {message: 'Listing destroyed'}
        end
    end

    def listing_params
        params.require(:listing).permit(:title, :description, :host_id, :address, :city, :state, :zipcode, :latitude, :longitude, :max_num_guests, :num_beds, :num_baths, :price_per_night, photos:[])
    end

end