import { useContext } from "react";
import { FormContext } from "../FormContext/FormProvider";

export const useForm = () => {
    const context = useContext(FormContext);
  
    if(context === undefined) {
      throw new Error('useForm precisa ser usado dentro de um FormProvider')
    }
  
    return context;
  }