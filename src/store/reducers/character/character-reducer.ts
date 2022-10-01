import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { requestAPI } from 'api';

const initialState: any = {};

const slice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacter(state, action: PayloadAction<any>) {
      return { ...action.payload };
    },
  },
});

export const characterReducer = slice.reducer;
export const { setCharacter } = slice.actions;

// thunks
export const fetchCharacter = () => async (dispatch: Dispatch) => {
  try {
    const res = await requestAPI.getCharacters();

    console.log(res.data);
    dispatch(setCharacter(res.data));
  } catch (error) {
    if (error instanceof Error) {
      console.log(`error${error}`);
    }
  }
};
