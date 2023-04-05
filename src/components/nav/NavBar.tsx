import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import {  MouseEvent, useContext, useState } from "react";
import { AuthContext } from "../../auth/context/AuthContext";
import jwtDecode from "jwt-decode";

export const NavBar = () => {
  const { state,dispatch } = useContext(AuthContext);
  const user:{sub:string} = jwtDecode(state.user||'');
 
 
  
  

  const [showDropdown, setShowDropdown] = useState(false);
 
  const handleSignOut = (e: MouseEvent<HTMLAnchorElement>)=>{
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem('user');
  }

  const handleShowDropdown = () =>{
    setShowDropdown(!showDropdown)
  }


  return (
    <div className={styles.mainContainer}>
      <div className={styles.navInformationLeft}>
        <Link to={""}>Information</Link>
        <Link to={""}>Our story</Link>
      </div>
      <div className={styles.navLogo}>
        <Link to={"/"}>
          <img
            src="https://media.licdn.com/dms/image/C4E0BAQES6hbKLxPcyA/company-logo_200_200/0/1616519647641?e=1688601600&v=beta&t=vjQsBmWWUI3b_aLZS3QcUghZRtcK9aTJfmqCipyMh34"
            alt="company logo"
          />
        </Link>
      </div>
      <div className={styles.navInformationRight}>
        <Link to={""}>Create Client</Link>
        <div className={styles.navContainer}>
        <div>
            <button
              className={styles.usernameBtn}
              name="userState"
              onClick={handleShowDropdown}
            >
             {user?user.sub:"SignIn"}
              {/* <Image
              src="static/icons/expand_more.svg"
              alt="Expand more"
              width={24}
              height={24}
              name="userState"
            /> */}
            </button>

            {showDropdown && (
            <div className={styles.navDropdown}>
            
             <div className={styles.navInner}>
                 <a href="/login"  className={styles.linkName} onClick={(e)=>handleSignOut(e)}>
                    Sign out
                  </a>
                  </div>
                  </div>    
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
