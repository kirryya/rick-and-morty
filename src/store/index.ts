export { fetchCharacters, fetchCharacter } from './thunks/character';
export { fetchEpisode } from './thunks/episode';
export { fetchLocations, fetchLocation } from './thunks/location';
export { setAppStatus } from './reducers/app/app-reducer';
export {
  appReducer,
  characterReducer,
  episodeReducer,
  locationReducer,
  setLocation,
  setLocations,
  setEpisode,
  setCharacter,
  setCharacters,
  setCurrentPage,
} from './reducers';

export type { AppRootStateType, TypedDispatch } from './store';
