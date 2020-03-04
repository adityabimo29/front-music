import axios from 'axios';
export const ADD_ITEM = 'ADD_ITEM';
export const GET_ITEM = 'GET_ITEM';

const token = localStorage.getItem('token');

export const getItems = data => {
  return {
    type: GET_ITEM,
    payload: data
  };
};

export const addItems = data => {
  return {
    type: ADD_ITEM,
    payload: data
  };
};

export const functgetItem = () => dispatch => {
  return axios({
    method: 'GET',
    url: 'https://music-byte.herokuapp.com/comments',
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(result => {
      // console.log(result, 'hasil');
      dispatch(getItems(result.data.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export const functaddItem = values => dispatch => {
  return axios({
    method: 'POST',
    url: 'https://music-byte.herokuapp.com/comments',
    headers: { Authorization: `Bearer ${token}` },
    data: values
  })
    .then(result => {
      console.log(result, 'hasil');
      dispatch(addItems(result.data.data));
      functgetItem();
    })
    .catch(error => {
      console.log(error);
    });
};

//utk update pake params metode put
//ditambah
