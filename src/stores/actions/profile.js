import { ASYNC_PROFILE_INFO } from '../types/profile'
import { createAction } from 'redux-actions'
import profileService from '../../services/profile';

export const asyncProfileInfo = createAction(ASYNC_PROFILE_INFO, () => {
  return profileService.getCurrentUser();
})