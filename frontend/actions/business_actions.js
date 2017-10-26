import * as BusinessAPIUtil from '../util/business_api_util.js';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';

export const receiveBusiness = (business) => {
  return ({
    type: RECEIVE_BUSINESS,
    business
  });
};

export const receiveAllBusinesses = (businesses) => {
  return ({
    type: RECEIVE_ALL_BUSINESSES,
    businesses
  });
};

export const fetchBusinesses = () => (dispatch) => {
    return BusinessAPIUtil.fetchBusinesses().then(businesses => dispatch(receiveAllBusinesses(businesses)));
};

export const fetchBusiness = (business) => (dispatch) => {
    return BusinessAPIUtil.fetchBusinesses(business).then(business => dispatch(receiveBusiness(business)));
};
