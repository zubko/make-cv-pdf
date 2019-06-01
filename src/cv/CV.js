import React from "react";
import { Page, Document } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { Header, Goal, Skills, References, Experience } from "./components";

const StyledPage = styled(Page)`
  background-color: white;
  flex-direction: column;
  font-family: "Content";
`;

const Comp = () => (
  <Document size="A4">
    <StyledPage>
      <Header />
      <Goal />
      <Skills />
      <Experience />
      <References />
    </StyledPage>
  </Document>
);

export default Comp;
