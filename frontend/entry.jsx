import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/store.js';
import Root from './components/root.jsx';
import { login, logout, signup } from './util/session_api_utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
