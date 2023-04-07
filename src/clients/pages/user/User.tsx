import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../../auth/context/AuthContext";
import { PersonSimpleThrow, Check, X,ArrowLeft } from "@phosphor-icons/react";
import styles from "./User.module.css";

export const User = () => {
  const { userId } = useParams();
  const { state } = useContext(AuthContext);
  const [userInformation, setuserInformation] = useState({
    email: "",
    contactName: "",
    phone1: "",
    phone2: "",
    observations: "",
    createdDate: "",
    canContactPhone: false,
    canSendMail: false,
    sendCsvDaily: false,
    sendCsvWeekly: false,
    sendNewsletter: false,
  });
  const [userImg, setuserImg] = useState("");

  useEffect(() => {
    const getData = async () => {
      const token = state.user;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      };
      try {
        const response = await fetch(
          `https://erp-api-dev-app.azurewebsites.net/akralogic/erp/api/customers/${userId}`,
          options
        );
        const data = await response.json();
        console.log(data);
        setuserImg(JSON.parse(localStorage.getItem("imgUrl") ?? "null"));
        setuserInformation(data);
      } catch (error) {
        // dispatch({ type: "LOGOUT" });
        // window.localStorage.removeItem('user');
        // console.log("entre");

        console.log({ error });
      }
    };

    getData();
  }, []);

  return (
    <div className={styles.userInformationWrapper}>
      <div className={styles.userCardInformation}>
        <div className={styles.bottonBorderLine}> </div>
        <div className={styles.userImage}>
          <img src={userImg} alt="profile image" />
        </div>
        <div className={styles.mainInformation}>
          <div className={styles.border}></div>
          <div className={`${styles.dataContainer} ${styles.alignBase}`}>
            <h2>Name:</h2>
            <p>{userInformation?.contactName}</p>
          </div>
          <div className={`${styles.dataContainer} ${styles.alignBase}`}>
            <h2>Email:</h2>
            <p>{userInformation?.email}</p>
          </div>
          <div className={`${styles.dataContainer} ${styles.alignBase}`}>
            <h2>Primary phone:</h2>
            <p>{userInformation?.phone1}</p>
          </div>
          <div className={`${styles.dataContainer} ${styles.alignBase}`}>
            <h2>Secondary phone:</h2>
            <p>{userInformation?.phone2}</p>
          </div>
          <div className={`${styles.dataContainer} ${styles.alignBase}`}>
            <h2>Observations:</h2>
            <p>{userInformation?.observations}</p>
          </div>
          <div className={`${styles.dataContainer} ${styles.alignBase}`}>
            <h2>Customer since:</h2>
            <p>{userInformation?.createdDate.split("T")[0]}</p>
          </div>
        </div>
        <div className={`${styles.secondaryInformation} ${styles.ac}`}>
          <div className={`${styles.dataContainer2} ${styles.alignCenter}`}>
            <PersonSimpleThrow size={32} />
            <p>Can Contact Phone:</p>
            <p>
              {userInformation?.canContactPhone === true ? (
                <Check size={32} color="green" />
              ) : (
                <X size={32} />
              )}
            </p>
          </div>
          <div className={`${styles.dataContainer2} ${styles.alignCenter}`}>
            <PersonSimpleThrow size={32} />
            <p>Can Send Mail:</p>
            <p>
              {userInformation?.canSendMail === true ? (
                <Check size={32} color="green" />
              ) : (
                <X size={32} color="red" />
              )}
            </p>
          </div>
          <div className={`${styles.dataContainer2} ${styles.alignCenter}`}>
            <PersonSimpleThrow size={32} />
            <p>Send Csv Daily:</p>
            <p>
              {userInformation?.sendCsvDaily === true ? (
                <Check size={32} color="green" />
              ) : (
                <X size={32} color="red" />
              )}
            </p>
          </div>
          <div className={`${styles.dataContainer2} ${styles.alignCenter}`}>
            <PersonSimpleThrow size={32} />
            <p>send Csv Weekly:</p>
            <p>
              {userInformation?.sendCsvWeekly === true ? (
                <Check size={32} color="green" />
              ) : (
                <X size={32} color="red" />
              )}
            </p>
          </div>
          <div className={`${styles.dataContainer2} ${styles.alignCenter}`}>
            <PersonSimpleThrow size={32} />
            <p>send News letter:</p>
            <p>
              {userInformation?.sendNewsletter === true ? (
                <Check size={32} color="green" />
              ) : (
                <X size={32} color="red" />
              )}
            </p>
          </div>
        </div>
      </div>
      <Link to={'/'} className={styles.backArrow}>
      <ArrowLeft size={35}  />
      </Link>
    </div>
  );
};
