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
} from './reducers';

export type { StateType, TypedDispatch } from './store';
