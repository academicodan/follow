import React from "react"
import {
  Avatar,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Business, Compare, ControlPoint, EmojiTransportation, GroupWork, LineWeight, LocalCarWash, LocalPharmacy, LocalPharmacyTwoTone, Work } from "@material-ui/icons";
import { ContainerApp } from "../../Components/ContainerApp";



const PharmacoList = ({ teste }) => {
  console.log({ teste });
  return teste.map((item) => (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalPharmacy />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Fármacos"
          alignItems="flex-start"
          display="block"
          secondary={
            <>
              <Typography component="span" variant="body2" color="textPrimary">
                Codigo Chave Farmaco:
              </Typography>
              {""}
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Tipo:
              </Typography>
              {""}
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Peso:
              </Typography>
              {""}
              <br />
            </>
          }
        />
      </ListItem>
      <Divider />
    </>
  ));
};

export const LaboratoryList = () => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <GroupWork />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Laboratório"
          alignItems="flex-start"
          display="block"
          secondary={
            <>
              <Typography component="span" variant="body2" color="textPrimary">
                Codigo Lote:
              </Typography>
              {""}
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Quantidade Fármaco:
              </Typography>
              {""}
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Lista Fármaco:
              </Typography>
              {""}
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Peso Total:
              </Typography>
              {""}
              <br />
            </>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};

export const FactoryList = () => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Business />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Fábrica"
          alignItems="flex-start"
          display="block"
          secondary={
            <>
              <Typography component="span" variant="body2" color="textPrimary">
                Codigo Lote Fábrica:
              </Typography>
              {""}
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Tipo Resultante:
              </Typography>
              {""}
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Quantidade de Pacotes:
              </Typography>
              {""}
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Peso por Pacote:
              </Typography>
              {""}
              <br />
            </>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};

export const PackgingSystemList = () => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ControlPoint />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Sistema de Embalagens"
          alignItems="flex-start"
          display="block"
          secondary={
            <>
              <Typography component="span" variant="body2" color="textPrimary">
                Codigo lote embalagens:
              </Typography>
              {""}
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Tipo:
              </Typography>
              {""}
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Quantidade:
              </Typography>
              {""}
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Peso:
              </Typography>
              {""}
              <br />
            </>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};

export const WeightControllerList = () => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LineWeight />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Controladoria de Peso"
          alignItems="flex-start"
          display="block"
          secondary={
            <>
              <Typography component="span" variant="body2" color="textPrimary">
                Codigo Peso Validação:
              </Typography>
              {""}
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Codigo Lote Validado:
              </Typography>
              {""}
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Resultado:
              </Typography>
              {""}
              <br />
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export const TestsList = () => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Compare />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Testes"
          alignItems="flex-start"
          display="block"
          secondary={
            <>
              <Typography component="span" variant="body2" color="textPrimary">
                Código Teste:
              </Typography>
              {""}
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Código Peso Validado:
              </Typography>
              {""}
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Resultado Teste:
              </Typography>
              {""}
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Distribuidora Destino:
              </Typography>
              {""}
              <br />
            </>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};

export const DistributorList = () => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmojiTransportation />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Distribuidora"
          alignItems="flex-start"
          display="block"
          secondary={
            <>
              <Typography component="span" variant="body2" color="textPrimary">
                Distribuidora:
              </Typography>
              {""}
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Código Lote Distribuidora:
              </Typography>
              {""}
              <br />
            </>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};

const teste = ["1", "2", "3"];

export const TrackingSimulator = () => {
  return (
    <ContainerApp notStep>
      <Container>
        <List style={{ height: "60vh", overflowY: "scroll" }}>
          <PharmacoList teste={teste} />
          <LaboratoryList />
          <FactoryList />
          <PackgingSystemList />
          <WeightControllerList />
          <TestsList />
          <DistributorList />
        </List>
      </Container>
    </ContainerApp>
  );
};
