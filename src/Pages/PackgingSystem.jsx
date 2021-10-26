import { Button, InputAdornment, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm, FormActions } from "../context/FormContext";
import { Theme } from "./../Components/Theme";

export const PackgingSystem = () => {
  const [codigoLoteEmbalagens, setCodigoLoteEmbalagens] = useState("");
  const [tipoFarmacoEmbalagem, setTipoFarmacoEmbalagem] = useState("");
  const [quantidadeFarmacoEmbalagem, setQuantidadeFarmacoEmbalagem] = useState(
    ""
  );
  const [pesoEmbalagem, setPesoEmbalagem] = useState("");

  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.validationStepFactory) {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    } else {
      history.goBack()
    }
  }, []);

  const handleNextStep = () => {
    console.table({
      codigoLoteEmbalagens,
      tipoFarmacoEmbalagem,
      quantidadeFarmacoEmbalagem,
      pesoEmbalagem,
    });
    dispatch({
      type: FormActions.setValidationStepPackgingSystem,
      payload: true,
    });
    history.push("/weightcontroller");
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
          value={codigoLoteEmbalagens}
          onChange={(ev) => setCodigoLoteEmbalagens(ev.target.value)}
          id="codigo-lote-embalagens"
          label="Código Lote Embalagens"
          variant="outlined"
          placeholder="Insira o Código Lote Embalagens"
          fullWidth
          margin="normal"
          required
          type="text"
        />

        <TextField
          value={tipoFarmacoEmbalagem}
          onChange={(ev) => setTipoFarmacoEmbalagem(ev.target.value)}
          id="tipo-farmaco-embalagem"
          label="Tipo"
          variant="outlined"
          placeholder="Insira o Tipo"
          fullWidth
          margin="normal"
          required
          type="text"
        />

        <TextField
          value={quantidadeFarmacoEmbalagem}
          onChange={(ev) => setQuantidadeFarmacoEmbalagem(ev.target.value)}
          id="quantidade-farmaco-embalagem"
          label="Quantidade Fármaco Embalagem"
          variant="outlined"
          placeholder="Insira a Quantidade Fármaco Embalagem"
          fullWidth
          margin="normal"
          required
          type="number"
        />

        <TextField
          value={pesoEmbalagem}
          onChange={(ev) => setPesoEmbalagem(ev.target.value)}
          id="peso-embalagem"
          label="Peso"
          variant="outlined"
          placeholder="Insira o peso da Embalagem"
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
          <Link to="/factory" style={{ textDecoration: "none" }}>
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
