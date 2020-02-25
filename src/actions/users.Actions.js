import axios from "axios";
export const LOG_IN = "LOG_IN";
export const SIGN_UP = "SIGN_UP";

export const setLogin = data => {
  return {
    type: LOG_IN,
    payload: data
  };
};

export const setSignup = data => {
    return {
        type: SIGN_UP,
        payload: data
    };
};

export const login = (values, history) => dispatch => {
    return axios({
        method: "POST",
        url: "https://music-byte.herokuapp.com/users/login",
        data: values
    }).then(response => {
        if (response.status === 200) {
            console.log("token", response.data.token);
            
            localStorage.setItem("token", response.data.token);
            dispatch(setLogin(values));
            history.push('/profile');
        }

    }).catch(error =>{
        console.log(error)
    });
};

export const signup = (values, history) => dispatch => {
    return axios({
        method: "POST",
        url: "https://music-byte.herokuapp.com/users/register",
        data: values
    }).then(response => {
        console.log("this is response data signup", response.data);
        dispatch(setSignup(response.data.data));
        
        history.push("/login")
    }).catch(error => {
        console.log(error);
    });
};