import { useContext, useEffect } from "react"
import { AuthContext } from "../../auth/context/AuthContext";
import { getListOfPhotos } from "../../helpers/clients";


export const Home = () => {
  const {  state } = useContext(AuthContext);

 
  useEffect(() => {
    
    const getData = async() =>{
      const token= state.user;
  

  
  
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'accept': 'application/json',
      }
    };
      try {
        // const response = await fetch('https://erp-api-dev-app.azurewebsites.net/akralogic/erp/api/customers', options);
        // const data = await response.json()
        // console.log(data);
        const photos = await getListOfPhotos();
        console.log(photos);
        
      } catch (error) {
        // Handle the error
      }
    } 
  
getData();

  }, [])
  
  return (
    <div>MarvelPage</div>
  )
}
