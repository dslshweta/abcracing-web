import Router from 'next/router';
import { loginUser as loginUserApi } from '../../apis/login';
import { notify } from './notification';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_END = 'LOGIN_USER_END';
export const ERROR_USER_LOGIN = 'ERROR_USER';

export function loginUserStart() {
  return ({ type: LOGIN_USER_START });
}

export function loginUserEnd(payload = {}) {
  return ({ type: LOGIN_USER_END, payload });
}

export function raiseErrorLoginUser() {
  return ({ type: ERROR_USER_LOGIN });
}

export function loginUser(values) {
  return (dispatch) => {
    dispatch(loginUserStart());
    loginUserApi(values)
      .then((res) => {
        dispatch(loginUserEnd(res));
        Router.push('/profile');
      })
      .catch(() => {
        dispatch(notify({ type: 'error', message: 'Invalid Credentials' }));
        dispatch(raiseErrorLoginUser());
      });
  };
}
