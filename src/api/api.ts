import { AxiosResponse } from 'axios';

import { config } from 'api/config';

export const requestAPI = {
  getCharacters(currentPage: number) {
    return config.get<AxiosResponse>(`character/?page=${currentPage}`);
  },
  getCharacter(id: number) {
    return config.get<AxiosResponse>(`character/${id}`);
  },
  getLocations() {
    return config.get<AxiosResponse>('location');
  },
  getLocation(id: number) {
    return config.get<AxiosResponse>(`location/${id}`);
  },
  getEpisodes() {
    return config.get<AxiosResponse>('episode');
  },
};
