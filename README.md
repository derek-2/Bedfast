# Welcome to Bedfast

Check out the [Live Site](https://bedfast.herokuapp.com/)!

## Introduction
Bedfast is a clone of AirBnB. AirBnB is an online platform for listing and renting homes. A user can create and login to their accounts, and have basic CRUD (create read update and delete) features for listings, bookings, and reviews.

Technologies used:
- Languages: Javascript, Ruby, HTML, and CSS
- Frontend: React-Redux
- Database: PostgreSQL
- Hosting: Heroku
- Asset Storage: AWS Simple Cloud Storage (S3)
- APIs: Google Maps

# MVPs
## Listings
A user will be able to create new listings if they are logged in, which persists to the backend and sends the images attached to the listing to AWS S3.

A user can view all listings with specific search terms. A map will be rendered with a marker on all of the listing's (latitude, longitude).

<img width="1434" alt="Screen Shot 2022-05-06 at 10 27 26 AM" src="https://user-images.githubusercontent.com/59910096/167153218-e9b71b4b-3a1b-4bd5-99e3-9bd92f043571.png">
