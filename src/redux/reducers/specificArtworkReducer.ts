import { actionTypes } from 'redux/actions/actionTypes';

export const specificArtworkReducer = (
  state = {},
  action: {
    type: string;
    payload: { data: Record<string, unknown[]> };
    error: unknown;
  },
) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTWORK_FULFILLED:
      console.log('success', action);

      return {
        ...state,
        data: action.payload.data,
      };

    case actionTypes.FETCH_ARTWORK_PENDING:
      console.log('loading');

      return state;
    case actionTypes.FETCH_ARTWORK_REJECTED:
      console.log('rejected');

      return state;

    default:
      console.log('default');

      return state;
  }
};
