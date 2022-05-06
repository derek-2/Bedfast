json.array! @listings.each do |listing|
    json.extract! listing, :id, :title, :description, :host_id, :address, :city, :state, :zipcode, :latitude, :longitude, :max_num_guests, :num_beds, :num_baths, :price_per_night

    # json.photoUrls
    #     listing.photos.map do |photo|
    #     url_for(photo)
    # end
    arr = []

    listing.photos.map do |photo|
        arr << url_for(photo)
    end

    json.photoUrls arr
end