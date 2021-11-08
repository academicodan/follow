import { Button, InputAdornment, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm, FormActions } from "../context/FormContext";
import { Theme } from "./../Components/Theme";
import axios from "axios";

export const Laboratory = () => {

  const [codigoLote, setCodigoLote] = useState("");
  const [quantidadeFarmaco, setQuantidadeFarmaco] = useState("");
  const [pesoTotal, setPesoTotal] = useState("");
  const [listaChaveFarmaco, setListaChaveFarmaco] = useState("");

  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    console.log(state.validationStepPharmaco)
    if(state.validationStepPharmaco){
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 1,
      });
    } else {
      history.goBack()
    }
  }, []);

  const handleNextStep = () => {
    console.table({ codigoLote, quantidadeFarmaco, pesoTotal, listaChaveFarmaco});
    //2. codar aqui
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    var datetimenow = today.toLocaleDateString() + " " + today.toLocaleTimeString();
    var data = JSON.stringify({"channel":"pucchannel","chaincode":"oabcs-medicine-puc","chaincodeVer":"v2","method":"addLoteLabs","args":[codigoLote,datetimenow,quantidadeFarmaco,pesoTotal,listaChaveFarmaco]});

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
    dispatch(
      {
        type: FormActions.setValidationStepLaboratory,
        payload: true
      }
    );
    history.push("/factory");
  };

  return (
    <Theme>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          handleNextStep();
        }}
      >
        <TextField
          value={codigoLote}
          onChange={(ev) => setCodigoLote(ev.target.value)}
          id="codigo-lote"
          label="Codigo Lote"
          variant="outlined"
          placeholder="Insira o Código Lote"
          fullWidth
          margin="normal"
          required
          type="text"
        />

        <TextField
          value={quantidadeFarmaco}
          onChange={(ev) => setQuantidadeFarmaco(ev.target.value)}
          id="quantidade-farmaco"
          label="Quantidade Fármaco"
          variant="outlined"
          placeholder="Insira a Qunatidade Fármaco"
          fullWidth
          margin="normal"
          required
          type="number"
        />

        <TextField
          value={listaChaveFarmaco}
          onChange={(ev) => setListaChaveFarmaco(ev.target.value)}
          id="lista-chave-farmaco"
          label="Lista Chave Fármaco"
          variant="outlined"
          placeholder="Insira a Lista Chave Fármaco"
          fullWidth
          margin="normal"
          required
          type="text"
        />

        <TextField
          value={pesoTotal}
          onChange={(ev) => setPesoTotal(ev.target.value)}
          id="peso"
          label="Peso total"
          variant="outlined"
          placeholder="Insira o peso total"
          fullWidth
          margin="normal"
          required
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="text" color="default">
              Back
            </Button>
          </Link>
          <Button variant="contained" color="primary" type="submit">
            Next
          </Button>
        </div>
      </form>
    </Theme>
  );
};
