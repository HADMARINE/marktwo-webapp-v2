export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://api.dodoli.net';

export default baseURL;
