import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { requestAPI } from 'api';

const initialState: any = '';

const slice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacter(state, action: PayloadAction<{ characters: any }>) {
      return action.payload.characters;
    },
  },
});

export const characterReducer = slice.reducer;
export const { setCharacter } = slice.actions;

// thunks
export const fetchCharacter = () => async (dispatch: Dispatch) => {
  try {
    const res = await requestAPI.getCharacters();

    dispatch(setCharacter({ characters: res.data }));
  } catch (error) {
    if (error instanceof Error) {
      console.log(`error${error}`);
    }
  }
};
