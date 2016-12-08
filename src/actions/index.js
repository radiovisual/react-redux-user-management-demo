import fetch from '../api/fetch';

export const FETCH_USERS = 'FETCH_USERS';
export const USERS_REQUESTED = 'USERS_REQUESTED';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USERS_ERROR = 'RECEIVE_USERS_ERROR';
export const ADD_USER = 'ADD_USER';
export const SEARCH_USER = 'SEARCH_USER';
export const CANCEL_USER_SEARCH = 'CANCEL_USER_SEARCH';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_ACTIVE_USER = 'UPDATE_ACTIVE_USER';

export const FETCH_GROUPS = 'FETCH_GROUPS';
export const GROUPS_REQUESTED = 'GROUPS_REQUESTED';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUPS_ERROR = 'RECEIVE_GROUPS_ERROR';
export const ADD_GROUP = 'ADD_GROUP';
export const SEARCH_GROUP = 'SEARCH_GROUP';
export const CANCEL_GROUP_SEARCH = 'CANCEL_GROUP_SEARCH';
export const REMOVE_USER_FROM_ALL_GROUPS = 'REMOVE_USER_FROM_ALL_GROUPS';
export const REMOVE_USER_FROM_GROUP = 'REMOVE_USER_FROM_GROUP';
export const REMOVE_USER_FROM_ACTIVE_GROUP = 'REMOVE_USER_FROM_ACTIVE_GROUP';
export const DELETE_GROUP = 'DELETE_GROUP';
export const ADD_USER_TO_GROUP = 'ADD_USER_TO_GROUP';
export const FETCH_USERS_IN_GROUP = 'FETCH_USERS_IN_GROUP';
export const REQUESTED_USERS_FOR_GROUP = 'REQUESTED_USERS_FOR_GROUP';
export const RECEIVE_USERS_FOR_GROUP = 'RECEIVE_USERS_FOR_GROUP';
export const UPDATE_ACTIVE_GROUP = 'UPDATE_ACTIVE_GROUP';

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* USER ACTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

export function usersRequested() {
  return {
    type: USERS_REQUESTED
  }
}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function receiveUsersError(error) {
  return {
    type: RECEIVE_USERS_ERROR,
    error,
  }
}

export function fetchUsers() {
  return dispatch => {
    dispatch(usersRequested());

    return fetch.users().then(users => {
      dispatch(receiveUsers(users));
    });
  }
}

export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export function searchUser(username) {
  return {
    type: SEARCH_USER,
    username,
  };
}

export function cancelUserSearch() {
  return {
    type: CANCEL_USER_SEARCH,
  };
}

export function deleteUser(user) {
  return {
    type: DELETE_USER,
    user,
  };
}

export function updateActiveUser(user) {
  return {
    type: UPDATE_ACTIVE_USER,
    user,
  }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* GROUPS ACTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

export function groupsRequested() {
  return {
    type: GROUPS_REQUESTED
  }
}

export function receiveGroups(groups) {
  return {
    type: RECEIVE_GROUPS,
    groups
  }
}

export function receiveGroupsError(error) {
  return {
    type: RECEIVE_GROUPS_ERROR,
    error,
  }
}

export function fetchGroups() {
  return dispatch => {
    dispatch(groupsRequested());

    return fetch.groups().then(groups => {
      dispatch(receiveGroups(groups));
    });
  }
}

export function addGroup(group) {
  return {
    type: ADD_GROUP,
    group,
  };
}

export function searchGroup(name) {
  return {
    type: SEARCH_GROUP,
    name,
  };
}

export function cancelGroupSearch() {
  return {
    type: CANCEL_GROUP_SEARCH,
  };
}

export function removeUserFromAllGroups(user) {
  return {
    type: REMOVE_USER_FROM_ALL_GROUPS,
    user,
  };
}

export function removeUserFromActiveGroup(user) {
    return {
      type: REMOVE_USER_FROM_ACTIVE_GROUP,
      user,
    }
}

export function removeUserFromGroup(user, group) {
  return {
    type: REMOVE_USER_FROM_GROUP,
    user,
    group
  }
}

export function deleteGroup(group) {
  return {
    type: DELETE_GROUP,
    group,
  };
}

export function addUserToGroup(userid, groupid) {
  return {
    type: ADD_USER_TO_GROUP,
    userid,
    groupid
  }
}

export function requestedUsersInGroup(group) {
  return {
    type: REQUESTED_USERS_FOR_GROUP,
    group
  }
}

export function receiveUsersForGroup(group, users) {
    return {
      type: RECEIVE_USERS_FOR_GROUP,
      group,
      users,
    }
}

export function fetchUsersInGroup(group) {
  return dispatch => {
      dispatch(requestedUsersInGroup(group));
      dispatch(receiveUsersForGroup(group, group.members));
  };
}

export function updateActiveGroup(group) {
  return {
    type: UPDATE_ACTIVE_GROUP,
    group,
  };
}


