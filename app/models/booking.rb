class Booking < ApplicationRecord
    validates :guest_id, :listing_id, :check_in_date, :check_out_date, :num_guests, :total_price, presence: true
    validate :overlapping

    belongs_to :guest,
        primary_key: :id,
        foreign_key: :guest_id,
        class_name: :User

    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Listing
        
    private
    def overlapping
        errors[:booking_time] << 'is already reserved by another user' if Listing.find(listing_id).bookings.any? do |booking|
            (check_in_date >= booking.check_in_date && check_in_date <= booking.check_out_date) || (check_out_date <= booking.check_out_date && check_out_date >= booking.check_in_date)
        end
    end
end