import {
  UPDATE_SETTING,
  HAS_STARRED_SUCCESS,
  HAS_STARRED_FAILURE
} from '../actions';

const initialState = {
  participating: false,
  playSound: true,
  showNotifications: true,
  markOnClick: false,
  openAtStartup: false,
  hasStarred: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SETTING:
      return {
        ...state,
        [action.setting]: action.value
      };
    case HAS_STARRED_SUCCESS:
      return {
        ...state,
        hasStarred: true
      };
    case HAS_STARRED_FAILURE:
      return {
        ...state,
        hasStarred: false
      };
    default:
      return state;
  }
};
