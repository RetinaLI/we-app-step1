import { handleActions } from 'redux-actions';
import { ASYNC_PROFILE_INFO } from '../types/profile';

export default handleActions({
  [ASYNC_PROFILE_INFO] (state, action) {
    let platform = state.platform;

    if (action.payload) {
      platform = {
        platformCode: action.payload.platformCode,
        platformName: action.payload.platformName,
        name: action.payload.name
      };
    }

    return {
      ...state,
      user: action.payload || state.user,
      platform: platform
    };
  }
}, {
  user: null
});
