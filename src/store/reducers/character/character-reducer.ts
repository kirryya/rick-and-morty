import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialCharacterStateType } from 'types';

const initialState: InitialCharacterStateType = {
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
