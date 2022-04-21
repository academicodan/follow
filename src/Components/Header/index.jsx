import { Button, Divider, Typography } from "@material-ui/core";
import * as React from "react";
import { Link } from "react-router-dom";

import style from "./styles.module.scss";

export const Header = ({ children }) => {
  return (
    <>
      <header className={style.displayHeader}>
        <img
          src="/img/follow-logo.png"
          alt="follow-logo"
          className={style.logo}
        />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Typography className={style.typography}>Follow</Typography>
        <div className={style.displayLinks}>
          <Link to="/" className={style.link}>
            <Button variant="outlined">Registrar transações</Button>
          </Link>
          <Link to="/searchTrackingSimulator" className={style.link}>
            <Button variant="contained" color="secondary">
              Exibir rastreio
            </Button>
          </Link>
          <Link to="/tableTransactions" className={style.link}>
            <Button variant="contained" color="primary">
              Tabela de Transações
            </Button>
          </Link>
        </div>
      </header>
      <Divider />
    </>
  );
};
