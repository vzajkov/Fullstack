import { combineReducers } from 'redux';
import ErrorReducer from './error_reducer.js';
import SessionReducer from './session_reducer.js';
import EntitiesReducer from './entities_reducer.js';
import FilterReducer from './filter_reducer.js';

const RootReducer =
  combineReducers({
    errors: ErrorReducer,
    entities: EntitiesReducer,
    filters: FilterReducer
  });

export default RootReducer;
