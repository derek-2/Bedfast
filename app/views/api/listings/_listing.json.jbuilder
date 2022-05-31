json.extract! listing, :id, :title, :description, :host_id, :address, :city, :state, :zipcode, :latitude, :longitude, :max_num_guests, :num_beds, :num_baths, :price_per_night

photo_arr = []
listing.photos.map{|photo| photo_arr << url_for(photo)}
json.photoUrls photo_arr

json.host_name "#{listing.host.fname} #{listing.host.lname}"

bookings = []
listing.bookings.each{|booking| bookings << booking.id}
json.bookings bookings

review_arr = []
listing.reviews.each{|review| review_arr << review.id}
json.reviews review_arr