import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { login, logout, signUp } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', ()=> {
  const root = document.getElementById('root');
  const store = configureStore();
  // window.user = {user: {first_name: 'derek', last_name: 'lee', password:'password', email: 'dlee@gmail.com'}}
  window.user = {first_name: 'derek', last_name: 'lee', password:'password', email: 'dlee@gmail.com'}

  window.login = login;
  window.logout = logout;
  window.signUp = signUp;
  window.store = store.getState();

  ReactDOM.render(<h1>Welcome to Bedfast</h1>, root);

})