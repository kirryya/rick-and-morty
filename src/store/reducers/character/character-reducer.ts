import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialCharacterStateType } from 'types';

const initialState: InitialCharacterStateType = {
  characters: {
    info: {},
    results: [],
  },
  character: {},
};

const slice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<{ characters: any }>) {
      state.characters = action.payload.characters;
    },
    setCharacter(state, action: PayloadAction<{ character: any }>) {
      state.character = action.payload.character;
    },
  },
});

export const characterReducer = slice.reducer;
export const { setCharacters, setCharacter } = slice.actions;
