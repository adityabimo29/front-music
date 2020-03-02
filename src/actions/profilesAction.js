import axios from 'axios';
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_USERS = 'GET_EMAIL';
export const GET_USERSBYEMAIL = 'GET_EMAIL';

export const getUsers = data => {
  return {
    type: GET_USERS,
    payload: data
  };
};

export const getUsersByEmail = email => {
  return {
    type: GET_USERSBYEMAIL,
    payload: email
  };
};

export const getCar = () => dispatch => {
  return axios
    .get('http://localhost:3001/users')
    .then(result => {
      console.log(result);

      dispatch(setCar(result.data));
    })
    .catch(error => {
      console.log(error);
    });
};

// import axios from 'axios';

// export const SET_CAR = 'SET_CAR';
// export const SET_CAR_BY_ID = 'SET_CAR_BY_ID';

// export const setCar = data => {
//   return {
//     type: SET_CAR,
//     payload: data
//   };
// };

// export const setCarById = data => {
//   return {
//     type: SET_CAR_BY_ID,
//     payload: data
//   };
// };

export const getCar = () => dispatch => {
  return axios
    .get('http://localhost:3001/users')
    .then(result => {
      console.log(result);

      dispatch(setCar(result.data));
    })
    .catch(error => {
      console.log(error);
    });
};

// export const getCarById = id => dispatch => {
//   return axios
//     .get(`https://5e33d48de0161c00140ac4fe.mockapi.io/cars/${id}`)
//     .then(result => {
//       dispatch(setCarById(result.data));
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// export const postCar = values => dispatch => {
//   return axios
//     .post('https://5e33d48de0161c00140ac4fe.mockapi.io/cars', values)
//     .then(result => {
//       console.log(result);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// export const getComments = () => dispatch => {
//     return axios.get('',)
// }
