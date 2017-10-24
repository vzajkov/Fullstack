import * as SessionAPIUtil from '../util/session_api_utils.js';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const login = (user) => (dispatch) => {
    SessionAPIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)));
};

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};
