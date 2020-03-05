import axios from 'axios';
import jwt from 'jwt-decode';
import Swal from 'sweetalert2';

// import History from '../history';
export const LOG_IN = 'LOG_IN';
export const SIGN_UP = 'SIGN_UP';
export const SET_LOGOUT = 'SET_LOGOUT';
export const GET_DATA = 'GET_DATA';
export const GET_OTHER_PROFILE = 'GET_OTHER_PROFILE';
export const GET_COMMENTS = 'GET_COMMENTS';

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

export const getOtherData = data => {
  return {
    type: GET_OTHER_PROFILE,
    payload: data,
    login:true,
  };
};

export const getDataComments = data => {
  return {
    type: GET_COMMENTS,
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

      if (response.data.token !== undefined) {
        localStorage.setItem('token', response.data.token);
        let decode = jwt(response.data.token);
        dispatch(fetchProfile(decode.id_user, history));
        history.push(`profile/${decode.id_user}`);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email or Password is wrong.',
        })
      }
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email Not Found.',
      })
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
      Swal.fire(
        'Snappi snapp',
        'Register Successfully ',
        'success'
      )
      history.push('/login');
    })
    .catch(error => {
      console.log(error);
    });
};

export const fetchDataUsers = () => dispatch => {
  const token = localStorage.getItem('token');
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
  const token = localStorage.getItem('token');
  return axios
    .get(`https://music-byte.herokuapp.com/users/profile/${id_user}`, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(res => {
      dispatch(getOtherData(res.data.data[0]));
    });
};

export const userLike = (data, history) => dispatch => {
  const token = localStorage.getItem('token');
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
  const token = localStorage.getItem('token');
  return axios
    .post('https://music-byte.herokuapp.com/users/recruit/', data, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(async res => {
      //dispatch(fetchProfile(data.id_user,history));
      await Swal.fire({
        icon: 'info',
        title: 'Sent Email',
        text: 'Email has been send.',
      })
      history.push(`/main`);
    });
};

export const getComments = (id_user) => dispatch => {
  const token = localStorage.getItem('token');
  return axios
    .get(`https://music-byte.herokuapp.com/comments/${id_user}`, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(res => {
      dispatch(getDataComments(res.data.data));
    });
}

export const PostComments = (data) => dispatch => {
  const token = localStorage.getItem('token');
  return axios
    .post(`https://music-byte.herokuapp.com/comments`,data, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(async res => {
      await Swal.fire({
        icon: 'success',
        title: 'Yippi !',
        text: 'Comment added.',
      })
      dispatch(getComments(data.id_user));
    });
}