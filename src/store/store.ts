import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';

import { appReducer } from 'store/reducers/app/app-reducer';
import { characterReducer } from 'store/reducers/character/character-reducer';
import { episodeReducer } from 'store/reducers/episodes/episodes-reducer';
import { locationReducer } from 'store/reducers/locations/locations-reducer';

const rootReducer = combineReducers({
  character: characterReducer,
  location: locationReducer,
  episode: episodeReducer,
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppActionType = any;
export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AppActionType>;

// @ts-ignore
window.store = store;
