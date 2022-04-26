import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { login, logout, signUp } from './actions/session_actions';
import Root from './components/root';

import {fetchUsers} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', ()=> {
  const root = document.getElementById('root');

  window.demoUser = {email: 'Demo', fname: 'Demo', lname: 'Demo', password: 'password'};
  window.user = {fname: 'derek', lname: 'lee', password:'password', email: 'dereklee@gmail.com'};
  window.user2 = {fname: 'eric', lname: 'eric', password:'password', email: 'ericeric@gmail.com'};
  window.user3 = {fname: 'heather', lname: 'connie', password:'password', email: 'heatherconnie@gmail.com'};
  window.user4 = { fname: 'jacinda', lname: 'mozelle', password: 'password', email: 'jacindamozelle@gmail.com'};
  window.user5 = { fname: 'morian', lname: 'hayley', password:'password', email: 'dorianhayley@gmail.com'};

  window.login = login;
  window.logout = logout;
  window.signUp = signUp;

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

  window.store = store.getState();
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, root);

})