class Review < ApplicationRecord
    validates :listing_id, :guest_id, :overall_rating, :body, :cleanliness, :accuracy, :communication, :location, :check_in, :value, presence: true

    belongs_to :reviewer,
        primary_key: :id,
        foreign_key: :guest_id,
        class_name: :User

    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Listing

end
