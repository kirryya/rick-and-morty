import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { requestAPI } from 'api';
import { setAppStatus } from 'store/reducers/app/app-reducer';

const initialState: InitialStateType = {
  characters: {},
  currentPage: 1,
};

const slice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacter(state, action: PayloadAction<{ characters: any }>) {
      state.characters = action.payload.characters;
    },
    setCurrentPage(state, action: PayloadAction<{ currentPage: number }>) {
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const characterReducer = slice.reducer;
export const { setCharacter, setCurrentPage } = slice.actions;

// thunks
export const fetchCharacter = (currentPage: number) => async (dispatch: Dispatch) => {
  dispatch(setAppStatus({ status: 'loading' }));
  dispatch(setCurrentPage({ currentPage }));
  try {
    const res = await requestAPI.getCharacters(currentPage);

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
  currentPage: number;
};
