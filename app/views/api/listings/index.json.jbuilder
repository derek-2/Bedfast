json.array! @listings.each do |listing|
    json.extract! listing, :id, :title, :description, :host_id, :address, :city, :state, :zipcode, :latitude, :longitude, :max_num_guests, :num_beds, :num_baths, :price_per_night
    # debugger;
    json.photoUrl listing.photos.map{|photo| url_for(photo)}
end