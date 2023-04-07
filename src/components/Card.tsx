import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { User,EnvelopeSimple,Phone } from "@phosphor-icons/react";

interface props {
  imgUrl: string;
  contactName: string;
  phone1: string;
  email: string;
  userId: number;
}

export const Card = ({ imgUrl, contactName, phone1, email, userId }: props) => {

  const handleImg =() =>{
    localStorage.setItem("imgUrl", JSON.stringify(imgUrl));
  }

  return (
    <Link to={`/user/${userId}`} className={styles.galleryRapper} onClick={handleImg}>

    <div
      className={styles.mainContainer}
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className={styles.overlay}></div>
    <div className={styles.headerContainer}>
        <User size={`3rem`} color="#fff" weight="regular" />
        <h2 className={styles.headerText}>{contactName}</h2>
      </div>
      <div className={styles.informationContainer}>
        <div className={styles.emailContainer}>
        <EnvelopeSimple size={`3rem`} color="#fff" weight="regular" />
        <h3 className={styles.emailText}>{email}</h3>
        </div>
        <div className={styles.celphoneContainer}>
        <Phone size={`3rem`} color="#fff" weight="regular" />
        <h3 className={styles.celphoneText}>{phone1}</h3>
        </div>
      </div>
    </div>
    </Link>
  );
};
