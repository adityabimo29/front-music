import { LOG_IN, SIGN_UP, GET_DATA ,GET_OTHER_PROFILE,GET_COMMENTS} from "../actions";

const token = localStorage.getItem("token");
const initialState = token
  ? {
      isLogged: true,
      data:[],
      profile:{},
      comments:[]
    }
  : {
      isLogged: false,
      signupData: [],
      data:[],
      profile:{},
      comments:[]
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
        isLogged:true,
        profile:action.payload
      };
    case GET_COMMENTS:
      return{
        ...state,
        comments:action.payload
      };
    default:
      return state;
  }
};
