import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/context/AuthContext";
import { Card } from "../../components/Card";
import { getListOfPhotos } from "../../helpers/clients";
import styles from "./Home.module.css";

interface Customer {
  contactName: string;
  phone1: string;
  email: string;
  id: number;
  // Add any other properties here
}

export const Home = () => {
  const { state } = useContext(AuthContext);
  const [clientsData, setClientsData] = useState([
    {
      contactName: "",
      phone1: "",
      id: 0,
      email: "",
      imgUrl: "",
    },
  ]);

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
        const photos = await getListOfPhotos();
        const response = await fetch(
          "https://erp-api-dev-app.azurewebsites.net/akralogic/erp/api/customers",
          options
        );
        const data = await response.json();
        console.log(data);

        const result = data?.content.map((customer: Customer, idx: number) => {
          return {
            contactName: customer.contactName,
            phone1: customer.phone1,
            id: customer.id,
            email: customer.email,
            imgUrl: photos.length > 0 ? photos[idx] : null,
          };
        });

        setClientsData(result);
        console.log(clientsData);
      } catch (error) {
        console.log({ error });
      }
    };

    getData();
  }, []);

  return (
    <div className={styles.parentContainer}>
      <div className={styles.cardsContainer}>
        {clientsData.map((element) => {
          return (
            <Card
              key={element.id}
              imgUrl={element.imgUrl}
              contactName={element.contactName}
              phone1={element.phone1}
              email={element.email}
            />
          );
        })}
      </div>
    </div>
  );
};
