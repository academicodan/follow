export type State = {
    currentStep: number,
    validationStepPharmaco: boolean,
    validationStepLaboratory: boolean,
    validationStepFactory: boolean,
    validationStepPackgingSystem: boolean,
    validationStepWeightController: boolean,
    validationStepTests: boolean,
    codeSearchBlockchain: string,
    codigoChaveFarmaco: string,
  }

  
export type Action = {
    type: FormActions;
    payload: any
}

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
  }
  

export const formReducer = (state: State, action: Action) => {
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