import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';
import type { Dispatch } from 'react';
import type { AnyAction } from 'redux';

import { getSpecificArtwork } from 'api/getSpecificArtwork';
import { actionTypes } from 'redux/actions/actionTypes';

// const fetchSpecificArtworkAction = (id: string) => async (dispatch: Dispatch<AnyAction>) => {
//   return await getSpecificArtwork(id).then((response: AxiosResponse<unknown>) => {
//     dispatch({
//       type: actionTypes.FETCH_ARTWORK,
//       payload: response.data,
//     });
//   });
// };

// export default fetchSpecificArtworkAction;
export const fetchSpecificArtworkAction = createAsyncThunk(
  actionTypes.FETCH_ARTWORK,
  async (id: string) => {
    return await getSpecificArtwork(id).then((response: AxiosResponse<unknown>) => {
      return response.data;
    });
  },
);
