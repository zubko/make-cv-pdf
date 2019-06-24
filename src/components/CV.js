import React from "react";
import { Page, Document } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import Header from "./Header";
import Goal from "./Goal";
import Skills from "./Skills";
import Experience from "./Experience";
import CodeExamples from "./CodeExamples";

const StyledPage = styled(Page)`
  background-color: white;
  flex-direction: column;
  font-family: "Content";
`;

const CV = () => (
  <Document size="A4" title="CV-Alexander-Zubko-iOS-Android-ReactNative">
    <StyledPage>
      <Header />
      <Goal />
      <Skills />
      <Experience />
      <CodeExamples />
    </StyledPage>
  </Document>
);

export default CV;
