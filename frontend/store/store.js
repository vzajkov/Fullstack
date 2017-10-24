import { createStore, applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk';
import RootReducer from '../reducers/root_reducer.js';

export const configureStore = (preLoadedState = {}) => (
   createStore(RootReducer, preLoadedState, applyMiddleware(thunk))
);
