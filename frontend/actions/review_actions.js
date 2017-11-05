import * as ReviewAPIUtil from '../util/reviews_api_util.js';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveReview = (review) => {
  
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

export const removeReview = (review) => {
  
  return {
    type: REMOVE_REVIEW,
    review
  };
};

export const createReview = (review) => (dispatch) => {
  
  ReviewAPIUtil.createReview(review).then(review => dispatch(receiveReview(review)))
};

export const editReview = (review) => (dispatch) => {
  
  ReviewAPIUtil.editReview(review).then(review => dispatch(receiveReview(review)))
};

export const deleteReview = (review) => (dispatch) => {
  
  ReviewAPIUtil.deleteReview(review.id).then(review => dispatch(removeReview(review)))
};
