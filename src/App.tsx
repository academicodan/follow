import React from "react";
import { FormProvider } from "./context/FormContext";
import { Router } from "./router";
// import { Container } from "@material-ui/core";
// import LinearStepper from "./Components/LinearStepper";

const App = () =>{
  return (
    // <Container maxWidth="md">
    //   <LinearStepper />
    // </Container>

    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;
