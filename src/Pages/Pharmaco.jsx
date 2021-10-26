import { Button, InputAdornment, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm, FormActions } from "../context/FormContext";
import { Theme } from "./../Components/Theme";

export const Pharmaco = () => {
  const [codigoChaveFarmaco, setCodigoChaveFarmaco] = useState("");
  const [tipo, setTipo] = useState("");
  const [peso, setPeso] = useState("");

  const history = useHistory();
  const { dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 0,
    });
  }, []);

  const handleNextStep = () => {
    console.table({ codigoChaveFarmaco, tipo, peso });
    dispatch({
      type: FormActions.setValidationStepPharmaco,
      payload: true,
    });
    history.push('/laboratory');
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
          value={codigoChaveFarmaco}
          onChange={(ev) => setCodigoChaveFarmaco(ev.target.value)}
          id="codigo-chave-farmaco"
          label="Codigo Chave Fármaco"
          variant="outlined"
          placeholder="Insira o Código Chave Fármaco"
          fullWidth
          margin="normal"
          required
          type="text"
        />

        <TextField
          // defaultValue={null}
          value={tipo}
          onChange={(ev) => setTipo(ev.target.value)}
          id="tipo"
          label="Tipo"
          variant="outlined"
          placeholder="Insira o Tipo"
          fullWidth
          margin="normal"
          required
          type="text"
        />

        <TextField
          // defaultValue={null}
          value={peso}
          onChange={(ev) => setPeso(ev.target.value)}
          id="peso"
          label="Peso"
          variant="outlined"
          placeholder="Insira o Peso do Fármaco"
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
            <Button variant="text" color="default" disabled>
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
