import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { requestAPI } from 'api';
import { setAppStatus } from 'store/reducers/app/app-reducer';

const initialState: InitialStateType = {
  episodes: {},
};

const slice = createSlice({
  name: 'episode',
  initialState,
  reducers: {
    setEpisode(state, action: PayloadAction<{ episodes: any }>) {
      state.episodes = action.payload.episodes;
    },
  },
});

export const episodeReducer = slice.reducer;
export const { setEpisode } = slice.actions;

// thunks
export const fetchEpisode = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setAppStatus({ status: 'loading' }));

    const res = await requestAPI.getEpisodes();

    dispatch(setEpisode({ episodes: res.data }));
    dispatch(setAppStatus({ status: 'succeeded' }));
  } catch (error) {
    if (error instanceof Error) {
      console.error(`error${error}`);
      dispatch(setAppStatus({ status: 'failed' }));
    }
  }
};

export type InitialStateType = {
  episodes: any;
};
