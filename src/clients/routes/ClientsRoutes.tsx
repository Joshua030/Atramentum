import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NavBar } from "../../components/nav/NavBar";
import {Footer} from "../../components/footer/Footer"



export const ClientsRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
