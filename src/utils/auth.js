class Auth {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  _getResponseData(res) {
    if (res.ok) return res.json();
    return res
      .json()
      .then((res) => Promise.reject(new Error(res.message || res.error)));
  }

  register(username, joinedBy, email, password, telegram) {
    return fetch(`${this.baseURL}/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'username': `${username}`,
        'password': `${password}`,
        'joinedBy': `${joinedBy}`,
        'email': `${email}`,
        'telegram': `${telegram}`
      }),
    }).then(this._getResponseData);
  }

  login(username, password) {
    return fetch(`${this.baseURL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'username': `${username}`,
        'password': `${password}`,
      })
    })
      .then(this._getResponseData);
  }

  // Получить данные пользователя
  getUserInfo(jwt) {
    return fetch(`${this.baseURL}/user/get-user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${jwt}`,
      },
    })
      .then(this._getResponseData);
  }
  // Получить данные кошелька
  getWalletInfo(jwt) {
    return fetch(`${this.baseURL}/wallet/get`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${jwt}`,
      },
    })
      .then(this._getResponseData);
  }
  // Получить данные кошелька
  getTeamInfo(jwt) {
    return fetch(`${this.baseURL}/team/get`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${jwt}`,
      },
    })
      .then(this._getResponseData);
  }
    // Получить данные дерева
    getTreeInfo(jwt, user, line, page, size) {
      return fetch(`${this.baseURL}/team/tree/get`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${jwt}`,
        },
        body: new URLSearchParams({
          'user': `${user}`,
          'line': `${line}`,
          'page': `${page}`,
          'size': `${size}`,
        }),
      })
        .then(this._getResponseData);
    }
        // Получить данные транзакций
        getTransactionsInfo(jwt, user, page, size) {
          return fetch(`${this.baseURL}/history/get`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': `Bearer ${jwt}`,
            },
            body: new URLSearchParams({
              'user': `${user}`,
              'page': `${page}`,
              'size': `${size}`,
            }),
          })
            .then(this._getResponseData);
        }
}

const auth = new Auth('http://84.38.185.10:8080/react-api');
// const auth = new Auth('http://localhost:3000');

export default auth;
