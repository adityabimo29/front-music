import axios from 'axios';
import jwt_decode from 'jwt-decode';
import jwt from 'jwt-decode';

const token = localStorage.getItem('token');
// import History from '../history';
export const LOG_IN = 'LOG_IN';
export const SIGN_UP = 'SIGN_UP';
export const SET_LOGOUT = 'SET_LOGOUT';
export const GET_DATA = 'GET_DATA';
export const GET_OTHER_PROFILE = 'GET_OTHER_PROFILE';

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
        // const decode = jwt_decode(response.data.token);
        console.log(decode);
        dispatch(setLogin(values));
        // history.push('/profile');
        //test check to testProfile
        history.push('/oneprofile');
        console.log(response.data.data);

        let decode = jwt(response.data.token);
        dispatch(fetchProfile(decode.id_user, history));
        history.push(`profile/${decode.id_user}`);
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
  let decode = jwt(token);
  return axios
    .get(
      `https://music-byte.herokuapp.com/users/listMusicians/${decode.id_user}`,
      { headers: { authorization: `Bearer ${token}` } }
    )
    .then(res => {
      dispatch(getData(res.data.data));
    });
};

export const fetchProfile = id_user => dispatch => {
  return axios
    .get(`https://music-byte.herokuapp.com/users/profile/${id_user}`, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(res => {
      dispatch(getOtherData(res.data.data[0]));
    });
};

export const userLike = (data, history) => dispatch => {
  return axios
    .post('https://music-byte.herokuapp.com/likes/', data, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(res => {
      dispatch(fetchProfile(data.id_user, history));
      history.push(`/profile/${data.id_user}`);
    });
};
export const sendEmail = (data, history) => dispatch => {
  return axios
    .post('https://music-byte.herokuapp.com/users/recruit/', data, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(res => {
      //dispatch(fetchProfile(data.id_user,history));
      history.push(`/main`);
    });
};
