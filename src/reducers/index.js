import { combineReducers } from "redux";
import users from './users.Reducers'
import rolesgenre from './roles.genre'


export default combineReducers({ users, rolesgenre });