import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
// import { User } from "../../../typings";
import styles from "./LoginPage.module.css";
import { AuthContext } from "../context/AuthContext";

interface LoginData {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {  dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginData: LoginData = { username, password };

    try {
      const body = new URLSearchParams();
      body.append("username", loginData.username);
      body.append("password", loginData.password);

      const response = await fetch(
        "https://erp-api-dev-app.azurewebsites.net/akralogic/erp/api/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body,
        }
      );

      const { token } = await response.json();

      //       const user = jwtDecode<User>(token);
      // console.log(user);
      localStorage.setItem("user", JSON.stringify(token));
      dispatch({ type: "LOGIN", payload: token });

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.firstContainer} ${hovered ? styles.blur : ""}`}>
        <img
          src="\static\people-cross-on-the-sidewalk.jpg"
          alt="People cross the street"
        />
      </div>
      <div className={`${styles.secondContainer} ${hovered ? styles.blur : ""}`}>
        <img
          src="\static\people-walking-on-the-street.jpg"
          alt="People cross the street"
        />
      </div>
      <div
        className={styles.loginWrapper}
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
      >
        <div className={styles.headerContainer}>
          <h1 className={styles.headerText}>Login</h1>
        </div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.inputContainer}>
            {/* <label htmlFor="username">Username:</label> */}
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
          </div>
          <div className={styles.inputContainer}>
            {/* <label htmlFor="password">Password:</label> */}
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
