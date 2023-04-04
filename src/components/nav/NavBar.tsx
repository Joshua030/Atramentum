import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navInformationLeft}>
        <Link to={""}>Create Client</Link>
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
        <Link to={""}>Contact us</Link>
      </div>
    </div>
  );
};
