import * as SessionAPIUtil from '../util/session_api_utils.js';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const login = (user) => (dispatch) => {
    SessionAPIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)));
};

export const logout = (user) => (dispatch) => {
    SessionAPIUtil.logout(user).then(user => dispatch(receiveCurrentUser(user)));
};

export const signup = (user) => (dispatch) => {
    SessionAPIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)));
};

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};
