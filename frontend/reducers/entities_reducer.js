import { combineReducers } from 'redux';
import BusinessReducer from './business_reducer.js';

const EntitiesReducer = combineReducers({
  businesses: BusinessReducer,
});

export default EntitiesReducer;
