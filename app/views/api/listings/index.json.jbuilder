# debugger
json.array! @listings.each do |listing|
    # debugger
    json.extract! listing, :id, :title, :description, :host_id, :address, :city, :state, :zipcode, :latitude, :longitude, :max_num_guests, :num_beds, :num_baths, :price_per_night

    # json.photoUrls
    #     listing.photos.map do |photo|
    #     # debugger
    #     url_for(photo)
    # end
    arr = []
    # debugger
    listing.photos.map do |photo|
        # debugger
        arr << url_for(photo)
        # debugger
    end

    json.photoUrls arr
end