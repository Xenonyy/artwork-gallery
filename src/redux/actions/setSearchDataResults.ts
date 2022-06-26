import { createAction } from '@reduxjs/toolkit';

import { actionTypes } from 'redux/actions/actionTypes';

export const setSearchDataResultsAction = createAction<unknown[]>(
  actionTypes.SET_SEARCH_DATA_RESULTS,
);
