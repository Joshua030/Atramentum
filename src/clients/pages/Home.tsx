import { useContext, useEffect } from "react";
import { AuthContext } from "../../auth/context/AuthContext";
import { Card } from "../../components/Card";
import { getListOfPhotos } from "../../helpers/clients";

interface Customer {
  contactName: string;
  phone1: string;
  email: string;
  id: number
  // Add any other properties here
}

export const Home = () => {
  const { state } = useContext(AuthContext);

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
        const response = await fetch('https://erp-api-dev-app.azurewebsites.net/akralogic/erp/api/customers', options);
        const data = await response.json()
        console.log(data);
        
        console.log(
          data?.content.map((customer: Customer, idx:number) => {
          return {
            contactName: customer.contactName,
            phone1: customer.phone1,
            id: customer.id,
            email: customer.email,
            imgUrl: photos.length > 0 ? photos[idx] : null,
          };
        })
        )
      } catch (error) {
       console.log({error});
       
      }
    };

    getData();
  }, []);

  return <div>MarvelPage
    <Card  imgUrl="https://images.unsplash.com/photo-1504593811423-6dd665756598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTAyNDF8MHwxfHNlYXJjaHwxNnx8cGVyc29ufGVufDB8fHx8MTY4MDI5ODU0NQ&ixlib=rb-4.0.3&q=80&w=1080" contactName='Jose Luis'/>
  </div>;
};
