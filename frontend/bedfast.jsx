import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { login, logout, signUp } from './actions/session_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', ()=> {
  const root = document.getElementById('root');
  const store = configureStore();

  window.user = {fname: 'derek', lname: 'lee', password:'password', email: 'dlee@gmail.com'}

  window.login = login;
  window.logout = logout;
  window.signUp = signUp;

  window.store = store.getState();
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, root);

})