class Booking < ApplicationRecord
    validates :guest_id, :listing_id, :check_in_date, :check_out_date, :num_guests, :total_price, presence: true

    belongs_to :guest,
        primary_key: :id,
        foreign_key: :guest_id,
        class_name: :User

    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Listing
end