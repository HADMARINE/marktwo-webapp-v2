import axios from 'axios';
import apiUri from './getApiUri';

const client = axios.create({
  baseURL: apiUri
});

export default client;
