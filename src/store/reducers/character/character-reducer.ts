import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { requestAPI } from 'api';
import { setAppStatus } from 'store/reducers/app/app-reducer';

const initialState: InitialStateType = {
  characters: {},
  character: {},
  currentPage: 1,
};

const slice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<{ characters: any }>) {
      state.characters = action.payload.characters;
    },
    setCurrentPage(state, action: PayloadAction<{ currentPage: number }>) {
      state.currentPage = action.payload.currentPage;
    },
    setCharacter(state, action: PayloadAction<{ character: any }>) {
      state.character = action.payload.character;
    },
  },
});

export const characterReducer = slice.reducer;
export const { setCharacters, setCurrentPage, setCharacter } = slice.actions;

// thunks
export const fetchCharacters = (currentPage: number) => async (dispatch: Dispatch) => {
  dispatch(setAppStatus({ status: 'loading' }));
  dispatch(setCurrentPage({ currentPage }));
  try {
    const res = await requestAPI.getCharacters(currentPage);

    dispatch(setCharacters({ characters: res.data }));
    dispatch(setAppStatus({ status: 'succeeded' }));
  } catch (error) {
    if (error instanceof Error) {
      console.error(`error${error}`);
      dispatch(setAppStatus({ status: 'failed' }));
    }
  }
};

export const fetchCharacter = (id: number) => async (dispatch: Dispatch) => {
  dispatch(setAppStatus({ status: 'loading' }));
  try {
    const res = await requestAPI.getCharacter(id);

    dispatch(setCharacter({ character: res.data }));
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
  character: any;
  currentPage: number;
};
