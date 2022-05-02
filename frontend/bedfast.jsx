import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';

import { login, logout, signUp} from './actions/session_actions';
import { createListing, editListing, fetchListing, fetchListings, deleteListing } from './actions/listing_actions';
import {fetchUsers} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', ()=> {
  const root = document.getElementById('root');

  window.demoUser = {email: 'Demo', fname: 'Demo', lname: 'Demo', password: 'password'};
  window.user = {fname: 'derek', lname: 'lee', password:'password', email: 'dereklee@gmail.com'};
  window.user2 = {fname: 'eric', lname: 'eric', password:'password', email: 'ericeric@gmail.com'};
  window.user3 = {fname: 'heather', lname: 'connie', password:'password', email: 'heatherconnie@gmail.com'};
  window.user4 = { fname: 'jacinda', lname: 'mozelle', password: 'password', email: 'jacindamozelle@gmail.com'};
  window.user5 = { fname: 'morian', lname: 'hayley', password:'password', email: 'dorianhayley@gmail.com'};

  window.listing1 = {
    title: 'cool house 147' , description: 'very cool', host_id:1, address: '123 bum st', city: 'NY', state: 'NY', zipcode: '11111', latitude: '1.00000', longitude:'6.999999999', max_num_guests: 2, num_beds: 2, num_baths: 1, price_per_night: 99
  }
  window.listing2 = {
    title: 'GREAT HOUSE 229', description: 'GREAT', host_id:3, address: '1243 N Sterling St', city: 'UNION CITY', state: 'IN', zipcode: '47390', latitude: '1.00000', longitude:'6.999999999', max_num_guests: 5, num_beds: 4, num_baths: 3, price_per_night: 149
  }
  window.listing3 = {
    title: 'THE AIGHT HOUSE', description: 'IT\'S AIGHT I GUESS', host_id:2, address: '421 Monmouth St', city: 'TRENTON', state: 'NJ', zipcode: '08609', latitude: '1.00000', longitude:'6.999999999', max_num_guests: 1, num_beds: 1, num_baths: 1, price_per_night: 77
  }

  window.login = login;
  window.logout = logout;
  window.signUp = signUp;
  window.fetchUsers = fetchUsers;

  window.createListing = createListing;
  window.editListing = editListing;
  window.fetchListing = fetchListing;
  window.fetchListings = fetchListings;
  window.deleteListing = deleteListing;


  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }},
      session: {
        currentUserId: window.currentUser.id }
      }
    };
    // delete window.currentUser;
    
  const store = configureStore(preloadedState);

  window.store = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);

})