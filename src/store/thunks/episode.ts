import { Dispatch } from '@reduxjs/toolkit';

import { requestAPI } from 'api';
import { setAppStatus, setEpisode } from 'store';

export const fetchEpisode = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setAppStatus({ status: 'loading' }));

    const { data } = await requestAPI.getEpisodes();

    dispatch(setEpisode({ episodes: data }));
    dispatch(setAppStatus({ status: 'succeeded' }));
  } catch (error) {
    if (error instanceof Error) {
      console.error(`error${error}`);
      dispatch(setAppStatus({ status: 'failed' }));
    }
  }
};
