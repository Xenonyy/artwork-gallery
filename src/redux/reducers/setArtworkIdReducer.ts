import type { PayloadAction } from '@reduxjs/toolkit';

import { actionTypes } from 'redux/actions/actionTypes';

export const setArtworkIdReducer = (state = '', action: PayloadAction<string>) => {
  switch (action.type) {
    case actionTypes.SET_ARTWORKID:
      return action.payload;

    default:
      return state;
  }
};
