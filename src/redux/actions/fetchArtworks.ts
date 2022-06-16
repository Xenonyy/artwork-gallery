import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';

import { getArtworks } from 'api/getArtworks';
import { actionTypes } from 'redux/actions/actionTypes';

export const fetchArtworksAction = createAsyncThunk(actionTypes.FETCH_ARTWORKS, async () => {
  return await getArtworks().then((response: AxiosResponse<unknown>) => {
    return response.data;
  });
});
