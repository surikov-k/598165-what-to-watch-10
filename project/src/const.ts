export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Movie = '/movies/:id',
  AddReview = '/movies/review/:id',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UNKNOWN'
}
