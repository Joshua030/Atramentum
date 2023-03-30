import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelPage } from "../pages/MarvelPage";
import { NavBar } from "../pages/NavBar";


export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
