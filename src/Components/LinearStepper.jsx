import React, { useState, useEffect } from "react";
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
    "Fármacos",
    "Laboratório(Lotes)",
    "Fábrica",
    "Sistema de embalagem",
    "Controladoria de Peso",
    "Testes",
    "Distribuidora",
  ];
}

const PharmacoSendToLaboratory = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="codigoChaveFarmaco"
        rules={{
          required: "Código chave fármaco é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="codigo-chave-farmaco"
            label="Codigo-Chave Fármaco"
            variant="outlined"
            placeholder="Insira o código-chave do fármaco"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.codigoChaveFarmaco)}
            helperText={errors.codigoChaveFarmaco?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="tipoFarmaco"
        rules={{
          required: "Tipo é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="tipo"
            label="Tipo do fármaco"
            variant="outlined"
            placeholder="Insira o tipo do fármaco"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.tipoFarmaco)}
            helperText={errors.tipoFarmaco?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="pesoFarmaco"
        rules={{
          required: "Peso é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="peso"
            label="Peso"
            variant="outlined"
            placeholder="Insira o peso do fármaco"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.pesoFarmaco)}
            helperText={errors.pesoFarmaco?.message}
          />
        )}
      />
    </>
  );
};

const LaboratorySendToFactory = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="codigoLote"
        rules={{
          required: "Código lote é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="codigo-lote"
            label="Código lote"
            variant="outlined"
            placeholder="Insira o código de lote"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.codigoLote)}
            helperText={errors.codigoLote?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="quantidadeFarmaco"
        rules={{
          required: "Quantidade de fármacos é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="quantidade-farmaco"
            label="Quantidade de fármacos"
            variant="outlined"
            placeholder="Insira a quantidade de fármacos"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.quantidadeFarmaco)}
            helperText={errors.quantidadeFarmaco?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="pesoTotal"
        rules={{
          required: "Peso total é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="peso-total"
            label="Peso total"
            variant="outlined"
            placeholder="Insira o peso total"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.pesoTotal)}
            helperText={errors.pesoTotal?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="listaChaveFarmaco"
        rules={{
          required: "Lista chave fármaco é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="lista-chave-farmacos"
            label="Lista de Farmacos"
            variant="outlined"
            placeholder="Insira a chave de cada fármaco 'chave 1, chave2, chave 3'"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.listaChaveFarmaco)}
            helperText={errors.listaChaveFarmaco?.message}
          />
        )}
      />
    </>
  );
};

const FactorySendToPackagingSystem = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="codigoLoteFab"
        rules={{
          required: "Código lote é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="codigo-lote-fab"
            label="Código lote fábrica"
            variant="outlined"
            placeholder="Insira o código de lote da fábrica"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.codigoLoteFab)}
            helperText={errors.codigoLoteFab?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="tipoResultante"
        rules={{
          required: "Tipo de fármaco resultante é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="tipo"
            label="Tipo de fármaco resultante"
            variant="outlined"
            placeholder="Insira o tipo de fármaco resultante"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.tipoResultante)}
            helperText={errors.tipoResultante?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="quantidadePacotes"
        rules={{
          required: "Quantidade de pacotes é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="quantidade-pacotes"
            label="Quantidade de pacotes"
            variant="outlined"
            placeholder="Insira a quantidade de pacotes"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.quantidadePacotes)}
            helperText={errors.quantidadePacotes?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="pesoPacote"
        rules={{
          required: "Peso do pacote é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="peso"
            label="Peso do pacote"
            variant="outlined"
            placeholder="Insira o peso do pacote"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.pesoPacote)}
            helperText={errors.pesoPacote?.message}
          />
        )}
      />
    </>
  );
};

const PackagingSystemSendToWeightComptroller = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="codigoLoteEmbalagens"
        rules={{
          required: "Código lote fábrica é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="codigo-lote-embalagens"
            label="Código lote fábrica"
            variant="outlined"
            placeholder="Insira o código de lote da fábrica"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.codigoLoteEmbalagens)}
            helperText={errors.codigoLoteEmbalagens?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="tipoFarmacoEmbalagem"
        rules={{
          required: "Tipo de fármaco é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="tipo"
            label="Tipo de fármaco"
            variant="outlined"
            placeholder="Insira o tipo de fármaco"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.tipoFarmacoEmbalagem)}
            helperText={errors.tipoFarmacoEmbalagem?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="quantidadeFarmacoEmbalagem"
        rules={{
          required: "Quantidade de embalagens é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="quantidade-embalagens"
            label="Quantidade de embalagens"
            variant="outlined"
            placeholder="Insira a quantidade de embalagens"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.quantidadeFarmacoEmbalagem)}
            helperText={errors.quantidadeFarmacoEmbalagem?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="pesoEmbalagem"
        rules={{
          required: "Peso da embalagem é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="peso"
            label="Peso da embalagem"
            variant="outlined"
            placeholder="Insira o peso da embalagem"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.pesoEmbalagem)}
            helperText={errors.pesoEmbalagem?.message}
          />
        )}
      />
    </>
  );
};

const WeightComptrollerSendToTests = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="codigoPesoValidacao"
        rules={{
          required: "Código peso validado é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="codigo-peso-validacao"
            label="Código peso validado"
            variant="outlined"
            placeholder="Insira o código do Peso Validado"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.codigoPesoValidacao)}
            helperText={errors.codigoPesoValidacao?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="codigoLoteValidado"
        rules={{
          required: "Código lote validado é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="codigo-lote-validado"
            label="Codigo lote validado"
            variant="outlined"
            placeholder="Insira o codigo do lote validado"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.codigoLoteValidado)}
            helperText={errors.codigoLoteValidado?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="resultadoPeso"
        rules={{
          required: "Resultado de validação do peso é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="resultado"
            label="Resultado validação de peso"
            variant="outlined"
            placeholder="Insira o resultado da validação de peso"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.resultadoPeso)}
            helperText={errors.resultadoPeso?.message}
          />
        )}
      />
    </>
  );
};

const TestsSendToDistributor = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="codigoTeste"
        rules={{
          required: "Código de teste do medicamento é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="codigo-teste"
            label="Código de teste dos medicamentos"
            variant="outlined"
            placeholder="Insira o código do teste"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.codigoTeste)}
            helperText={errors.codigoTeste?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="codigoPesoValidado"
        rules={{
          required: "Código de peso validado é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="codigo-peso-validado"
            label="Codigo peso validado"
            variant="outlined"
            placeholder="Insira o codigo do peso validado"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.codigoPesoValidado)}
            helperText={errors.codigoPesoValidado?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="resultadoTeste"
        rules={{
          required: "Resultado do teste é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="resultado"
            label="Resultado validação de peso"
            variant="outlined"
            placeholder="Insira o resultado do teste"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.resultadoTeste)}
            helperText={errors.resultadoTeste?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="distribuidoraDestino"
        rules={{
          required: "Distribuidora de destino é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="distribuidora-destino"
            label="Distribuidora de destino"
            variant="outlined"
            placeholder="Insira a distribuidora de destino"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.distribuidoraDestino)}
            helperText={errors.distribuidoraDestino?.message}
          />
        )}
      />
    </>
  );
};

const DistributorSendToPharmacies = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="distribuidora"
        rules={{
          required: "Identificador da distribuidora é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="distribuidora"
            label="Distribuidora"
            variant="outlined"
            placeholder="Insira o identificador da Distribuidora"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.distribuidora)}
            helperText={errors.distribuidora?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="codigoLoteDistribuidora"
        rules={{
          required: "Código lote da distribuídora é obrigatório",
        }}
        render={({ field }) => (
          <TextField
            id="codigo-lote-distribuidora"
            label="Codigo de lote da distribuidora"
            variant="outlined"
            placeholder="Insira o codigo de lote da dsitribuidora"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.codigoLoteDistribuidora)}
            helperText={errors.codigoLoteDistribuidora?.message}
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

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = (data) => {
    if (activeStep === steps.length - 1) {
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

  const isStepFalied = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} orientation="horizontal" alternativeLabel>
        {steps.map((stepItem, index) => {
          const labelProps = {};
          if (isStepFalied() && activeStep === index) {
            labelProps.error = true;
          }

          return (
            <Step key={index}>
              <StepLabel {...labelProps}>{stepItem}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

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
              disabled={activeStep === 0}
            >
              Back
            </Button>
            <Button variant="contained" color="primary" type="submit">
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </form>
      </FormProvider>

      {activeStep === steps.length && (
        <Typography variant="h3" align="center">
          Listagem de informações
        </Typography>
      )}
    </div>
  );
};

export default LinearStepper;
