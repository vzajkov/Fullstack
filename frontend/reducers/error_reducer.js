import { combineReducers } from 'redux';
import  SessionErrorsReducer from './session_errors_reducer.js';
const ErrorReducer = combineReducers({
  session_errors: SessionErrorsReducer
});

export default ErrorReducer;
