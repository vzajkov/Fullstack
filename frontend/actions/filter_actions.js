import * as FilterAPIUtil from '../util/filter_api_util.js';
import { receiveAllBusinesses } from './business_actions.js';

export const UPDATE_FILTERS = "UPDATE_FILTERS";

export const updateFilters = (filter, value) => {
  return {
    type: UPDATE_FILTERS,
    filter,
    value
  };
};

export const updateFiltering = (filter, value) => (dispatch, getState) => {
  dispatch(updateFilters(filter, value));
  return fetchFilteredBusinesses(getState().filters)(dispatch);
};

export const fetchFilteredBusinesses = (filter) => (dispatch) => {
  //
  return FilterAPIUtil.fetchFilteredBusinesses(filter).then(businesses => dispatch(receiveAllBusinesses(businesses)))
};
