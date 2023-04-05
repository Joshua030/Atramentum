import styles from "./Footer.module.css";
import { Atom, GithubLogo,LinkedinLogo } from "@phosphor-icons/react";
export const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstContainer}>
        <p>
          A non-profit project, created as part of training · All materials are
          taken from public sources and belong to their owners · Design by Jose
          Ceballos
        </p>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.createContainer}>
          <p>
            Made on <Atom size={`5rem`} color="#fff" weight="regular" /> React
          </p>
        </div>
        <div className={styles.socialContainer}>
          <div className={styles.gitHubContainer}>
          <a href="https://github.com/Joshua030">
              <GithubLogo size={`3rem`} color="#fff" weight="regular" />
            </a>
          </div>
          <div className={styles.linkedinContainer}>
          <a href="https://github.com/Joshua030">
              <LinkedinLogo size={`3rem`} color="#fff" weight="regular" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
