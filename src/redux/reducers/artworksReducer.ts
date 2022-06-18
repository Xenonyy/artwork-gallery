import { actionTypes } from 'redux/actions/actionTypes';
import type { AxiosPayloadType } from 'types/axiosPayloadType';
import type { FetchArtworkStateType } from 'types/fetchArtworkStateType';

export const artworksReducer = (state: FetchArtworkStateType = null, action: AxiosPayloadType) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTWORKS_FULFILLED:
      return {
        ...state,
        data: action.payload.data,
        status: action.meta.requestStatus,
        pagination: action.payload.pagination,
      };

    case actionTypes.FETCH_ARTWORKS_PENDING:
      return {
        ...state,
        status: action.meta.requestStatus,
      };
    case actionTypes.FETCH_ARTWORKS_REJECTED:
      return {
        ...state,
        status: action.meta.requestStatus,
      };

    default:
      return state;
  }
};
