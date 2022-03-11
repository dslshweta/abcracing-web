import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION } from '../actions/notification';

const initialState = {
  isOpen: false,
  info: {},
};

const REDUCER_HANDLERS = {
  [OPEN_NOTIFICATION]: (state, { payload }) => (
    {
      isOpen: true,
      info: payload,
    }
  ),
  [CLOSE_NOTIFICATION]: () => (
    {
      ...initialState,
    }
  ),
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function notifyReducer(state = initialState, action) {
  const handler = REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
