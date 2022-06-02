class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.all
        render :index
    end

    def show
        @review = Review.find_by(id: params[:id])
        if @review
            render :show
        else
            render json: ['review with that id does not exist'], status: 404
        end
    end

    def user_reviews #fetch reviews by user who wrote it
        @reviews = Review.where('guest_id = ?', params[:id])
        render :index
    end

    def listing_reviews #fetch reviews by listing
        @reviews = Review.where('listing_id = ?', params[:id])
        render :index
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:review][:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])

        if @review
            @review.destroy
            render json: {message: 'review destroyed'}
        end
    end

    def review_params
        params.require(:review).permit(:listing_id, :guest_id, :overall_rating, :body, :cleanliness, :accuracy, :communication, :location, :check_in, :value) 
    end

end