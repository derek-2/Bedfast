class Listing < ApplicationRecord
    validates :title, :host_id, :address, :city, :state, :zipcode, :latitude, :longitude, :max_num_guests, :num_beds, :num_baths, :description, :price_per_night, presence: true
    validates :address, uniqueness: true

end