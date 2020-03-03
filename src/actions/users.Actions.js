import axios from 'axios';
const token = localStorage.getItem('token');
// import History from '../history';
export const LOG_IN = 'LOG_IN';
export const SIGN_UP = 'SIGN_UP';
export const SET_LOGOUT = 'SET_LOGOUT';
export const GET_DATA = 'GET_DATA';

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

export const getData = data => {
  return {
    type: GET_DATA,
    payload: data
  };
};


// logout
export const logout = () => {
  return {
    type: SET_LOGOUT
  };
};




export const login = (values, history) => (dispatch) => {
  return axios({
    method: 'POST',
    url: 'https://music-byte.herokuapp.com/users/login',
    data: values
  })
    .then(response => {
      console.log(response);

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        dispatch(setLogin(values));
        history.push('/profile');
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

export const fetchDataUsers = () => dispatch => {
  const token = localStorage.getItem('token');

  return axios.get('https://music-byte.herokuapp.com/users',{headers:{"authorization":`Bearer ${token}`}}).then(res =>{
    dispatch(getData(res.data.data))
    
  })
}
