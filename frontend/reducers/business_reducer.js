import merge from 'lodash/merge';
import { RECEIVE_BUSINESS, RECEIVE_ALL_BUSINESSES } from '../actions/business_actions.js';

const BusinessReducer = (oldState = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_BUSINESSES :
      //debugger
      return merge({},  action.businesses );
    case RECEIVE_BUSINESS :
      //debugger
      return merge({},  action.business );
    default:
      return oldState;
  }
};

export default BusinessReducer;
