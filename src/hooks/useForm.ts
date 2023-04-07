import { ChangeEvent, useState } from 'react';
interface FormState {
    phone2:string;
    phone1: string;
    email: string;
    sendCsvDaily: boolean;
    sendCsvWeekly: boolean;
    observations: string;
    canContactPhone: boolean;
    contactName: string;
    sendNewsletter: boolean;
  }

  
export const useForm = ( initialForm = {
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
  }   ) => {
  
    const [ formState, setFormState ] = useState<FormState>( initialForm );

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, type, checked, value } = event.target;

  if (type === "checkbox") {
    setFormState({
      ...formState,
      [name]: checked,
    });
  } else {
    setFormState({
      ...formState,
      [name]: value,
    });
  }
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}