import _ from 'lodash';
import uniqid from 'uniqid';

import {
  GROUPS_REQUESTED,
  RECEIVE_GROUPS,
  RECEIVE_GROUPS_ERROR,
  ADD_GROUP,
  SEARCH_GROUP,
  CANCEL_GROUP_SEARCH,
  DELETE_GROUP,
  ADD_USER_TO_GROUP,
  REQUESTED_USERS_FOR_GROUP,
  RECEIVE_USERS_FOR_GROUP,
  UPDATE_ACTIVE_GROUP,
  REMOVE_USER_FROM_GROUP,
  REMOVE_USER_FROM_ACTIVE_GROUP,
  REMOVE_USER_FROM_ALL_GROUPS
} from '../actions';

const initialState = {
  activeGroup: null,
  activeGroupMembers: [],
  groups: [],
  visibleGroups: [],
  isRequestingGroups: true,
  errorLoadingGroups: null,
  loadingError: null
};

function groupsReducer(state = initialState, action) {
  switch (action.type) {

    case GROUPS_REQUESTED:
      return Object.assign({}, state, {
        isRequestingGroups: true,
        errorLoadingGroups: null
      });

    case RECEIVE_GROUPS:
      return Object.assign({}, state, {
        groups: action.groups,
        visibleGroups: action.groups,
        isRequestingGroups: false,
        errorLoadingGroups: null
      });

    case RECEIVE_GROUPS_ERROR:
      return Object.assign({}, state, {
        isRequestingGroups: false,
        errorLoadingGroups: action.error
      });

    case ADD_GROUP:
      const group = action.group;
      group.id = uniqid();
      group.members = [];

      return Object.assign({}, state, {
        visibleGroups: [...state.groups, group],
        groups: [...state.groups, group]
      });

    case DELETE_GROUP:
      const groups = _.filter(state.groups, (obj) => {
        return obj.id !== action.group.id;
      });

      return Object.assign({}, state, {
        visibleGroups: groups,
        groups,
      });

    case SEARCH_GROUP:
      const name = action.name.toLowerCase();

      return Object.assign({}, state, {
        visibleGroups: _.filter(state.groups, (obj) => {
          return obj.name.toLowerCase().search(name) > -1;
        })
      });

    case CANCEL_GROUP_SEARCH:
      return Object.assign({}, state, {
        visibleGroups: [...state.groups]
      });

    case ADD_USER_TO_GROUP:
      // TODO: Refactor this ugly logic via redux-saga or redux-loop
      // Too much is happening in this reducer...
      const targetGroup = _.find(state.groups, obj => {
        return obj.id === action.groupid;
      });

      if (targetGroup.members.indexOf(action.userid) < 0) {
        targetGroup.members.push(action.userid);
      }

      const allGroupsButTarget = _.filter(state.groups, obj => {
        return obj.id !== action.groupid;
      });

      // if the activeGroup is also the group we added to,
      // we must update the activeGroupMembers
      // TODO: move this into it's own reducer
      let members = state.activeGroupMembers;
      if (state.activeGroup && members && state.activeGroup.id === action.groupid) {
        if (members.indexOf(action.userid) < 0) {
          members.push(action.userid);
        }
      }

      return Object.assign({}, state, {
        groups: [...allGroupsButTarget, targetGroup],
        activeGroupMembers: [...members]
      });

    case REQUESTED_USERS_FOR_GROUP:
      return Object.assign({}, state, {
        activeGroup: action.group,
        activeGroupMembers: []
      });

    case RECEIVE_USERS_FOR_GROUP:
      return Object.assign({}, state, {
        activeGroupMembers: action.users
      });

    case UPDATE_ACTIVE_GROUP:
      return Object.assign({}, state, {
        activeGroup: action.group
      });

    case REMOVE_USER_FROM_ACTIVE_GROUP:
      return Object.assign({}, state, {
        activeGroupMembers: _.filter(state.activeGroupMembers, id => {
          return id !== action.user.id;
        })
      });

    case REMOVE_USER_FROM_GROUP:
      // TODO: Refactor this ugly logic via redux-saga or redux-loop
      // Too much is happening in this reducer...
      const targetGroup2 = _.find(state.groups, obj => {
        return obj.id === action.group.id;
      });

      const allGroupsButTarget2 = _.filter(state.groups, obj => {
        return obj.id !== action.group.id;
      });

      // remove the user from the group
      targetGroup2.members = _.filter(targetGroup2.members, id => {
        return id !== action.user.id;
      });

      const sortedGroups = _.sortBy([targetGroup2, ...allGroupsButTarget2], o => o.id);

      return Object.assign({}, state, {
        groups: sortedGroups,
        visibleGroups: sortedGroups
      });

    case REMOVE_USER_FROM_ALL_GROUPS:
      // crawl through all the groups and remove the user from each group
      const groupsMinusMember = state.groups.map(group => {
        group.members = _.filter(group.members, id => id !== action.user.id);
        return group;
      });

      return Object.assign({}, state, {
        groups: [...groupsMinusMember],
        visibleGroups: [...groupsMinusMember]
      });

    default:
      return state;
  }
}

export default groupsReducer;




