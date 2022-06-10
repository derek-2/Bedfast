import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';

// import { login, logout, signUp} from './actions/session_actions';
// import { createListing, editListing, fetchListing, fetchListings, deleteListing, fetchListingsByUser } from './actions/listing_actions';
// import {fetchUsers, fetchUser} from './actions/user_actions';
// import * as BookingActions from './actions/booking_actions';
// import * as ReviewActions from './actions/review_actions';
// import { getPos } from './util/listings_api_util';

document.addEventListener('DOMContentLoaded', ()=> {
  const root = document.getElementById('root');

  // window.login = login;
  // window.logout = logout;
  // window.signUp = signUp;

  // window.createListing = createListing;
  // window.editListing = editListing;
  // window.fetchListing = fetchListing;
  // window.fetchListings = fetchListings;
  // window.deleteListing = deleteListing;
  // window.fetchListingsByUser = fetchListingsByUser;

  // window.createBooking = BookingActions.createBooking;
  // window.updateBooking = BookingActions.updateBooking;
  // window.fetchBooking = BookingActions.fetchBooking;
  // window.fetchBookings = BookingActions.fetchBookings;
  // window.deleteBooking = BookingActions.deleteBooking;
  // window.fetchBookingsByUser = BookingActions.fetchBookingsByUser;

  // window.fetchUsers = fetchUsers;
  // window.fetchUser = fetchUser;

  // window.fetchReviewsByUser = ReviewActions.fetchReviewsByUser;
  // window.fetchReviewsByListing = ReviewActions.fetchReviewsByListing;
  // window.fetchReview = ReviewActions.fetchReview;
  // window.createReview = ReviewActions.createReview;
  // window.updateReview = ReviewActions.updateReview;
  // window.deleteReview = ReviewActions.deleteReview;

  // window.getPos = getPos;

  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }},
      session: {
        currentUserId: window.currentUser.id }
      }
    };
    delete window.currentUser;
    
  const store = configureStore(preloadedState);

  window.store = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);

})