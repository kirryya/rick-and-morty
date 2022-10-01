import axios from 'axios';

export const config = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});
