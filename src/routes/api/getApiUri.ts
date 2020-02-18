export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:60010'
    : 'https://api.marktwo.net';

export default baseURL;
