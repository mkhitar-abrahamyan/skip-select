// ==== 💪 Action Types
export const actionTypes = {
  GET_SKIPS_BY_LOCATION_REQUEST: '@skips/get-skips-by-location-request',
  GET_SKIPS_BY_LOCATION_SUCCESS: '@skips/get-skips-by-location-success',
  GET_SKIPS_BY_LOCATION_FAIL: '@skips/get-skips-by-location-fail',

  SET_SELECTED_SKIP: 'SET_SELECTED_SKIP',
};

// ==== 🎬 Actions
export const getSkips = (postcode) => ({
  type: actionTypes.GET_SKIPS_BY_LOCATION_REQUEST,
  payload: { postcode },
});

export const setSelectedSkip = (skipId) => ({
  type: actionTypes.SET_SELECTED_SKIP,
  payload: skipId,
});
