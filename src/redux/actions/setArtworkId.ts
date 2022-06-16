import { createAction } from '@reduxjs/toolkit';

import { actionTypes } from 'redux/actions/actionTypes';

export const setArtworkIdAction = createAction<string>(actionTypes.SET_ARTWORKID);
