import _ from 'lodash';
import uniqid from 'uniqid';

import {
  USERS_REQUESTED,
  RECEIVE_USERS,
  RECEIVE_USERS_ERROR,
  ADD_USER,
  SEARCH_USER,
  CANCEL_USER_SEARCH,
  DELETE_USER,
  UPDATE_ACTIVE_USER
} from '../actions';

const initialState = {
  activeUser: null,
  users: [],
  visibleUsers: [],
  isRequestingUsers: true,
  errorLoadingUsers: null,
  loadingError: null
};

function usersReducer(state = initialState, action) {
  switch (action.type) {

    case USERS_REQUESTED:
      return Object.assign({}, state, {
        isRequestingUsers: true,
        errorLoadingUsers: null
      });

    case RECEIVE_USERS:
      return Object.assign({}, state, {
        users: action.users,
        visibleUsers: action.users,
        isRequestingUsers: false,
        errorLoadingUsers: null
      });

    case RECEIVE_USERS_ERROR:
      return Object.assign({}, state, {
        isRequestingUsers: false,
        errorLoadingUsers: action.error
      });

    case ADD_USER:
      const user = action.user;
      user.id = uniqid();

      return Object.assign({}, state, {
        visibleUsers: [...state.users, user],
        users: [...state.users, user]
      });

    case SEARCH_USER:
      const name = action.username.toLowerCase();

      return Object.assign({}, state, {
        visibleUsers: _.filter(state.users, (obj) => {
          return obj.firstname.toLowerCase().search(name) > -1 || obj.lastname.toLowerCase().search(name) > -1;
        })
      });

    case CANCEL_USER_SEARCH:
      return Object.assign({}, state, {
        visibleUsers: [...state.users]
      });

    case DELETE_USER:
      const users = _.filter(state.users, (obj) => {
        return obj.id !== action.user.id;
      });

      // should state.activeUser should be deleted as well?
      let activeUser = state.activeUser;
      if (activeUser && activeUser.id === action.user.id) {
        activeUser = null;
      }

      return Object.assign({}, state, {
        visibleUsers: users,
        users,
        activeUser,
      });

    case UPDATE_ACTIVE_USER:
      return Object.assign({}, state, {
        activeUser: action.user
      });

    default:
      return state;
  }
}

export default usersReducer;

