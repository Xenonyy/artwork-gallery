import { actionTypes } from 'redux/actions/actionTypes';
import type { AxiosPayloadType } from 'types/axiosPayloadType';
import type { FetchArtworkStateType } from 'types/fetchArtworkStateType';

export const searchArtworksReducer = (
  state: FetchArtworkStateType = null,
  action: AxiosPayloadType,
) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTWORK_SEARCH_FULFILLED:
      return {
        ...state,
        data: action.payload.data,
        status: action.meta.requestStatus,
        pagination: action.payload.pagination,
      };

    case actionTypes.FETCH_ARTWORK_SEARCH_PENDING:
      return {
        ...state,
        status: action.meta.requestStatus,
      };
    case actionTypes.FETCH_ARTWORK_SEARCH_REJECTED:
      return {
        ...state,
        status: action.meta.requestStatus,
      };

    default:
      return state;
  }
};
