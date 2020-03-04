import axios from 'axios';
import jwt_decode from 'jwt-decode';
// import History from '../history';
export const LOG_IN = 'LOG_IN';
export const SIGN_UP = 'SIGN_UP';
export const SET_LOGOUT = 'SET_LOGOUT';

export const setSignup = data => {
  return {
    type: SIGN_UP,
    payload: data
  };
};
export const setLogin = data => {
  return {
    type: LOG_IN,
    payload: data
  };
};

// logout
export const logout = () => {
  return {
    type: SET_LOGOUT
  };
};

export const login = (values, history) => dispatch => {
  return axios({
    method: 'POST',
    url: 'https://music-byte.herokuapp.com/users/login',
    data: values
  })
    .then(response => {
      console.log(response);

      if (response.status === 200) {
        //  localStorage.setItem('token', response.data.token);
        localStorage.setItem('token', response.data.token);
        const decode = jwt_decode(response.data.token);
        console.log(decode);
        dispatch(setLogin(values));
        // history.push('/profile');
        //test check to testProfile
        history.push('/oneprofile');
        console.log(response.data.data);
      }
    })
    .catch(error => {
      console.log(error);
      alert('Email or Password is wrong.');
    });
};

export const signup = (values, history) => dispatch => {
  return axios({
    method: 'POST',
    url: 'https://music-byte.herokuapp.com/users/register',
    data: values
  })
    .then(response => {
      console.log('this is response data signup', response.data);
      dispatch(setSignup(response.data.data));

      history.push('/login');
    })
    .catch(error => {
      console.log(error);
    });
};
