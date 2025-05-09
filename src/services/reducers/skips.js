import { actionTypes } from '../actions/skips';

// ==== 🗄️ Reducer
export const initialState = {
  get_skips_loading: false,
  get_skips_error: false,
  get_skips: [],

  selectedSkip: null,
};

export const skipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SKIPS_BY_LOCATION_REQUEST: {
      return {
        ...state,
        get_skips_loading: true,
      };
    }
    case actionTypes.GET_SKIPS_BY_LOCATION_SUCCESS: {
      return {
        ...state,
        get_skips_loading: false,
        get_skips: action.payload,
      };
    }
    case actionTypes.GET_SKIPS_BY_LOCATION_FAIL: {
      return {
        ...state,
        get_skips_loading: false,
        get_skips_error: action.payload,
      };
    }

    case actionTypes.SET_SELECTED_SKIP:
      return {
        ...state,
        selectedSkip: action.payload,
      };

    default:
      return state;
  }
};

export default skipsReducer;
