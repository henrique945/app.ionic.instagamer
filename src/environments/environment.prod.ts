export const environment = {
  production: true,
  apiBaseUrl: 'https://instagamer-api.herokuapp.com/dev',
  newsUrl: 'https://facens.br/home',
  keys: {
    token: 'USER_TOKEN',
    userInfo: 'USER_INFO',
  },
  routes: {
    auth: '/auth/local',
    me: '/user/me',
    user: '/user',
    game: '/game',
    listGames: '/game/list',
    userGame: '/userGame',
    post: '/post',
    comment: '/comment',
    favorite: '/favorite',
    chat: '/chat',
  },
};
