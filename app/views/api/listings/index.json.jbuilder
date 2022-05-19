# json.array! @listings.each do |listing|
#     json.extract! listing, :id, :title, :description, :host_id, :address, :city, :state, :zipcode, :latitude, :longitude, :max_num_guests, :num_beds, :num_baths, :price_per_night

#     # json.photoUrls
#     #     listing.photos.map do |photo|
#     #     url_for(photo)
#     # end
#     arr = []

#     listing.photos.map do |photo|
#         arr << url_for(photo)
#     end

#     json.photoUrls arr
#     json.host_name "#{listing.host.fname} #{listing.host.lname}"
#     # json.bookings listing.bookings, :check_in_date, :check_out_date
# end

json.array! @listings.each do |listing|
    json.partial! '/api/listings/listing', listing: listing
end