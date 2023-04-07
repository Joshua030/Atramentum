import { useContext, useEffect, useState } from "react";
import styles from "./EditUser.module.css";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../auth/context/AuthContext";
import { useForm } from "../../../hooks/useForm";

interface CheckboxState {
  [key: string]: boolean;
}

interface FormValues {
  phone1: string;
  email: string;
  sendCsvDaily: boolean;
  sendCsvWeekly: boolean;
  observations: string;
  canContactPhone: boolean;
  contactName: string;
  sendNewsletter: boolean;
}

export const EditUser = () => {
  const initialFormValues: FormValues = {
    phone1: "",
    email: "",
    sendCsvDaily: false,
    sendCsvWeekly: false,
    observations: "",
    canContactPhone: false,
    contactName: "",
    sendNewsletter: false,
  };

  const [checkboxes, setCheckboxes] = useState<CheckboxState>({});
  const { userId } = useParams();
  const { state } = useContext(AuthContext);
  const [userInformation, setuserInformation] = useState({
    email: "",
    contactName: "",
    phone1: "",
    phone2: "",
    observations: "",
    canContactPhone: false,
    canSendMail: false,
    sendCsvDaily: false,
    sendCsvWeekly: false,
    sendNewsletter: false,
  });

  const {
    phone1,
    email,
    sendCsvDaily,
    sendCsvWeekly,
    observations,
    canContactPhone,
    contactName,
    sendNewsletter,
    formState,
    onInputChange,
    onResetForm,
  } = useForm();

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

        setuserInformation(data);
        // console.log(checkboxesData);
      } catch (error) {
        // dispatch({ type: "LOGOUT" });
        // window.localStorage.removeItem('user');
        // console.log("entre");

        console.log({ error });
      }
    };

    getData();
  }, []);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
    // console.log(checkboxes);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const token = state.user;
      const filteredState = Object.fromEntries(
        Object.entries(formState)
          .filter(([key, value]) => checkboxes[key] === true)
      );
      // console.log(filteredState);
      
      const options = {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(filteredState),
      };
      const response = await fetch(
        `https://erp-api-dev-app.azurewebsites.net/akralogic/erp/api/customers/${userId}`,
        options
      );
      const data = await response.json();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const checkboxesData = Object.keys(userInformation).filter((element) => {
    return (
      element === "email" ||
      element === "contactName" ||
      element === "phone1" ||
      element === "observations" ||
      element === "canContactPhone" ||
      element === "sendCsvDaily" ||
      element === "sendCsvWeekly" ||
      element === "sendNewsletter"
    );
  });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstContainer}>
        <h2 className={styles.checboxSectionTitle}>
          What do you want to change?
        </h2>
        <div className={styles.checkboxesWrapper}>
          {checkboxesData?.map((key) => (
            <div className={styles.checkboxWrapper}>
              <p>{key}</p>
              <input
                type="checkbox"
                name={key}
                checked={checkboxes[key]}
                onChange={handleCheckboxChange}
              />
            </div>
          ))}
          {/* 
      <div className={styles.checkboxWrapper}>
        <p>Name</p>
        <input type="checkbox" />
      </div> */}
        </div>
      </div>
      <div className={styles.grassEffect}></div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h2>Hi!</h2>
        {checkboxes.contactName && (
          <label>
            <input
              type="text"
              name="contactName"
              value={contactName}
              onChange={onInputChange}
              placeholder="Name"
            />
          </label>
        )}
        {checkboxes.phone1 && (
          <label>
            <input
              type="text"
              name="phone1"
              value={phone1}
              onChange={onInputChange}
              placeholder="Phone 1"
            />
          </label>
        )}
        {checkboxes.email && (
          <label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onInputChange}
              placeholder="Email"
            />
          </label>
        )}
        {checkboxes.observations && (
          <label>
            <input
              type="text"
              name="observations"
              value={observations}
              onChange={onInputChange}
              placeholder="Observations"
            />
          </label>
        )}
        {checkboxes.sendCsvDaily && (
          <div className={styles.checkboxFormWrapper}>
            <p>Send CSV daily:</p>
            <input
              type="checkbox"
              name="sendCsvDaily"
              checked={sendCsvDaily}
              onChange={onInputChange}
            />
          </div>
        )}
        {checkboxes.sendCsvWeekly && (
          <div className={styles.checkboxFormWrapper}>
            <p>Send CSV weekly:</p>
            <input
              type="checkbox"
              name="sendCsvWeekly"
              checked={sendCsvWeekly}
              onChange={onInputChange}
            />
          </div>
        )}
        {checkboxes.canContactPhone && (
          <div className={styles.checkboxFormWrapper}>
            <p>Can contact by phone:</p>
            <input
              type="checkbox"
              name="canContactPhone"
              checked={canContactPhone}
              onChange={onInputChange}
            />
          </div>
        )}
        {checkboxes.sendNewsletter && (
          <div className={styles.checkboxFormWrapper}>
            <p>Send newsletter:</p>
            <input
              type="checkbox"
              name="sendNewsletter"
              checked={sendNewsletter}
              onChange={onInputChange}
            />
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


