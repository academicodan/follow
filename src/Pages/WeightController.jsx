import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm, FormActions } from "../context/FormContext";
import { Theme } from "../Components/Theme";

export const WeightController = () => {
  const [codigoPesoValidacao, setCodigoValidacao] = useState("");
  const [codigoLoteValidado, setCodigoLoteValidado] = useState("");
  const [resultadoPeso, setResultadoPeso] = useState("");

  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.validationStepPackgingSystem) {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4,
      });
    } else {
      history.goBack();
    }
  }, []);

  const handleNextStep = () => {
    console.table({ codigoPesoValidacao, codigoLoteValidado, resultadoPeso });
    dispatch({
      type: FormActions.setValidationStepWeightController,
      payload: true,
    });
    history.push("/tests");
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
          value={codigoPesoValidacao}
          onChange={(ev) => setCodigoValidacao(ev.target.value)}
          id="codigo-peso-validacao"
          label="Codigo Peso Validacao"
          variant="outlined"
          placeholder="Insira o Codigo Peso Validacao"
          fullWidth
          margin="normal"
          required
          type="text"
        />

        <TextField
          value={codigoLoteValidado}
          onChange={(ev) => setCodigoLoteValidado(ev.target.value)}
          id="codigo-lote-validado"
          label="Código Lote Validado"
          variant="outlined"
          placeholder="Insira o Código Lote Validado"
          fullWidth
          margin="normal"
          required
          type="text"
        />

        <TextField
          value={resultadoPeso}
          onChange={(ev) => setResultadoPeso(ev.target.value)}
          id="resultado-peso"
          label="Resultado Peso"
          variant="outlined"
          placeholder="Ex: Peso correspondente ou Peso não correspondente"
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
          <Link to="/packgingsystem" style={{ textDecoration: "none" }}>
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
