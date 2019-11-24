export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://api.marktwo.net';

export default baseURL;
