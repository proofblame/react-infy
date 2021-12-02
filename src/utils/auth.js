class Auth {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  register(username, joinedBy, email, password, telegram) {
    return fetch(`${this.baseURL}/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: `${username}`,
        password: `${password}`,
        joinedBy: `${joinedBy}`,
        email: `${email}`,
        telegram: `${telegram}`,
      }),
    }).then(this._getResponseData);
  }

  login(username, password) {
    return fetch(`${this.baseURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: `${username}`,
        password: `${password}`,
      }),
    }).then(this._getResponseData);
  }
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(res));

  }
}

// Сервер на продакшн
const auth = new Auth('https://server.infy-corp.com/react-api');

// Для теста
// const auth = new Auth("http://api.infy-corp.com/react-api");

// Для локального теста
// const auth = new Auth('http://localhost:3000');

export default auth;
