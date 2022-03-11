// import apiCall from './apiRequest';
// import endPoints from './endpoints';

export function loginUser() {
  // return apiCall({
  //   endpoint: endPoints.me
  // });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        access_token: 'token received',
      });
    }, 2000);
  });
}

export default {
  loginUser,
};
