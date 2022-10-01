import { AxiosResponse } from 'axios';

import { config } from 'api/config';

export const requestAPI = {
  getCharacters() {
    return config.get<AxiosResponse>('character');
  },
  getLocations() {
    return config.get<AxiosResponse>('location');
  },
  getEpisodes() {
    return config.get<AxiosResponse>('episode');
  },
};
