import { createAction } from '@reduxjs/toolkit';

import { actionTypes } from 'redux/actions/actionTypes';

export const setSearchDataAction = createAction<string>(actionTypes.SET_SEARCH_DATA);
