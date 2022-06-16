import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';

import { getSpecificArtwork } from 'api/getSpecificArtwork';
import { actionTypes } from 'redux/actions/actionTypes';

export const fetchSpecificArtworkAction = createAsyncThunk(
  actionTypes.FETCH_ARTWORK,
  async (id: string) => {
    return await getSpecificArtwork(id).then((response: AxiosResponse<unknown>) => {
      return response.data;
    });
  },
);
