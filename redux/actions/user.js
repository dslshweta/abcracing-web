import { fetchUser as fetchUserApi, logoutUser as logoutUserApi } from '../../apis/user';

export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_END = 'FETCH_USER_END';
export const ERROR_USER = 'ERROR_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function fetchUserStart() {
  return ({ type: FETCH_USER_START });
}

export function fetchUserEnd(payload = {}) {
  return ({ type: FETCH_USER_END, payload });
}

export function raiseErrorFetchUser() {
  return ({ type: ERROR_USER });
}

export function logoutUser() {
  return (dispatch) => {
    logoutUserApi()
      .then(() => {})
      .catch(() => {});
    dispatch({ type: LOGOUT_USER });
  };
}
/*
 * @export function handleFetchUser action handler
 * loads the user from api
 */
export function getAuthUser() {
  return (dispatch) => {
    dispatch(fetchUserStart());
    fetchUserApi()
      .then((res) => {
        dispatch(fetchUserEnd(res.body));
      })
      .catch(() => {
        dispatch(raiseErrorFetchUser());
      });
  };
}
