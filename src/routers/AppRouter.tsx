
import { Route, Routes } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoute } from "./PublicRoute";
import LoginPage from "../auth/pages/LoginPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />
        <Route path='/*' element ={
          <PrivateRouter>
<HeroesRoutes />
          </PrivateRouter>
        } />
      </Routes>
    </>
  );
};
