import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NavBar } from "../../components/nav/NavBar";
import {Footer} from "../../components/footer/Footer"
import { User } from "../pages/user/User";
import { EditUser } from "../pages/editUser/EditUser";



export const ClientsRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="user/:userId" element={<User/>}/>
          <Route path="user/edit/:userId" element={<EditUser/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};
