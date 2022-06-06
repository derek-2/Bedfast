# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Listing.destroy_all

user1= User.create(email: 'Demo', fname: 'Demo', lname: 'Demo', password: 'password')
user2= User.create(email: 'derek', fname: 'derek', lname: 'derek', password: 'password')

listing1= Listing.create(title: 'cool house 147' , description: 'very cool', host_id:user1.id, address: '123 grand st', city: 'NY', state: 'NY', zipcode: '10012', latitude: '40.615442', longitude:'-73.993055', max_num_guests: 2, num_beds: 2, num_baths: 1, price_per_night: 99)

# listing2= Listing.create(title: 'GREAT HOUSE 229', description: 'GREAT', host_id:3, address: '1243 N Sterling St', city: 'UNION CITY', state: 'IN', zipcode: '47390', latitude: '57.135130', longitude:'15.253259', max_num_guests: 5, num_beds: 4, num_baths: 3, price_per_night: 149)

listing3= Listing.create(title: 'THE AIGHT HOUSE', description: 'IT\'S AIGHT I GUESS', host_id:user2.id, address: '421 Monmouth St', city: 'TRENTON', state: 'NJ', zipcode: '08609', latitude: '40.733005', longitude:'-73.989027', max_num_guests: 1, num_beds: 1, num_baths: 1, price_per_night: 77)

listing4= Listing.create(title: 'National at 888 Sixth Avenue - Studio' , description: 'Entire rental unit hosted by National Corporate Housing', host_id:user1.id, address: '123 14th st', city: 'NY', state: 'NY', zipcode: '10012', latitude: '40.689377', longitude:'-73.985991', max_num_guests: 5, num_beds: 5, num_baths: 3, price_per_night: 205)

listing5= Listing.create(title: 'Entire Apartment - Spacious 1 BR in West Village' , description: 'Entire rental unit hosted by Austin', host_id:user2.id, address: '246 2846792nd st', city: 'NY', state: 'NY', zipcode: '10012', latitude: '40.722775', longitude:'-73.992155', max_num_guests: 4, num_beds: 2, num_baths: 1, price_per_night: 155)

listing6= Listing.create(title: 'Skyline views in Lower Manhattan' , description: 'Room in hotel hosted by Millennium Downtown', host_id:user1.id, address: '987 151351123ave', city: 'NY', state: 'NY', zipcode: '10012', latitude: '40.709818', longitude:'-74.011697', max_num_guests: 2, num_beds: 1, num_baths: 1, price_per_night: 379)

listing1.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing1.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing1.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing1.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing1.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing4.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing4.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing4.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing4.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing4.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing5.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing5.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing5.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing5.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing5.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing6.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing6.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing6.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing6.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
listing6.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
# listing1.photos.attach(io: File.open("/Users/derek/desktop/images/cool_house.jpg"), filename: 'cool_house.jpg')
# listing2.photos.attach(io: File.open("/Users/derek/desktop/images/great_house.jpg"), filename: 'great_house.jpg')
listing3.photos.attach(io: File.open('app/assets/images/seed/the_aight_house.jpg'), filename: 'the_aight_house.jpg')
listing3.photos.attach(io: File.open('app/assets/images/seed/the_aight_house.jpg'), filename: 'the_aight_house.jpg')
listing3.photos.attach(io: File.open('app/assets/images/seed/the_aight_house.jpg'), filename: 'the_aight_house.jpg')
listing3.photos.attach(io: File.open('app/assets/images/seed/the_aight_house.jpg'), filename: 'the_aight_house.jpg')
listing3.photos.attach(io: File.open('app/assets/images/seed/the_aight_house.jpg'), filename: 'the_aight_house.jpg')

booking1 = Booking.create(guest_id: user1.id, listing_id:listing1.id, check_in_date:Date.new(2022, 5, 18).to_formatted_s(:number).to_i, check_out_date: Date.new(2022, 6,5).to_formatted_s(:number).to_i, num_guests: 2, total_price: 9000)
booking2 = Booking.create(guest_id: user2.id, listing_id:listing3.id, check_in_date:Date.new(2022, 6, 20).to_formatted_s(:number).to_i, check_out_date: Date.new(2022, 6, 30).to_formatted_s(:number).to_i, num_guests: 420, total_price: 42069)