import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-thunk";

export default createStore(reducers, applyMiddleware(thunk, logger));
