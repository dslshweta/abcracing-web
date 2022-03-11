export const OPEN_NOTIFICATION = 'OPEN_NOTIFICATION';
export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION';

export function openNotification(payload) {
  return ({
    type: OPEN_NOTIFICATION,
    payload,
  });
}

export function notify(payload) {
  return (dispatch) => {
    dispatch(openNotification(payload));
  };
}

export function closeNotification() {
  return {
    type: CLOSE_NOTIFICATION,
  };
}
