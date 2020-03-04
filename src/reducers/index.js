import { combineReducers } from 'redux';
import users from './users.Reducers';
import rolesgenre from './roles.genre';
import profile from './profile.Reducers';
import items from './commentReducers';

export default combineReducers({ users, rolesgenre, profile, items });
