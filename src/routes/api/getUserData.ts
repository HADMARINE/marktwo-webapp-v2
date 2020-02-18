import client from './client';
import publicIp from 'public-ip';

export default async function getUserData() {
  const loginResult = await client
    .post(
      '/auth/',
      {
        userip: await publicIp.v4()
      },
      {
        headers: {
          'x-access-token': sessionStorage.getItem('token')
        }
      }
    )
    .then(async res => {
      return res;
    })
    .catch(async error => {
      const err = error.response;
      console.log(`Error ${err.status} : ${err.data.message}`);
      let displayError = err.data.message;
      if (!displayError) {
        displayError = '서버 접속에 실패했습니다.';
      }

      return {
        result: false,
        ...err
      };
    });
  return loginResult;
}
