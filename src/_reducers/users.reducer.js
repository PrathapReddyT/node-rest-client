import { userConstants } from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_PROFILE_REQUEST:
      return {
        loading: true
      };
    case userConstants.GET_PROFILE_SUCCESS:
      return {
        user: action.user
      };
    case userConstants.GET_PROFILE_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
