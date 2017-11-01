import { RECEIVE_REVIEW } from '../actions/review_actions.js';
import merge from 'lodash/merge';

const ReviewReducer = (oldState = {}, action) => {
  debugger
  switch (action.type) {
    case RECEIVE_REVIEW :
      return merge({}, oldState, action);
    default :
      return oldState;
  }
};

export default ReviewReducer;
