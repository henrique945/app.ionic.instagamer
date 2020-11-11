export const environment = {
  production: true,
  apiBaseUrl: 'http://localhost:3000',
  newsUrl: 'https://facens.br/home',
  keys: {
    token: 'USER_TOKEN',
    userInfo: 'USER_INFO',
  },
  routes: {
    auth: '/auth/local',
    me: '/user/me',
    user: '/user',
  },
};
