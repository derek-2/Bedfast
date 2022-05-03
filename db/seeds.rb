# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Listing.destroy_all

User.create(email: 'Demo', fname: 'Demo', lname: 'Demo', password: 'password')
User.create(email: 'derek', fname: 'derek', lname: 'derek', password: 'password')

listing1= Listing.create(title: 'cool house 147' , description: 'very cool', host_id:1, address: '123 grand st', city: 'NY', state: 'NY', zipcode: '10012', latitude: '40.615442', longitude:' -73.993055', max_num_guests: 2, num_beds: 2, num_baths: 1, price_per_night: 99)

# listing2= Listing.create(title: 'GREAT HOUSE 229', description: 'GREAT', host_id:3, address: '1243 N Sterling St', city: 'UNION CITY', state: 'IN', zipcode: '47390', latitude: '57.135130', longitude:'15.253259', max_num_guests: 5, num_beds: 4, num_baths: 3, price_per_night: 149)

listing3= Listing.create(title: 'THE AIGHT HOUSE', description: 'IT\'S AIGHT I GUESS', host_id:2, address: '421 Monmouth St', city: 'TRENTON', state: 'NJ', zipcode: '08609', latitude: '40.733005', longitude:'-73.989027', max_num_guests: 1, num_beds: 1, num_baths: 1, price_per_night: 77)

listing1.photos.attach(io: File.open('app/assets/images/seed/cool_house.jpg'), filename: 'cool_house.jpg')
# listing1.photos.attach(io: File.open("/Users/derek/desktop/images/cool_house.jpg"), filename: 'cool_house.jpg')
# listing2.photos.attach(io: File.open("/Users/derek/desktop/images/great_house.jpg"), filename: 'great_house.jpg')
listing3.photos.attach(io: File.open('app/assets/images/seed/the_aight_house.jpg'), filename: 'the_aight_house.jpg')
