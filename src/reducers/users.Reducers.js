import { LOG_IN } from "../actions";


const token = localStorage.getItem('token');
const initialState = token ? {
    isLogged: true,

} : {
    isLogged : false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                isLogged:true,
            };
        default:
            return state;
    }
};