class Review < ApplicationRecord
    validates :listing_id, :guest_id, :overall_rating, :body, :cleanliness, :accuracy, :communication, :location, :check_in, :value, presence: true
    validate :validateReviews

    belongs_to :reviewer,
        primary_key: :id,
        foreign_key: :guest_id,
        class_name: :User

    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Listing

    private
    def validateReviews
        errors[:ratings] << 'field must all be filled' if [cleanliness, accuracy, communication, location, check_in, value].any?{|field| field == 0}
    end

end
