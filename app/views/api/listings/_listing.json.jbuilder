json.extract! listing, :id, :title, :description, :host_id, :address, :city, :state, :zipcode, :latitude, :longitude, :max_num_guests, :num_beds, :num_baths, :price_per_night
arr = []

listing.photos.map do |photo|
    arr << url_for(photo)
end

json.photoUrls arr

json.host_name "#{listing.host.fname} #{listing.host.lname}"

bookings = [];
listing.bookings.each{|booking| bookings << booking.id}
json.bookings bookings