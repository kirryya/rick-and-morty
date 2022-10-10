import { AxiosResponse } from 'axios';

import { config } from 'api/config';

export const requestAPI = {
  getCharacters(currentPage: number) {
    return config.get<AxiosResponse>(`character/?page=${currentPage}`);
  },
  getLocations() {
    return config.get<AxiosResponse>('location');
  },
  getEpisodes() {
    return config.get<AxiosResponse>('episode');
  },
};
