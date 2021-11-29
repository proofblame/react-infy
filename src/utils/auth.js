class Auth {
  constructor(baseURL) {
    this.baseURL = baseURL;
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
  refreshToken(jwt) {
    return fetch(`${this.baseURL}/token/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${jwt}`,
      }
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
  getTreeInfo(jwt, line, page, size) {
    return fetch(`${this.baseURL}/team/tree/get`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${jwt}`,
      },
      body: new URLSearchParams({
        'line': `${line}`,
        'page': `${page}`,
        'size': `${size}`,
      }),
    })
      .then(this._getResponseData);
  }
  // Получить данные транзакций
  getTransactionsInfo(jwt, page, size) {
    return fetch(`${this.baseURL}/history/get`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${jwt}`,
      },
      body: new URLSearchParams({
        'page': `${page}`,
        'size': `${size}`,
      }),
    })
      .then(this._getResponseData);
  }
  // Перевести на другой кошелек
  sendInfy(jwt, walletTo, amount) {
    return fetch(`${this.baseURL}/wallet/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${jwt}`,
      },
      body: new URLSearchParams({
        'walletTo': `${walletTo}`,
        'amount': `${amount}`,
      }),
    })
      .then(this._getResponseData);
  }
  // Отправить в стейкинг
  delegateInfy(jwt, amountDel) {
    return fetch(`${this.baseURL}/wallet/delegate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${jwt}`,
      },
      body: new URLSearchParams({
        'amountDel': `${amountDel}`,
      }),
    })
      .then(this._getResponseData);
  }
  // Вывод из стейкинга
  undelegateInfy(jwt, amountUndel) {
    return fetch(`${this.baseURL}/wallet/undelegate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${jwt}`,
      },
      body: new URLSearchParams({
        'amountUndel': `${amountUndel}`,
      }),
    })
      .then(this._getResponseData);
  }
  // Получить данные о тарифе
  getTarif(jwt) {
    return fetch(`${this.baseURL}/tariff/get`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${jwt}`,
      }
    })
      .then(this._getResponseData);
  }

  // Оплатить тариф
  payTarif(jwt) {
    return fetch(`${this.baseURL}/tariff/pay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${jwt}`,
      }
    })
      .then(this._getResponseData);
  }

  // Получить вопросы
  getLessions(jwt) {
    return fetch(`${this.baseURL}/learn/get-question`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${jwt}`,
      }
    })
      .then(this._getResponseData);
  }

  // Отправить вопросы
  sendAnswers(jwt, lessonNumber, list) {
    return fetch(`${this.baseURL}/learn/answer?lessonNumber=${lessonNumber}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
      body: JSON.stringify(list),
    })
      .then(this._getResponseData);
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Возникла ошибка: ${res}`));

  }
}

// Сервер на продакшн
const auth = new Auth('https://server.infy-corp.com/react-api');

// Для теста
// const auth = new Auth('http://api.infy-corp.com/react-api');

// Для локального теста
// const auth = new Auth('http://localhost:3000');

export default auth;
