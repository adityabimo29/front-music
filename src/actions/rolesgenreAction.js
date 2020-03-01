import axios from "axios";

export const GET_ROLES = "GET_ROLES";
export const GET_GENRES = "GET_GENRES";

export const setRoles = payload => {
  return {
    type: GET_ROLES,
    payload
  };
};

export const setGenres = payload => {
  return {
    type: GET_GENRES,
    payload
  };
};

export const getRoles = () => dispatch => {
  return axios({
    method: "GET",
    url: "https://music-byte.herokuapp.com/roles"
  })
    .then(response => {
      console.log("This is Response get Roles", response.data);
      dispatch(setRoles(response.data.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export const getGenres = () => dispatch => {
    return axios({
      method: "GET",
      url: "https://music-byte.herokuapp.com/genres"
    })
      .then(response => {
        console.log("This is Response get Genres", response.data);
        dispatch(setGenres(response.data.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
