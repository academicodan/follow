import React from "react";
import { Routes } from "./router";
import './App.scss'
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Authprovider } from "./Context/AuthContext";
import { Router } from "react-router-dom";
import history from "./history";
import { FormProvider } from "./Context/FormContext/FormProvider";


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
        // main: '#F279A6',
    

      // text: {
      //   primary: '#FFF',
      //   secondary: '#1C1E26'
      // },

      divider: '#2A2B36',
    },  

    // icon {

    // }
    typography: {
      subtitle1: {
        fontSize: '1.2rem',
        fontWeight: 'lighter',
      }
    },
  })


  // const theme = createTheme({
  //   typography: {
  //     button: {
  //       fontSize: '1rem',
  //     },
  //   },
  // });
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
