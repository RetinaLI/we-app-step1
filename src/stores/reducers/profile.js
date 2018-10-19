import { handleActions } from 'redux-actions';
import { ASYNC_PROFILE_INFO } from '../types/profile';

export default handleActions({
  [ASYNC_PROFILE_INFO] (state, action) {
    return {
      ...state,
      user: action.payload || state.user
    };
  }
}, {
  user: null
});
