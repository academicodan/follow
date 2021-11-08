import { Button, Divider, Typography } from "@material-ui/core";
import * as React from "react";
import { Link } from "react-router-dom";

import style from './styles.module.scss'

export const Header = ({children}) => {
  return (
    // <>
    //   {/* <CssBaseline /> */}
    //   {/* <ElevationScroll {...props}> */}
    //     <AppBar position="static">
    //       <Toolbar>
    //         <Typography variant="h6" component="div">
    //           Scroll to Elevate App Bar
    //         </Typography>
    //       </Toolbar>
    //     </AppBar>
    //   {/* </ElevationScroll> */}
    //   <Toolbar />
    //   {/* <Container>{{ children }}</Container> */}
    // </>
    <>
    <header className={style.displayHeader}>
      <img src="/img/follow-logo.png" alt="follow-logo" className={style.logo}/>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Typography className={style.typography}>Follow</Typography>

      <div className={style.displayLinks}>
        <Link to="/" className={style.link}>
          <Button variant="outlined">
            Simulador de etapas
          </Button>
        </Link>
        <Link to="/tracesimulator" className={style.link}>
        <Button variant="contained" color="secondary">
          Simulador de rastreio
        </Button>
        </Link>
      </div>
    </header>
    <Divider />
    </>
  );
};
