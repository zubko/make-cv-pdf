import React from "react";
import { Page, Document, View, Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { Header, Goal, Skills, References, Experience, WantToLearn } from "./components";

const StyledPage = styled(Page)`
  background-color: white;
  flex-direction: column;
  font-family: "Content";
`;

const CodeExamples = () => (
  <View style={{ backgroundColor: "lightgray", padding: 5 }}>
    <Text>
      Code Examples: https://codesandbox.io/u/zubko , https://codepen.io/zubko/
      , https://github.com/zubko
    </Text>
  </View>
);

const Comp = () => (
  <Document size="A4">
    <StyledPage>
      <Header />
      <Goal />
      <Skills />
      <CodeExamples />
      <Experience />
      <References />
      <WantToLearn/>
    </StyledPage>
  </Document>
);

export default Comp;
