import { createContext, ReactNode, useReducer } from "react";
import { Action, formReducer, State } from "./FormReducer";

type FormProviderprops = {
    children: ReactNode;
}

const initialData: State = {
  currentStep: 0,
  validationStepPharmaco: false,
  validationStepLaboratory: false,
  validationStepFactory: false,
  validationStepPackgingSystem: false,
  validationStepTests: false,
  validationStepWeightController: false,
  codigoChaveFarmaco: "",
  codeSearchBlockchain: "",
};

type ContextType = {
    state: State;
    dispatch: (action: Action) => void
  }
  
export const FormContext = createContext<ContextType | undefined>(undefined)

export const FormProvider = ({children}: FormProviderprops) => {
    const [state, dispatch] = useReducer(formReducer, initialData)
    const value = { state, dispatch }
  
    return (
      <FormContext.Provider value={value} >
        {children}
      </FormContext.Provider>
    )
  }
  