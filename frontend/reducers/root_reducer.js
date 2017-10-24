import { combineReducers } from 'redux';
import ErrorReducer from './error_reducer.js';
import SessionReducer from './session_reducer.js';
const RootReducer = () => (
  combineReducers({
    errors: ErrorReducer,
    session: SessionReducer
  })
);

export default RootReducer;
