import axios from 'axios';
// На продакшн
// const baseURL = 'https://server.infy-corp.com/react-api';
// На тестовый сервер
const baseURL = 'http://api.infy-corp.com/react-api';

const refreshToken = (jwt) => {
  axios.post(`${baseURL}/token/refresh`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${jwt}`,
    },
  }).then((res) => {
    localStorage.setItem('jwt', res.access_token);
    localStorage.setItem('rt', res.refresh_token);
  })
}

export const getUserData = () => {
  const jwt = localStorage.getItem('jwt');
  axios.get(`${baseURL}/user/get-user`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${jwt}`,
    },
  })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err.status)
      // if (err.status === 403) {
      //   refreshToken(jwt).then(() => {
      //     axios.get(`${baseURL}/user/get-user`, {
      //       headers: {
      //         'Content-Type': 'application/x-www-form-urlencoded',
      //         'Authorization': `Bearer ${jwt}`,
      //       },
      //     })
      //   })
      // }
    })
}