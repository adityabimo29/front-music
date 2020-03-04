import axios from 'axios';
// export const SET_ITEM = 'ADD_ITEM';
// export const GET_ITEM = 'GET_ITEM';

export const GET_USERS = 'GET_USERS';

const token = localStorage.getItem('token');
// const dataLog = JSON.parse(localStorage.getItem('profData'));

// console.log(dataLog.email, 'ini data email');
export const getUsers = data => {
  return {
    type: GET_USERS,
    payload: data
  };
};

export const functiongetUsers = () => dispatch => {
  return axios({
    method: 'GET',
    url: 'https://music-byte.herokuapp.com/users/',
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(result => {
      // console.log(result, 'hasil');
      dispatch(getUsers(result.data.data));
    })
    .catch(error => {
      console.log(error);
    });
};
