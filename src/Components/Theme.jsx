import React, { useState, useEffect, Children } from "react";
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Divider,
} from "@material-ui/core";

import { useForm } from "../context/FormContext";

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

export const Theme = ({ children }) => {
  const steps = getSteps();
  const { state } = useForm();

  return (
    <div>
      <div>
        header
        <hr />
      </div>
      <div style={{ display: "flex" }}>
        <Stepper activeStep={state.currentStep} orientation="vertical">
          {steps.map((stepItem, index) => {
            return (
              <Step key={index} >
                <StepLabel>{stepItem}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {/* <span
          style={{
            display: "inlineBlock",
            borderLeft: "1px solid #ccc",
            margin: " 50px 40px",
            height: "500px",
          }}
        ></span> */}
        <Divider orientation="vertical" variant="middle" flexItem />
        {children}
      </div>
    </div>
  );
};
