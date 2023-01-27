import { Dispatch } from '@reduxjs/toolkit';

import { requestAPI } from 'api';
import { setAppStatus, setLocation, setLocations } from 'store';

export const fetchLocations = (currentPage: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(setAppStatus({ status: 'loading' }));

    const { data } = await requestAPI.getLocations(currentPage);

    dispatch(setLocations({ locations: data }));
    dispatch(setAppStatus({ status: 'succeeded' }));
  } catch (error) {
    if (error instanceof Error) {
      console.error(`error${error}`);
      dispatch(setAppStatus({ status: 'failed' }));
    }
  }
};

export const fetchLocation = (id: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(setAppStatus({ status: 'loading' }));

    const { data } = await requestAPI.getLocation(id);

    dispatch(setLocation({ location: data }));
    dispatch(setAppStatus({ status: 'succeeded' }));
  } catch (error) {
    if (error instanceof Error) {
      console.error(`error${error}`);
      dispatch(setAppStatus({ status: 'failed' }));
    }
  }
};
