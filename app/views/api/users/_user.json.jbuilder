json.extract! user, :id, :fname, :lname

listings = []
bookings = []
user.listings.each do |listing|
    listings << listing.id
end

user.bookings.each do |booking|
    bookings << booking.id
end
json.listings listings
json.bookings bookings