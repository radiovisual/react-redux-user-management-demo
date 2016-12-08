import _ from 'lodash';
import { createSelector } from 'reselect';

const getUsers = (state) => state.users.users;
const getActiveGroupMembers = (state) => state.groups.activeGroupMembers;

export const getUsersInGroup = createSelector(
  [getUsers, getActiveGroupMembers],
  (users, activeGroupMembers) => {
    const groupMembers = [];

    if (!activeGroupMembers) {
      return groupMembers;
    }

    activeGroupMembers.forEach(id => {
      const user = _.find(users, user => {
        return user.id === id;
      });

      if (user) {
        groupMembers.push(user);
      }
    });

    return groupMembers;
  }
);