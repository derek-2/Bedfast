# Welcome to Bedfast

~Check out the [Live Site](https://bedfast.herokuapp.com/)!~

Bedfast is no longer hosted on Heroku. This is built using Ruby 2.5.1 and Rails 5.2.3.

To run the project locally:
1. `cd Bedfast`
2. `npm install`
3. `bundle install`
4. In `app/views/layouts/application.html.erb`, you need to get a free map api key from google https://developers.google.com/maps/documentation/javascript and replace `#{Rails.application.credentials.google[:MAPS_API_KEY]}` with the api key
5. Run PostgreSQL
6. open 2 terminals and in the root directory, run `rails s` and `npm run webpack`

## Introduction
Bedfast is a clone of AirBnB, an online platform for listing and renting homes. A user can create and login to their accounts, and have basic CRUD (create read update and delete) features for listings, bookings, and reviews.

![image](https://user-images.githubusercontent.com/59910096/178402009-fec02f02-1d1f-4db2-893d-617d87153cea.png)


Technologies used:
- Languages: Javascript, Ruby, HTML, and CSS
- Frontend: React-Redux
- Database: PostgreSQL
- Hosting: Heroku
- Asset Storage: AWS Simple Cloud Storage (S3)
- APIs: Google Maps

# MVPs
## Listings
A user will be able to create new listings if they are logged in, which persists to the backend and sends the images attached to the listing to AWS S3, and edit/delete listings they've created. All users will be able to view the listing show pages for any listings. 
- The edit listing button is rendered conditionally based on who's logged in and the host of the listing. 
```jsx 
    <div>
        {host_id === this.props.currentUserId ?<Link to={`/listings/${this.props.match.params.listingId}/edit`} className='fancy-btn'>Edit this Listing</Link> : <></> }
    </div>
```
- The map shown on the listing show and index page are rendering the same map, but are passed in different listings. The map is centered based on the params in the URL.If it is a listing show page, the map is centered on the listing's coordinates, if there is a location wildcard in the URL, it gets the coordinates of that location and centers the map based on that, otherwise, the map is centered in NYC if no location was found.
```jsx
if (this.props.type === 'listing map'){
      const {latitude, longitude} = this.props.listings[0];
      this.generateMap({lat: latitude, lng: longitude});
    }
    else if (this.props.match.params.location){
      getPos(this.props.match.params.location).then(res => {
        if (res.status === 'OK'){
          let center = {};
          center.lat = res.results[0].geometry.location.lat
          center.lng = res.results[0].geometry.location.lng
          this.generateMap(center);
        } else {
          this.generateMap({lat: 40.688641, lng: -73.960258})
        }
      })
    } else {
      this.generateMap({lat: 40.688641, lng: -73.960258})
    }
```
![listing](https://user-images.githubusercontent.com/59910096/173415020-05a9b496-66e6-4ed4-b7b6-939be0e9cd1d.gif)
- Listing photos can be added and deleted when creating a listing. The photos array is sliced when users click on a photo to remove it.
```jsx
updatePhotos(e){
        let arr = [];
        arr=arr.concat(Object.values(e.target.files).map(photo => URL.createObjectURL(photo)))

        this.setState(
            {
            photos: this.state.photos.concat(Object.values(e.target.files)),
            previewPhotos: this.state.previewPhotos.concat(arr)
            }
        )
    }

removePhoto(idx){
         this.setState({
            photos: this.state.photos.slice(0,idx).concat(this.state.photos.slice(idx+1)),
            previewPhotos: this.state.previewPhotos.slice(0,idx).concat(this.state.previewPhotos.slice(idx+1))
        })
    }
```
![delete-photos](https://user-images.githubusercontent.com/59910096/173414715-fd13fa5f-31fc-403a-a2a0-e37396b30159.gif)

## Bookings
- Users who are logged in can reserve a booking for a specific listing. Bookings that are available are marked green while booking times taken are colored red. All the bookings for a specific listing is fetched and all bookings have a start date and end date. To properly color the booking dates, we need to get all the dates in between the start and end dates. There is also custom model validation to check if the booking date overlaps with any existing booking.
- Users are able to create, delete, and view their bookings.
```jsx
getDatesInRange(startDate, endDate) {
        const date = new Date(startDate.getTime());
      
        const dates = [];
      
        while (date <= endDate) {
          dates.push(new Date(date));
          date.setDate(date.getDate() + 1);
        }
      
        return dates;
    }
```
```rb
    def overlapping
        errors[:booking_time] << 'is already reserved by another user' if Listing.find(listing_id).bookings.any? do |booking|
            (check_in_date >= booking.check_in_date && check_in_date <= booking.check_out_date) || (check_out_date <= booking.check_out_date && check_out_date >= booking.check_in_date)
        end
    end
```
![booking form calendar](https://user-images.githubusercontent.com/59910096/173415105-ae1770e2-b53a-4b10-9fe9-83d17f7c9d02.PNG)

## Reviews
- Users logged in can leave a review for a listing and can give up to 5 stars for each category, in which the overall rating will be calculated. On the listings page, the average rating of all reviews will be rendered if that listing has at least one review. 
- All users can see reviews for a specific listing and additionally, users can edit and delete their reviews.
```jsx
<div className='review-avg'>
    <p>Cleanliness</p>
    <div className='line-container'>
        <div className='line'></div>
        <div className='line line1'></div>
        <div style={{width:`${avgCleanliness/5*100}%`}} className='line line2'></div>
    </div>
    <p>{avgCleanliness}</p>
</div>
```
![image](https://user-images.githubusercontent.com/59910096/173415643-7e66b4b9-3dd4-446b-9f3d-e75d32b7d07f.png)

## Search
- All users can search for listings. The user can input a search parameter for location and max number of guests, which fetches all listings that have that search term in their address, city, or state fields and allows that number of guests.
```rb
def index
    @listings = []
    if (params[:searchParams].empty? && params[:guests].empty?) || (params[:searchParams] == 'undefined' && params[:guests] == 'undefined')
        @listings = Listing.all
    elsif params[:searchParams].empty? || params[:searchParams] == 'undefined'
        @listings = Listing.where('max_num_guests >= ?', params[:guests])
    elsif params[:guests].empty? || params[:guests] == 'undefined'
        @listings = Listing.all.select do |listing|
                        listing.city.downcase.include?(params[:searchParams].downcase) || listing.state.downcase.include?(params[:searchParams].downcase) || listing.address.downcase.include?(params[:searchParams].downcase)
                    end
    else
        @listings = Listing.all.select do |listing|
            listing.max_num_guests >= params[:guests].to_i && (listing.city.downcase.include?(params[:searchParams].downcase) || listing.state.downcase.include?(params[:searchParams].downcase) || listing.address.downcase.include?(params[:searchParams].downcase))
        end
    end
    render :index
end
```
![image](https://user-images.githubusercontent.com/59910096/173415740-89f1d058-bbaf-43d7-8025-309a2e11bcb3.png)


## Profile
- Users can access their own profile page through the navbar. On their own profile page, they can:
    - see their listings, bookings for each of their listings, bookings they reserved, and reviews they've created
    - edit their profile picture
- Users can also access other profile pages through listings and reviews. When viewing another user profile page, it only shows their listings

![profile](https://user-images.githubusercontent.com/59910096/173416200-82487365-dae2-4cf6-9187-534e91340528.gif)
