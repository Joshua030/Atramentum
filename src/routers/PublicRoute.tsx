import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

interface Props {
  children: React.ReactNode;
}

    export const PublicRoute: React.FC<Props> = ({children}) => {
        const {state}=useContext(AuthContext)
        return (state.isAuthenticated)
        ? <Navigate to="/" />
        : <>{children}</>
        
      }
