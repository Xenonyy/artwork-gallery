import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';
import type { Dispatch } from 'react';
import type { AnyAction } from 'redux';

import { getArtworks } from 'api/getArtworks';
import { actionTypes } from 'redux/actions/actionTypes';

// export async function fetchArtworks() {
//   return await getArtworks().then((response: AxiosResponse<unknown>) => {
//     return {
//       type: actionTypes.FETCH_ARTWORKS,
//       payload: response.data,
//     };
//   });
// }

export const fetchArtworksAction = createAsyncThunk(actionTypes.FETCH_ARTWORKS, async () => {
  return await getArtworks().then((response: AxiosResponse<unknown>) => {
    return response.data;
  });
});
// export const fetchArtworks = createAction(actionTypes.FETCH_ARTWORKS);
