import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import BusinessReducer from './business_reducer.js';

const EntitiesReducer = combineReducers({
  businesses: BusinessReducer,
  session: SessionReducer
});

export default EntitiesReducer;
