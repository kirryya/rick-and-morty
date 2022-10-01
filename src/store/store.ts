import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';

import { characterReducer } from 'store/reducers/character/character-reducer';

const rootReducer = combineReducers({
  character: characterReducer,
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
