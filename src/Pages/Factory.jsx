import { Button, InputAdornment, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm, FormActions } from "../context/FormContext";
import { Theme } from "./../Components/Theme";

export const Factory = () => {
  const [codigoLoteFabrica, setCodigoLoteFabrica] = useState("");
  const [tipoResultante, setTipoResultante] = useState("");
  const [quantidadePacotes, setQuantidadePacotes] = useState("");
  const [pesoPacote, setPesoPacote] = useState("");

  const history = useHistory();    

  const { state, dispatch } = useForm();

  useEffect(() => {
    if(state.validationStepLaboratory) {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    } else {
      history.replace('/laboratory')
    }
  }, []);

  const handleNextStep = () => {
    console.table({ codigoLoteFabrica, tipoResultante, quantidadePacotes, pesoPacote });
    dispatch(
      {
        type: FormActions.setValidationStepFactory,
        payload: true
      }
    );
    history.push("/packgingsystem");
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
          value={codigoLoteFabrica}
          onChange={(ev) => setCodigoLoteFabrica(ev.target.value)}
          id="codigo-lote-fabrica"
          label="Código Lote Fábrica"
          variant="outlined"
          placeholder="Insira o Código Lote Fábrica"
          fullWidth
          margin="normal"
          required
          type="text"
        />

        <TextField
          // defaultValue={null}
          value={tipoResultante}
          onChange={(ev) => setTipoResultante(ev.target.value)}
          id="tipo-resultante"
          label="Tipo Resultante"
          variant="outlined"
          placeholder="Insira o Tipo Resultante"
          fullWidth
          margin="normal"
          required
          type="text"
        />

        <TextField
          // defaultValue={null}
          value={quantidadePacotes}
          onChange={(ev) => setQuantidadePacotes(ev.target.value)}
          id="quantidade-pacotes"
          label="Quantidade de Pacotes"
          variant="outlined"
          placeholder="Insira a Quantidade de Pacotes"
          fullWidth
          margin="normal"
          required
          type="number"
        />

        <TextField
          // defaultValue={null}
          value={pesoPacote}
          onChange={(ev) => setPesoPacote(ev.target.value)}
          id="peso-pacote"
          label="Peso Pacote"
          variant="outlined"
          placeholder="Insira o Peso do Pacote"
          fullWidth
          margin="normal"
          required
          type="text"
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
          <Link to="/laboratory" style={{ textDecoration: "none" }}>
            <Button
              variant="text"
              color="default"
              disabled={state.currentStep === 0}
            >
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