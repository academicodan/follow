import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm, FormActions } from "../context/FormContext";
import { Theme } from "./../Components/Theme";

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
