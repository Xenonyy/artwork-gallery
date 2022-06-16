import { actionTypes } from 'redux/actions/actionTypes';

interface arraytypes {
  id: number;
  alt_titles: string | null;
  title: string;
  image_id: string;
}

export const artworksReducer = (
  state = {},
  action: {
    type: string;
    payload: { data: Record<string, arraytypes[]> };
    error: unknown;
  },
) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTWORKS_FULFILLED:
      return {
        ...state,
        data: action.payload.data,
      };

    case actionTypes.FETCH_ARTWORKS_PENDING:
      console.log('loading');

      return state;
    case actionTypes.FETCH_ARTWORKS_REJECTED:
      console.log('rejected');

      return state;

    default:
      return state;
  }
};
