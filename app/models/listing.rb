class Listing < ApplicationRecord
    validates :host_id, :address, :check_in_date, :check_out_date, :max_num_guests, :num_beds, :num_baths, :description, :price_per_night, presence: true
    validates :address, uniqueness: true

end