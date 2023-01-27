import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EpisodesType, InitialEpisodeStateType } from 'types';

const initialState: InitialEpisodeStateType = {
  episodes: {},
};

const slice = createSlice({
  name: 'episode',
  initialState,
  reducers: {
    setEpisode(state, action: PayloadAction<{ episodes: EpisodesType }>) {
      state.episodes = action.payload.episodes;
    },
  },
});

export const episodeReducer = slice.reducer;
export const { setEpisode } = slice.actions;
