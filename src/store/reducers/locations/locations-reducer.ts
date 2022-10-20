import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { requestAPI } from 'api';
import { setAppStatus } from 'store/reducers/app/app-reducer';

const initialState: InitialStateType = {
  locations: {},
  location: {},
};

const slice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocations(state, action: PayloadAction<{ locations: any }>) {
      state.locations = action.payload.locations;
    },
    setLocation(state, action: PayloadAction<{ location: any }>) {
      state.location = action.payload.location;
    },
  },
});

export const locationReducer = slice.reducer;
export const { setLocations, setLocation } = slice.actions;

// thunks
export const fetchLocations = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setAppStatus({ status: 'loading' }));

    const res = await requestAPI.getLocations();

    dispatch(setLocations({ locations: res.data }));
    dispatch(setAppStatus({ status: 'succeeded' }));
  } catch (error) {
    if (error instanceof Error) {
      console.error(`error${error}`);
      dispatch(setAppStatus({ status: 'failed' }));
    }
  }
};

export const fetchLocation = (id: number) => async (dispatch: Dispatch) => {
  dispatch(setAppStatus({ status: 'loading' }));
  try {
    const res = await requestAPI.getLocation(id);

    dispatch(setLocation({ location: res.data }));
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
  location: any;
};
