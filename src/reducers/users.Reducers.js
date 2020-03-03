import { LOG_IN, SIGN_UP, GET_DATA ,GET_OTHER_PROFILE} from "../actions";

const token = localStorage.getItem("token");
const initialState = token
  ? {
      isLogged: true,
      data:[],
      profile:{}
    }
  : {
      isLogged: false,
      signupData: [],
      data:[],
      profile:{}
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
      };
      case GET_OTHER_PROFILE:
      return{
        ...state,
        profile:action.payload
      };
    
    default:
      return state;
  }
};
