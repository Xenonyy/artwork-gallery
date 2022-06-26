import type { PayloadAction } from '@reduxjs/toolkit';

import { actionTypes } from 'redux/actions/actionTypes';

export const setSearchDataReducer = (state = '', action: PayloadAction<string>) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_DATA:
      return action.payload;

    default:
      return state;
  }
};
