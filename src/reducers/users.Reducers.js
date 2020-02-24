import { LOG_IN, SIGN_UP } from "../actions";

const token = localStorage.getItem("token");
const initialState = token
  ? {
      isLogged: true
    }
  : {
      isLogged: false,
      signupData: []
    };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        isLogged: true
      };
    case SIGN_UP:
      return {
        signupData: action.payload
      };
    default:
      return state;
  }
};
