import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm, FormActions } from "../context/FormContext";
import { Theme } from "./../Components/Theme";
import axios from "axios";

export const Distributor = () => {
  const [distribuidora, setDistribuidora] = useState("");
  const [codigoLoteDistribuidora, setCodigoLoteDistribuidora] = useState("");

  const { state, dispatch } = useForm();
  const history = useHistory();

  useEffect(() => {
    if (state.validationStepTests) {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 6,
      });
    } else {
      history.push("/tests");
    }
  }, []);

  const handleNextStep = () => {
    console.table({ distribuidora, codigoLoteDistribuidora });
    //7 aqui
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    var datetimenow = today.toLocaleDateString() + " " + today.toLocaleTimeString();
    var data = JSON.stringify({"channel":"pucchannel","chaincode":"oabcs-medicine-puc","chaincodeVer":"v2","method":"addItemDistribuido","args":[distribuidora,datetimenow,codigoLoteDistribuidora]});

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
    history.push('/final')
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
          // defaultValue={null}
          value={distribuidora}
          onChange={(ev) => setDistribuidora(ev.target.value)}
          id="distribuidora"
          label="Distribuidora"
          variant="outlined"
          placeholder="Insira a Distribuidora"
          fullWidth
          margin="normal"
          required
          type="text"
        />

        <TextField
          // defaultValue={null}
          value={codigoLoteDistribuidora}
          onChange={(ev) => setCodigoLoteDistribuidora(ev.target.value)}
          id="codigo-lote-distribuidora"
          label="Código Lote Distribuidora"
          variant="outlined"
          placeholder="Insira o Código Lote Distribuidora"
          fullWidth
          margin="normal"
          required
          type="text"
        />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Link to="/tests" style={{ textDecoration: "none" }}>
            <Button variant="text" color="default">
              Back
            </Button>
          </Link>
          <Button variant="contained" color="primary" type="submit">
            Finish
          </Button>
        </div>
      </form>
    </Theme>
  );
};
