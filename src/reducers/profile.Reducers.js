import { GET_USERS } from '../actions';

// import { SET_CAR, SET_CAR_BY_ID } from '../actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;

    default:
      return state || [];
  }
};
