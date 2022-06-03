class Listing < ApplicationRecord
    validates :title, :host_id, :address, :city, :state, :zipcode, :latitude, :longitude, :max_num_guests, :num_beds, :num_baths, :description, :price_per_night, presence: true
    validates :address, uniqueness: true
    validate :validate_photos

    belongs_to :host,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :User

    has_many_attached :photos

    has_many :bookings,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Booking

    has_many :reviews,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Review

    private
    def validate_photos
        if photos.length != 5
            errors[:must_upload_exactly_5_photos] << ''
        end
    end

end