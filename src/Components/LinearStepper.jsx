import React, { useState } from "react";
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  StepContent,
} from "@material-ui/core";

import {
  useForm,
  FormProvider,
  useFormContext,
  Controller,
} from "react-hook-form";

function getSteps() {
  return [
    "Fármacos >> Laboratório",
    "Laboratório(Lotes) >> Fábrica",
    "Fábrica >> Sistema de embalagem",
    "Sistema de embalagem >> Controladoria de peso",
    "Controladoria de Peso >> Testes",
    "Testes >> Distribuidora",
    "Distribuidora >> Farmácias",
  ];
}

const PharmacoSendToLaboratory = () => {
  const { control } = useFormContext();
  return (
    <>
    <Controller 
      control={control}
      name="codigoChaveFarmaco"
      render={({ field }) => (
        <TextField
        id="codigo-chave-farmaco"
        label="Codigo-Chave Fármaco"
        variant="outlined"
        placeholder="Insira o código-cahve do fármaco"
        fullWidth
        margin="normal"
        {...field}
      />
      )}
    />
    <Controller 
      control={control}
      name="tipoFarmaco"
      render={({ field }) => ( 
        <TextField
          id="tipo"
          label="Tipo do fármaco"
          variant="outlined"
          placeholder="Insira o tipo do fármaco"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    <Controller 
      control={control}
      name="pesoFarmaco"
      render={({ field }) => ( 
        <TextField
          id="peso"
          label="Peso"
          variant="outlined"
          placeholder="Insira o peso do fármaco"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    </>
  );
};

const LaboratorySendToFactory = () => {
  const { control } = useFormContext()
  return (
    <>
      <Controller 
      control={control}
      name="codigoLote"
      render={({ field }) => (
        <TextField
          id="codigo-lote"
          label="Código lote"
          variant="outlined"
          placeholder="Insira o código de lote"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    <Controller 
      control={control}
      name="quantidadeFarmaco"
      render={({ field }) => (
        <TextField
          id="quantidade-farmaco"
          label="Quantidade de fármacos"
          variant="outlined"
          placeholder="Insira a quantidade de fármacos"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    <Controller 
      control={control}
      name="pesoTotal"
      render={({ field }) => (  
        <TextField
          id="peso-total"
          label="Peso total"
          variant="outlined"
          placeholder="Insira o peso total"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    <Controller 
      control={control}
      name="listaChaveFarmaco"
      render={({ field }) => (
        <TextField
          id="lista-chave-farmacos"
          label="Lista de Farmacos"
          variant="outlined"
          placeholder="Insira a chave de cada fármaco 'chave 1, chave2, chave 3'"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    </>
  );
};

const FactorySendToPackagingSystem = () => {
  const { control } = useFormContext()
  return (
    <>
    <Controller 
      control={control}
      name="codigoLoteFab"
      render={({ field }) => (   
        <TextField
          id="codigo-lote-fab"
          label="Código lote fábrica"
          variant="outlined"
          placeholder="Insira o código de lote da fábrica"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    <Controller 
      control={control}
      name="tipoResultante"
      render={({ field }) => (   
        <TextField
          id="tipo"
          label="Tipo de fármaco resultante"
          variant="outlined"
          placeholder="Insira o tipo de fármaco resultante"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    <Controller 
      control={control}
      name="quantidadePacotes"
      render={({ field }) => (    
        <TextField
          id="quantidade-pacotes"
          label="Quantidade de pacotes"
          variant="outlined"
          placeholder="Insira a quantidade de pacotes"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    <Controller 
      control={control}
      name="pesoPacote"
      render={({ field }) => (
        <TextField
          id="peso"
          label="Peso do pacote"
          variant="outlined"
          placeholder="Insira o peso do pacote"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    </>
  );
};

const PackagingSystemSendToWeightComptroller = () => {
  const { control } = useFormContext();
  return (
    <>
    <Controller 
      control={control}
      name="codigoLoteEmbalagens"
      render={({ field }) => ( 
        <TextField
          id="codigo-lote-embalagens"
          label="Código lote fábrica"
          variant="outlined"
          placeholder="Insira o código de lote da fábrica"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    <Controller 
      control={control}
      name="tipoFarmacoEmbalagem"
      render={({ field }) => (
        <TextField
          id="tipo"
          label="Tipo de fármaco"
          variant="outlined"
          placeholder="Insira o tipo de fármaco"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    <Controller 
      control={control}
      name="quantidadeFarmacoEmbalagem"
      render={({ field }) => (  
        <TextField
          id="quantidade-embalagens"
          label="Quantidade de embalagens"
          variant="outlined"
          placeholder="Insira a quantidade de embalagens"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    <Controller 
      control={control}
      name="pesoEmbalagem"
      render={({ field }) => (     
        <TextField
          id="peso"
          label="Peso da embalagem"
          variant="outlined"
          placeholder="Insira o peso da embalagem"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    </>
  );
};

const WeightComptrollerSendToTests = () => {
  const { control } = useFormContext();
  return (
    <>
    <Controller 
      control={control}
      name="codigoPesoValidacao"
      render={({ field }) => (    
        <TextField
          id="codigo-peso-validacao"
          label="Código lote fábrica"
          variant="outlined"
          placeholder="Insira o código do Peso Validado"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    <Controller 
      control={control}
      name="codigoLoteValidado"
      render={({ field }) => (
        <TextField
          id="codigo-lote-validado"
          label="Codigo lote validado"
          variant="outlined"
          placeholder="Insira o codigo do lote validado"
          fullWidth
          margin="normal"
          {...field}
        />      
      )}
    /> 
    <Controller 
      control={control}
      name="resultadoPeso"
      render={({ field }) => (  
        <TextField
          id="resultado"
          label="Resultado validação de peso"
          variant="outlined"
          placeholder="Insira o resultado da validação de peso"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    </>
  );
};

const TestsSendToDistributor = () => {
  const { control } = useFormContext();
  return (
    <>
    <Controller 
      control={control}
      name="codigoTeste"
      render={({ field }) => (  
        <TextField
          id="codigo-teste"
          label="Código de teste dos medicamentos"
          variant="outlined"
          placeholder="Insira o código do teste"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    <Controller 
      control={control}
      name="codigoPesoValidado"
      render={({ field }) => (   
        <TextField
          id="codigo-peso-validado"
          label="Codigo peso validado"
          variant="outlined"
          placeholder="Insira o codigo do peso validado"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    <Controller 
      control={control}
      name="resultadoTeste"
      render={({ field }) => (
        <TextField
          id="resultado"
          label="Resultado validação de peso"
          variant="outlined"
          placeholder="Insira o resultado do teste"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    <Controller 
      control={control}
      name="distribuidoraDestino"
      render={({ field }) => (     
        <TextField
          id="distribuidora-destino"
          label="Distribuidora de destino"
          variant="outlined"
          placeholder="Insira a distribuidora de destino"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    </>
  );
};

const DistributorSendToPharmacies = () => {
  const { control } = useFormContext();
  return (
    <>
    <Controller 
      control={control}
      name="distribuidora"
      render={({ field }) => (  
        <TextField
          id="distribuidora"
          label="Distribuidora"
          variant="outlined"
          placeholder="Insira o identificador da Distribuidora"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    <Controller 
      control={control}
      name="codigoLoteDistribuidora"
      render={({ field }) => ( 
        <TextField
          id="codigo-lote-distribuidora"
          label="Codigo de lote da distribuidora"
          variant="outlined"
          placeholder="Insira o codigo de lote da dsitribuidora"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    /> 
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PharmacoSendToLaboratory />;
    case 1:
      return <LaboratorySendToFactory />;
    case 2:
      return <FactorySendToPackagingSystem />;
    case 3:
      return <PackagingSystemSendToWeightComptroller />;
    case 4:
      return <WeightComptrollerSendToTests />;
    case 5:
      return <TestsSendToDistributor />;
    case 6:
      return <DistributorSendToPharmacies />;
    default:
      return "unknown step";
  }
}

const LinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const methods = useForm({
    defaultValues: {
      codigoChaveFarmaco: "",
      tipoFarmaco: "",
      pesoFarmaco: "",
      codigoLote: "",
      quantidadeFarmaco: "",
      pesoTotal: "",
      listaChaveFarmaco: "",
      codigoLoteFab: "",
      tipoResultante: "",
      quantidadePacotes: "",
      pesoPacote: "",
      codigoLoteEmbalagens: "",
      tipoFarmacoEmbalagem: "",
      quantidadeFarmacoEmbalagem: "",
      pesoEmbalagem: "",
      codigoPesoValidacao: "",
      codigoLoteValidado: "",
      resultadoPeso: "",
      codigoTeste: "",
      codigoPesoValidado: "",
      resultadoTeste: "",
      distribuidoraDestino: "",
      distribuidora: "",
      codigoLoteDistribuidora: "",
    },
  });

  const handleNext = (data) => {
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          console.log(data);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((stepItem, index) => {
          return (
            <Step key={index}>
              <StepLabel>{stepItem}</StepLabel>
              <StepContent>
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(handleNext)}>
                    {getStepContent(activeStep)}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        variant="text"
                        color="default"
                        onClick={handleBack}
                      >
                        Back
                      </Button>
                      <Button variant="contained" color="primary" type="submit">
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </form>
                </FormProvider>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Listagem de informações
        </Typography>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LinearStepper;
