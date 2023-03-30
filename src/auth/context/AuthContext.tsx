import { createContext } from "react";
import {Action, AuthState} from "../../../typings"


export const initialState: AuthState = {
  isAuthenticated:localStorage.getItem('user')? true : false,
  user: JSON.parse(localStorage.getItem('user') ?? 'null'),
};

interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<Action>;
}

export const AuthContext = createContext<AuthContextType>({
  state: initialState,
  dispatch: () => null,
});
