import axios from 'axios';

export const config = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});
