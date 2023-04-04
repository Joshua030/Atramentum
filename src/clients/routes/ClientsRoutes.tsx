import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NavBar } from "../../components/nav/NavBar";



export const ClientsRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </>
  );
};
