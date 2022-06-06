# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Listing.destroy_all

user1= User.create(email: 'demo@gmail.com', fname: 'demo', lname: 'demo', password: 'password')
user2= User.create(email: 'derek@gmail.com', fname: 'derek', lname: 'lee', password: 'superhiddenpassword')

user2.photo.attach(io: File.open('app/assets/images/seed/rilakkuma.jpg'), filename: 'cool_house.jpg')

listing1= Listing.create(title: 'cool house 147' , description: 'very cool', host_id:user1.id, address: '123 grand st', city: 'NY', state: 'NY', zipcode: '10012', latitude: '40.615442', longitude:'-73.993055', max_num_guests: 2, num_beds: 2, num_baths: 1, price_per_night: 99)

listing2= Listing.create(title: 'The Aight House', description: 'IT\'S AIGHT I GUESS', host_id:user2.id, address: '421 Monmouth St', city: 'TRENTON', state: 'NJ', zipcode: '08609', latitude: '40.733005', longitude:'-73.989027', max_num_guests: 1, num_beds: 1, num_baths: 1, price_per_night: 77)

listing3= Listing.create(title: 'National at 888 Sixth Avenue - Studio' , description: 'Entire rental unit hosted by National Corporate Housing', host_id:user1.id, address: '123 14th st', city: 'NY', state: 'NY', zipcode: '10012', latitude: '40.689377', longitude:'-73.985991', max_num_guests: 5, num_beds: 5, num_baths: 3, price_per_night: 205)

listing4= Listing.create(title: 'Entire Apartment - Spacious 1 BR in West Village' , description: 'Entire rental unit hosted by Austin', host_id:user2.id, address: '246 2846792nd st', city: 'NY', state: 'NY', zipcode: '10012', latitude: '40.722775', longitude:'-73.992155', max_num_guests: 4, num_beds: 2, num_baths: 1, price_per_night: 155)

listing5= Listing.create(title: 'Skyline views in Lower Manhattan' , description: 'Room in hotel hosted by Millennium Downtown', host_id:user1.id, address: '987 151351123ave', city: 'NY', state: 'NY', zipcode: '10012', latitude: '40.709818', longitude:'-74.011697', max_num_guests: 2, num_beds: 1, num_baths: 1, price_per_night: 379)

listing1.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing1.photos.attach(io: File.open('app/assets/images/seed/image1.jpg'), filename: 'image1.jpg')
listing1.photos.attach(io: File.open('app/assets/images/seed/image2.jpg'), filename: 'image2.jpg')
listing1.photos.attach(io: File.open('app/assets/images/seed/image3.jpg'), filename: 'image3.jpg')
listing1.photos.attach(io: File.open('app/assets/images/seed/image4.jpg'), filename: 'image4.jpg')

listing2.photos.attach(io: File.open('app/assets/images/seed/the_aight_house.jpg'), filename: 'the_aight_house.jpg')
listing2.photos.attach(io: File.open('app/assets/images/seed/image5.jpg'), filename: 'image5.jpg')
listing2.photos.attach(io: File.open('app/assets/images/seed/image6.jpg'), filename: 'the_aight_house.jpg')
listing2.photos.attach(io: File.open('app/assets/images/seed/image7.jpg'), filename: 'image7.jpg')
listing2.photos.attach(io: File.open('app/assets/images/seed/image8.jpg'), filename: 'the_aight_house.jpg')

listing3.photos.attach(io: File.open('app/assets/images/seed/great_house.jpg'), filename: 'great_house.jpg')
listing3.photos.attach(io: File.open('app/assets/images/seed/image9.jpg'), filename: 'image9.jpg')
listing3.photos.attach(io: File.open('app/assets/images/seed/image10.jpg'), filename: 'image10.jpg')
listing3.photos.attach(io: File.open('app/assets/images/seed/image11.jpg'), filename: 'image11.jpg')
listing3.photos.attach(io: File.open('app/assets/images/seed/image12.jpg'), filename: 'cool_house.jpg')

listing4.photos.attach(io: File.open('app/assets/images/seed/image1.jpg'), filename: 'image1.jpg')
listing4.photos.attach(io: File.open('app/assets/images/seed/image5.jpg'), filename: 'image5.jpg')
listing4.photos.attach(io: File.open('app/assets/images/seed/image9.jpg'), filename: 'image9.jpg')
listing4.photos.attach(io: File.open('app/assets/images/seed/image6.jpg'), filename: 'image6.jpg')
listing4.photos.attach(io: File.open('app/assets/images/seed/image10.jpg'), filename: 'image10.jpg')

listing5.photos.attach(io: File.open('app/assets/images/seed/image2.jpg'), filename: 'image2.jpg')
listing5.photos.attach(io: File.open('app/assets/images/seed/image7.jpg'), filename: 'image7.jpg')
listing5.photos.attach(io: File.open('app/assets/images/seed/image12.jpg'), filename: 'image12.jpg')
listing5.photos.attach(io: File.open('app/assets/images/seed/image8.jpg'), filename: 'image8.jpg')
listing5.photos.attach(io: File.open('app/assets/images/seed/image11.jpg'), filename: 'image11.jpg')

booking1 = Booking.create(guest_id: user1.id, listing_id:listing1.id, check_in_date:Date.new(2022, 5, 18).to_formatted_s(:number).to_i, check_out_date: Date.new(2022, 6,5).to_formatted_s(:number).to_i, num_guests: 2, total_price: 1881)
booking2 = Booking.create(guest_id: user2.id, listing_id:listing2.id, check_in_date:Date.new(2022, 6, 20).to_formatted_s(:number).to_i, check_out_date: Date.new(2022, 6, 30).to_formatted_s(:number).to_i, num_guests: 3, total_price: 847)
booking3 = Booking.create(guest_id: user1.id, listing_id:listing3.id, check_in_date:Date.new(2022, 6, 20).to_formatted_s(:number).to_i, check_out_date: Date.new(2022, 6, 30).to_formatted_s(:number).to_i, num_guests: 4, total_price: 2255)
booking4 = Booking.create(guest_id: user2.id, listing_id:listing4.id, check_in_date:Date.new(2022, 6, 20).to_formatted_s(:number).to_i, check_out_date: Date.new(2022, 6, 30).to_formatted_s(:number).to_i, num_guests: 5, total_price: 1705)
booking5 = Booking.create(guest_id: user2.id, listing_id:listing5.id, check_in_date:Date.new(2022, 6, 20).to_formatted_s(:number).to_i, check_out_date: Date.new(2022, 6, 30).to_formatted_s(:number).to_i, num_guests: 10, total_price: 4169)

review1 = Review.create(listing_id: listing1.id, guest_id: user2.id, overall_rating: 5, body: 'This was a great experience. Super nice host!', cleanliness: 5, accuracy: 5, communication: 5, location: 5, check_in: 5, value: 5)
review2 = Review.create(listing_id: listing2.id, guest_id: user1.id, overall_rating: 1, body: 'This was a terrible experience. Host did not care one bit about my concerns! 0/5 if I could give them a 0!', cleanliness: 1, accuracy: 1, communication: 1, location: 1, check_in: 1, value: 1)
review3 = Review.create(listing_id: listing2.id, guest_id: user1.id, overall_rating: 1, body: 'The last time I did this, it was a terrible experience. This time was not an exception!', cleanliness: 1, accuracy: 1, communication: 1, location: 1, check_in: 1, value: 1)