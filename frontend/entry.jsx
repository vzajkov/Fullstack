import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/store.js';
import Root from './components/root.jsx';
import { login, logout, signup } from './util/session_api_utils.js';
import { fetchBusiness, fetchBusinesses  } from './actions/business_actions.js';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

  if (window.currentUser) {
    const preloadedState = { sessions: { currentUser: window.currentUser } } ;
    store = configureStore(preloadedState);
    // delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
