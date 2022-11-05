import { createContext, ReactNode,  useReducer } from "react";

// criar tipagens

type State = {
  currentStep: number,
  validationStepPharmaco: boolean,
  validationStepLaboratory: boolean,
  validationStepFactory: boolean,
  validationStepPackgingSystem: boolean,
  validationStepWeightController: boolean,
  validationStepTests: boolean,
  codeSearchBlockchain: string,

  codigoChaveFarmaco: string,
  // tipoFarmaco: string,
  // pesoFarmaco: string,
  // codigoLote: string,
  // quantidadeFarmaco: string,
  // pesoTotal: string,
  // listaChaveFarmaco: string,
  // codigoLoteFab: string,
  // tipoResultante: string,
  // quantidadePacotes: string,
  // pesoPacote: string,
  // codigoLoteEmbalagens: string,
  // tipoFarmacoEmbalagem: string,
  // quantidadeFarmacoEmbalagem: string,
  // pesoEmbalagem: string,
  // codigoPesoValidacao: string,
  // codigoLoteValidado: string,
  // resultadoPeso: string,
  // codigoTeste: string,
  // codigoPesoValidado: string,
  // resultadoTeste: string,
  // distribuidoraDestino: string,
  // distribuidora: string,
  // codigoLoteDistribuidora: string,
}


type Action = {
  type: FormActions;
  payload: any
}

type ContextType = {
  state: State;
  dispatch: (action: Action) => void
}

type FormProviderprops = {
  children: ReactNode;
}

// objeto de dados iniciais
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
  // tipoFarmaco: "",
  // pesoFarmaco: "",
  // codigoLote: "",
  // quantidadeFarmaco: "",
  // pesoTotal: "",
  // listaChaveFarmaco: "",
  // codigoLoteFab: "",
  // tipoResultante: "",
  // quantidadePacotes: "",
  // pesoPacote: "",
  // codigoLoteEmbalagens: "",
  // tipoFarmacoEmbalagem: "",
  // quantidadeFarmacoEmbalagem: "",
  // pesoEmbalagem: "",
  // codigoPesoValidacao: "",
  // codigoLoteValidado: "",
  // resultadoPeso: "",
  // codigoTeste: "",
  // codigoPesoValidado: "",
  // resultadoTeste: "",
  // distribuidoraDestino: "",
  // distribuidora: "",
  // codigoLoteDistribuidora: "",
};

// Context
export const FormContext = createContext<ContextType | undefined>(undefined)

// enum actions
export enum FormActions {
  setCurrentStep,
  setValidationStepPharmaco,
  setValidationStepLaboratory,
  setValidationStepFactory,
  setValidationStepPackgingSystem,
  setValidationStepWeightController,
  setValidationStepTests,
  setCodigoChaveFarmaco,
  setCodeSearchBlockchain
  // setTipoFarmaco,
  // setPesoFarmaco,
  // setCodigoLote,
  // setQuantidadeFarmaco,
  // setPesoTotal,
  // setListaChaveFarmaco,
  // setCodigoLoteFab,
  // setTipoResultante,
  // setQuantidadePacotes,
  // setPesoPacote,
  // setCodigoLoteEmbalagens,
  // setTipoFarmacoEmbalagem,
  // setQuantidadeFarmacoEmbalagem,
  // setPesoEmbalagem,
  // setCodigoPesoValidacao,
  // setCodigoLoteValidado,
  // setResultadoPeso,
  // setCodigoTeste,
  // setCodigoPesoValidado,
  // setResultadoTeste,
  // setDistribuidoraDestino,
  // setDistribuidora,
  // setCodigoLoteDistribuidora,
}

// Reducer

const formReducer = (state: State, action: Action) => {
  switch(action.type){
    case FormActions.setCurrentStep: 
      return {...state, currentStep: action.payload}
    case FormActions.setValidationStepPharmaco:
      return {...state, validationStepPharmaco: action.payload }
    case FormActions.setValidationStepLaboratory:
      return { ...state, validationStepLaboratory: action.payload }
    case FormActions.setValidationStepFactory:
      return { ...state, validationStepFactory: action.payload }
    case FormActions.setValidationStepPackgingSystem:
      return { ...state, validationStepPackgingSystem: action.payload }
    case FormActions.setValidationStepWeightController:
      return { ...state, validationStepWeightController: action.payload }
    case FormActions.setValidationStepTests:
      return { ...state, validationStepTests: action.payload }
    case FormActions.setCodeSearchBlockchain:
      return{ ...state, codeSearchBlockchain: action.payload }
    default: 
      return state;
  }
}

// Provider

export const FormProvider = ({children}: FormProviderprops) => {
  const [state, dispatch] = useReducer(formReducer, initialData)
  const value = { state, dispatch }

  return (
    <FormContext.Provider value={value} >
      {children}
    </FormContext.Provider>
  )
}

