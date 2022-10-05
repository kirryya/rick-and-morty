import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { requestAPI } from 'api';
import { setAppStatus } from 'store/reducers/app/app-reducer';

const initialState: InitialStateType = {
  characters: {},
};

const slice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacter(state, action: PayloadAction<{ characters: any }>) {
      state.characters = action.payload.characters;
    },
  },
});

export const characterReducer = slice.reducer;
export const { setCharacter } = slice.actions;

// thunks
export const fetchCharacter = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setAppStatus({ status: 'loading' }));

    const res = await requestAPI.getCharacters();

    dispatch(setCharacter({ characters: res.data }));
    dispatch(setAppStatus({ status: 'succeeded' }));
  } catch (error) {
    if (error instanceof Error) {
      console.error(`error${error}`);
      dispatch(setAppStatus({ status: 'failed' }));
    }
  }
};

export type InitialStateType = {
  characters: any;
};
