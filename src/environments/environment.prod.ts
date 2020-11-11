export const environment = {
  production: true,
  apiBaseUrl: 'https://instagamer-api.herokuapp.com',
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
