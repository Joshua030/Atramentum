// interface User {
//   username: string;
//   email: string;
// }

export interface AuthState {
  isAuthenticated: boolean;
  user: string | undefined | null;
}

export interface Action {
  type: string;
  payload?: string;
}

export interface ProcessEnv {
  [key: string]: string | undefined
}