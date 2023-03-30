import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./routers/AppRouter"


export const AtramentumApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
     </AuthProvider>
  )
}
