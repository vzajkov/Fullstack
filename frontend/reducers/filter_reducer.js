import { UPDATE_FILTERS } from '../actions/filter_actions.js';
import merge from 'lodash/merge';

const defaultState = {
  smoking: false,
  takeout: false,
  parking: false,
  wifi: false
};

const FilterReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case UPDATE_FILTERS :
      return merge({}, oldState, {[action.filter]: action.value});
    default :
      return oldState;
  }
};

export default FilterReducer;
