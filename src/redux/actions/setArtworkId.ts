import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';
import type { Dispatch } from 'react';
import type { AnyAction } from 'redux';

import { getSpecificArtwork } from 'api/getSpecificArtwork';
import { actionTypes } from 'redux/actions/actionTypes';

export const setArtworkIdAction = createAction<string>(actionTypes.SET_ARTWORKID);
