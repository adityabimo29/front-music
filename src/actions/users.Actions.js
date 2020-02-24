import axios from "axios";
export const LOG_IN = "LOG_IN";


export const setLogin = data => {
  return {
    type: LOG_IN,
    payload: data
  };
};

export const login = (values) => dispatch => {
    return axios({
        method: "POST",
        url: "https://music-byte.herokuapp.com/users/login",
        data: values
    }).then(response => {
        if (response.status === 200) {
            console.log("token", response.data.token);
            
            localStorage.setItem("token", response.data.token);
            dispatch(setLogin(values));
            // history.push("/profile");
        }

    }).catch(error =>{
        console.log(error)
    });
};