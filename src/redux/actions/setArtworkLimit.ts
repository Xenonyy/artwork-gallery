import { createAction } from '@reduxjs/toolkit';

import { actionTypes } from 'redux/actions/actionTypes';

export const setArtworkLimitAction = createAction<string>(actionTypes.SET_ARTWORK_LIMIT);
