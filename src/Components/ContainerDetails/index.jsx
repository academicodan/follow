import React from "react"
import { Container } from "./ContainerDetails.styled";

export const ContainerDetails = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
};
