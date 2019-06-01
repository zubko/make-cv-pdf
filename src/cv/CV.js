import React from "react";
import { View, Page, Document } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { Header, Goal, Skills, References, Experience } from "./components";

const StyledPage = styled(Page)`
  background-color: white;
  flex-direction: column;
`;
const Columns = styled(View)`
  flex-direction: row;
  flex: 1;
`;
const LeftColumn = styled(View)`
  flex: 0.3;
  flex-direction: column;
  background-color: #263547;
  color: white;
`;
const RightColumn = styled(View)`
  flex: 0.7;
  flex-direction: column;
`;

const Comp = () => (
  <Document size="A4">
    <StyledPage>
      <Header />
      <Columns>
        <LeftColumn>
          <Skills />
          <References />
        </LeftColumn>
        <RightColumn>
          <Goal />
          <Experience />
        </RightColumn>
      </Columns>
    </StyledPage>
  </Document>
);

export default Comp;
