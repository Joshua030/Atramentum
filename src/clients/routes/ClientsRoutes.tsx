import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NavBar } from "../../components/nav/NavBar";
import {Footer} from "../../components/footer/Footer"
import { User } from "../pages/user/User";



export const ClientsRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="user/:userId" element={<User/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};
