import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { requestAPI } from 'api';
import { setAppStatus } from 'store/reducers/app/app-reducer';

const initialState: InitialStateType = {
  locations: {},
};

const slice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<{ locations: any }>) {
      state.locations = action.payload.locations;
    },
  },
});

export const locationReducer = slice.reducer;
export const { setLocation } = slice.actions;

// thunks
export const fetchLocation = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setAppStatus({ status: 'loading' }));

    const res = await requestAPI.getLocations();

    dispatch(setLocation({ locations: res.data }));
    dispatch(setAppStatus({ status: 'succeeded' }));
  } catch (error) {
    if (error instanceof Error) {
      console.error(`error${error}`);
      dispatch(setAppStatus({ status: 'failed' }));
    }
  }
};

export type InitialStateType = {
  locations: any;
};
