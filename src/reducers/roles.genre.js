import { GET_ROLES, GET_GENRES } from "../actions";

const initialState = {
  roles: [],
  genres: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ROLES:
      return {
        ...state,
        roles: action.payload
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload
      };
    default:
      return state || [];
  }
};
