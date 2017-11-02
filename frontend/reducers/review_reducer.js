import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions.js';
import merge from 'lodash/merge';

const ReviewReducer = (oldState = {}, action) => {
  debugger
  switch (action.type) {
    case RECEIVE_REVIEW :
      return merge({}, oldState, action);
    case REMOVE_REVIEW :
      debugger
      const newState = merge({},oldState, action);
      debugger
      delete newState[action.review];
    default :
      return oldState;
  }
};

export default ReviewReducer;
