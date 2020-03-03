import { LOG_IN, SIGN_UP, GET_DATA } from "../actions";

const token = localStorage.getItem("token");
const initialState = token
  ? {
      isLogged: true,
      data:[]
    }
  : {
      isLogged: false,
      signupData: [],
      data:[]
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

    case GET_DATA:
      return{
        ...state,
        data:action.payload
      }
    
    default:
      return state;
  }
};
