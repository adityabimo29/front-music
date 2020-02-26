import axios from 'axios';
export const LOG_IN = 'LOG_IN';
export const SIGN_UP = 'SIGN_UP';

export const setSignup = data => {
  return {
    type: SIGN_UP,
    payload: data
  };
};

export const isLogin = () => dispatch => {
  const token = localStorage.getItem('token'); //islogin get toke n jika ada token
  // dia ubah status state jika true
  if (token) {
    dispatch(
      setLogin({
        isLogin: true
      })
    );
  } else {
    dispatch(setLogin());
  }
};

export const setLogin = data => {
  return {
    type: LOG_IN,
    payload: data
  };
};

export const login = (values, history) => dispatch => {
  return axios({
    method: 'POST',
    url: 'https://music-byte.herokuapp.com/users/login',
    data: values
  })
    .then(response => {
      if (response.status === 200) {
        console.log('token', response.data.token);

        localStorage.setItem('token', response.data.token);
        dispatch(isLogin()); //dispact sebuah fungsi isLogin
        history.push('/Main');
      }
    })
    .catch(error => {
      console.log(error);
      alert('Please to SignUp because not register ');
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
      alert(' Register Successfull');
      history.push('/login');
    })
    .catch(error => {
      console.log(error);
      alert('Please repeat to SignUp');
    });
};
