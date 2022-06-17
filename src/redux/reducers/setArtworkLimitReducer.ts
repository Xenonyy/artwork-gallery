import type { PayloadAction } from '@reduxjs/toolkit';

import { actionTypes } from 'redux/actions/actionTypes';

export const setArtworkLimitReducer = (state = '', action: PayloadAction<string>) => {
  switch (action.type) {
    case actionTypes.SET_ARTWORK_LIMIT:
      return action.payload;

    default:
      return state;
  }
};
