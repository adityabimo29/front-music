import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-thunk';
import users from './redux/usersReducer';

export default createStore(
    combineReducers({users}),
    applyMiddleware(logger,thunk)
)