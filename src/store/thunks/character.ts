import { Dispatch } from '@reduxjs/toolkit';

import { requestAPI } from 'api';
import { setAppStatus, setCharacter, setCharacters } from 'store';

export const fetchCharacters = (currentPage: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(setAppStatus({ status: 'loading' }));

    const { data } = await requestAPI.getCharacters(currentPage);

    dispatch(setCharacters({ characters: data }));
    dispatch(setAppStatus({ status: 'succeeded' }));
  } catch (error) {
    if (error instanceof Error) {
      console.error(`error${error}`);
      dispatch(setAppStatus({ status: 'failed' }));
    }
  }
};

export const fetchCharacter = (id: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(setAppStatus({ status: 'loading' }));

    const { data } = await requestAPI.getCharacter(id);

    dispatch(setCharacter({ character: data }));
    dispatch(setAppStatus({ status: 'succeeded' }));
  } catch (error) {
    if (error instanceof Error) {
      console.error(`error${error}`);
      dispatch(setAppStatus({ status: 'failed' }));
    }
  }
};
