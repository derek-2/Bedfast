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

json.profile_pic url_for(user.photo) if user.photo.attached?
json.about_me user.about_me if user.about_me

json.listings listings
json.bookings bookings
json.reviews reviews