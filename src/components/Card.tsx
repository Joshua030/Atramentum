import styles from "./Card.module.css";
import { User } from "@phosphor-icons/react";

interface props {
  imgUrl: string;
  contactName: string;
}

export const Card = ({ imgUrl, contactName }: props) => {
  return (
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
    </div>
  );
};
