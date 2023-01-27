import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialAppStateType, RequestStatusType } from 'types';

const initialState: InitialAppStateType = {
  status: 'idle',
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
      state.status = action.payload.status;
    },
  },
});

export const appReducer = slice.reducer;
export const { setAppStatus } = slice.actions;
