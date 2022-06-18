import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';

import { getArtworks } from 'api/getArtworks';
import { actionTypes } from 'redux/actions/actionTypes';

export const fetchArtworksAction = createAsyncThunk(
  actionTypes.FETCH_ARTWORKS,
  async ({ limit, page }: { limit: string; page: string }) => {
    return await getArtworks(limit ? limit : '25', page ? page : '1').then(
      (response: AxiosResponse<unknown>) => {
        return response.data;
      },
    );
  },
);
