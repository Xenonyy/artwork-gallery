import type { PayloadAction } from '@reduxjs/toolkit';

import { actionTypes } from 'redux/actions/actionTypes';

export const setSearchDataResultsReducer = (state = '', action: PayloadAction<unknown[]>) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_DATA_RESULTS:
      return action.payload;

    default:
      return state;
  }
};
