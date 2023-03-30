import { useContext } from "react"
import { Navigate,useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

interface Props {
  children: React.ReactNode;
}

export const PrivateRouter: React.FC<Props> = ({children}) => {
  const {state}=useContext(AuthContext)
  const {pathname, search} = useLocation ();
  const lastpath = pathname+search;
  localStorage.setItem('lastPath',lastpath)
return (state.isAuthenticated)
? <>{children}</>
: <Navigate to="/login" />

}