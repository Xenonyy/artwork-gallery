import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';

import { getArtworkSearch } from 'api/getArtworkSearch';
import { actionTypes } from 'redux/actions/actionTypes';

export const fetchArtworkSearchAction = createAsyncThunk(
  actionTypes.FETCH_ARTWORK_SEARCH,
  async (search: string) => {
    return await getArtworkSearch(search).then((response: AxiosResponse<unknown>) => {
      return response.data;
    });
  },
);
