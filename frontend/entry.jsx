import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Kelp!</h1>, root);
});
