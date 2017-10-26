import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/store.js';
import Root from './components/root.jsx';
import { login, logout, signup } from './util/session_api_utils.js';
import { fetchBusiness, fetchBusinesses  } from './actions/business_actions.js';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

  if (window.currentUser) {
    const preloadedState = { entities: { session: { currentUser: window.currentUser } } };
    store = configureStore(preloadedState);
    // delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.fetchBusiness = fetchBusiness;
  window.fetchBusinesses = fetchBusinesses;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
