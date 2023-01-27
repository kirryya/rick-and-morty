import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialLocationStateType } from 'types';

const initialState: InitialLocationStateType = {
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
