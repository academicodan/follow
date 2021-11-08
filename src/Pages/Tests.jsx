import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm, FormActions } from "../context/FormContext";
import axios from "axios";
import { ContainerApp } from "../Components/ContainerApp";
import { FooterActions } from "../Components/FooterActions";

export const Tests = () => {
  const [codigoTeste, setCodigoTeste] = useState("");
  const [codigoPesoValidado, setCodigoPesoValidado] = useState("");
  const [resultadoTeste, setResultadoTeste] = useState("");
  const [distribuidoraDestino, setDistribuidoraDestino] = useState("");

  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.validationStepWeightController) {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 5,
      });
    } else {
      history.goBack();
    }
  }, []);

  const handleNextStep = () => {
    console.table({
      codigoTeste,
      codigoPesoValidado,
      resultadoTeste,
      distribuidoraDestino,
    });
    //6 aqui.
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    var datetimenow = today.toLocaleDateString() + " " + today.toLocaleTimeString();
    var data = JSON.stringify({"channel":"pucchannel","chaincode":"oabcs-medicine-puc","chaincodeVer":"v2","method":"addItemTestado","args":[codigoTeste,datetimenow,codigoPesoValidado,resultadoTeste,distribuidoraDestino]});

    var config = {
      method: 'post',
      url: 'https://blockhubiteam-ladcsteam-iad.blockchain.ocp.oraclecloud.com:7443/restproxy/bcsgw/rest/v1/transaction/invocation',
      headers: { 
        'Authorization': 'Basic cGVkcm8uYmxvY2tjaGFpbjpCbG9jayYxMjQ0MjkxMg==', 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    dispatch({
      type: FormActions.setValidationStepTests,
      payload: true,
    });
    history.push("/distributor");
  };

  return (
    <ContainerApp>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          handleNextStep();
        }}
      >
        <TextField
          defaultValue={null}
          value={codigoTeste}
          onChange={(ev) => setCodigoTeste(ev.target.value)}
          id="codigo-teste"
          label="Código Teste"
          variant="outlined"
          placeholder="Insira Código Teste"
          fullWidth
          margin="normal"
          required
          type="text"
        />

        <TextField
          defaultValue={null}
          value={codigoPesoValidado}
          onChange={(ev) => setCodigoPesoValidado(ev.target.value)}
          id="codigo-peso-validado"
          label="Código Peso Validado"
          variant="outlined"
          placeholder="Insira o Código Peso Validado"
          fullWidth
          margin="normal"
          required
          type="text"
        />

        <TextField
          defaultValue={null}
          value={resultadoTeste}
          onChange={(ev) => setResultadoTeste(ev.target.value)}
          id="resultado-teste"
          label="Resultado Teste"
          variant="outlined"
          placeholder="Ex: Positivo ou Teste com falhas"
          fullWidth
          margin="normal"
          required
          type="text"
        />

        <TextField
          defaultValue={null}
          value={distribuidoraDestino}
          onChange={(ev) => setDistribuidoraDestino(ev.target.value)}
          id="distribuidora-destino"
          label="Distribuidora Destino"
          variant="outlined"
          placeholder="Insira Distribuidora Destino"
          fullWidth
          margin="normal"
          required
          type="text"
        />
        <FooterActions path={"/weightcontroller"}/>
      </form>
    </ContainerApp>
  );
};
