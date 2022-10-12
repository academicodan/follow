import React from "react";
import { FormProvider } from "./Context/FormContext";
import { Routes } from "./router";
import './App.scss'
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Authprovider } from "./Context/AuthContext";
import { Router } from "react-router-dom";
import history from "./history";


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
        // main: '#F279A6'
      },
      // text: {
      //   primary: '#F279A6',
      //   secondary: '#F2858E'
      // },

      divider: '#2A2B36',
    },
    typography: {
      fontFamily: 'Roboto'
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <FormProvider>
        <Authprovider>
          <Router history={history}>
            <Routes /> 
          </Router>
        </Authprovider>
      </FormProvider>
    </ThemeProvider>
  );
}

export default App;
