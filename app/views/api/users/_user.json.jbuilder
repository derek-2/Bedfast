json.extract! user, :id, :fname, :lname
json.created_at user.created_at.year

listings = []
bookings = []
reviews = []
user.listings.each do |listing|
    listings << listing.id
end

user.bookings.each do |booking|
    bookings << booking.id
end

user.reviews.each{|review| reviews << review.id}

json.listings listings
json.bookings bookings
json.reviews reviews