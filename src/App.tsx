import React from "react";
import { FormProvider } from "./context/FormContext";
import { Router } from "./router";
// import '../src/styles/global.scss'
import './App.scss'
import { createTheme, ThemeProvider } from "@material-ui/core";
// import { Container } from "@material-ui/core";
// import LinearStepper from "./Components/LinearStepper";


const App = () =>{
  const theme = createTheme({
    palette: {
      type: 'dark',
      background: {
        paper: '#1C1E26'
      },
      primary: {
        // main: '#8F4EAc'
        main: '#F2858e'
        // main: '#bd41BF'
      },
      secondary: {
        main: '#F2858E'
      },
      // text: {
      //   primary: '#F279A6',
      //   secondary: '#F2858E'
      // },

      divider: '#2A2B36',
    }
  })
  return (
    // <Container maxWidth="md">
    //   <LinearStepper />
    // </Container>
    <ThemeProvider theme={theme}>
    <FormProvider>
      <Router />
    </FormProvider>
    </ThemeProvider>
  );
}

export default App;
