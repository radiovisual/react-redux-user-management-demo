import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UsersReducer from './reducer_users';
import GroupsReducer from './reducer_groups';

const rootReducer = combineReducers({
  users: UsersReducer,
  groups: GroupsReducer,
  form: formReducer
});

export default rootReducer;