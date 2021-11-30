// На продакшн
const baseURL = 'https://server.infy-corp.com/react-api';

// На тестовый сервер
// const baseURL = 'http://api.infy-corp.com/react-api';

// Возвращаем объект ответа
const getResponseData = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Возникла ошибка: ${res}`));
}
//  Регистрация
const register = async (username, joinedBy, email, password, telegram) => {
  const res = await fetch(`${baseURL}/registration`, {
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
  });
  return getResponseData(res);
}

// Логин
const login = async (username, password) => {
  const res = await fetch(`${baseURL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'username': `${username}`,
      'password': `${password}`,
    })
  });
  return getResponseData(res);
}

// Обновить токен
const refreshToken = async (rt) => {
  const res = await fetch(`${baseURL}/token/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${rt}`,
    }
  });
  return getResponseData(res);
}

//  Получить данные пользователя
const getUserInfo = async (jwt) => {
  const res = await fetch(`${baseURL}/user/get-user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${jwt}`,
    },
  });
  return getResponseData(res);
}

// Получить данные кошелька
const getWalletInfo = async (jwt) => {
  const res = await fetch(`${baseURL}/wallet/get`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${jwt}`,
    },
  });
  return getResponseData(res);
}

// Получить данные команды
const getTeamInfo = async (jwt) => {
  const res = await fetch(`${baseURL}/team/get`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${jwt}`,
    },
  });
  return getResponseData(res);
}

// Получить данные дерева
const getTreeInfo = async (jwt, line, page, size) => {
  const res = await fetch(`${baseURL}/team/tree/get`, {
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
  });
  return getResponseData(res);
}
// Получить данные транзакций
const getTransactionsInfo = async (jwt, page, size) => {
  const res = await fetch(`${baseURL}/history/get`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${jwt}`,
    },
    body: new URLSearchParams({
      'page': `${page}`,
      'size': `${size}`,
    }),
  });
  return getResponseData(res);
}
// Перевести на другой кошелек
const sendInfy = async (jwt, walletTo, amount) => {
  const res = await fetch(`${baseURL}/wallet/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${jwt}`,
    },
    body: new URLSearchParams({
      'walletTo': `${walletTo}`,
      'amount': `${amount}`,
    }),
  });
  return getResponseData(res);
}
// Отправить в стейкинг
const delegateInfy = async (jwt, amountDel) => {
  const res = await fetch(`${baseURL}/wallet/delegate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${jwt}`,
    },
    body: new URLSearchParams({
      'amountDel': `${amountDel}`,
    }),
  });
  return getResponseData(res);
}
// Вывод из стейкинга
const undelegateInfy = async (jwt, amountUndel) => {
  const res = await fetch(`${baseURL}/wallet/undelegate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${jwt}`,
    },
    body: new URLSearchParams({
      'amountUndel': `${amountUndel}`,
    }),
  });
  return getResponseData(res);
}
// Получить данные о тарифе
const getTarif = async (jwt) => {
  const res = await fetch(`${baseURL}/tariff/get`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${jwt}`,
    }
  });
  return getResponseData(res);
}

// Оплатить тариф
const payTarif = async (jwt) => {
  const res = await fetch(`${baseURL}/tariff/pay`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${jwt}`,
    }
  });
  return getResponseData(res);
}

// Получить вопросы
const getLessionsInfo = async (jwt) => {
  const res = await fetch(`${baseURL}/learn/get-question`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${jwt}`,
    }
  });
  return getResponseData(res);
}

// Отправить вопросы
const sendAnswers = async (jwt, lessonNumber, list) => {
  const res = await fetch(`${baseURL}/learn/answer?lessonNumber=${lessonNumber}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    },
    body: JSON.stringify(list),
  });
  return getResponseData(res);
}

const api = {
  register,
  login,
  refreshToken,
  getUserInfo,
  getWalletInfo,
  getTeamInfo,
  getTreeInfo,
  getTransactionsInfo,
  sendInfy,
  undelegateInfy,
  getTarif,
  payTarif,
  getLessionsInfo,
  sendAnswers,
  delegateInfy
}
export default api